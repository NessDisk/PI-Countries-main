const { Router } = require('express');
const {Op} = require(`sequelize`)
const {Activity, Country, Country_Activity} = require('../db');
const axios = require("axios");
const router = Router();


router.get("/",async(req, res, next)=>{
    const activitis  =  await Activity.findAll()
    res.send(activitis)  
})

router.get("/AC/:name",async(req, res, next)=>{


    const namex = req.params.name
// encuentra el ID de la acticidad
let  Activityx = await Activity.findOne(
    { where: { name: {
        [Op.iLike]: "%"+namex+"%"
       }},
   })
   
   const ActivityByCountrys  = await  Country_Activity.findAll(
    { where:
        {
            activityId : Activityx.id
        }
     }
   
)

// Crea un array donde se organizan agregan los paises
// que tienen esta actividad 
let countrys_Acti = [];
                                    
for(let i = 0; i < ActivityByCountrys.length ; i++ )
{
    const countryAux = await Country.findByPk(ActivityByCountrys[i].countryId)

   if(countryAux)
               {
                countrys_Acti.push(countryAux)
               }
}


res.send(countrys_Acti )

})

router.get("/all",async(req, res, next)=>{
    
    const ActivityByCountrys  = await Activity.findAll(
        { include: Country }
    )
    res.json(ActivityByCountrys )


})

router.post("/", async(req, res, next)=>{
// creamos una nueva actividad que pasamos por el body
console.log(req.body)


try{  
const {
    name,
    Dificulty,
    duracion,
    Temporada
 } = req.body.activity.actividad
 console.log(name+"/"+
 Dificulty+"/"+
 duracion+"/"+
 Temporada)
 const newActivity =  await Activity.create(
    {   name:name,
        Dificulty:Dificulty,
        duracion:duracion,
        Temporada:Temporada
    }
 )
console.log(req.body.activity.AuxResult)

 let arrayCountris   = Object.keys(req.body.activity.AuxResult)
 // creamos buscamos por parametro el id de la ciudad y la sostenemos

 for(let i = 0; i < arrayCountris.length ; i++ )
 {
   
     let namex =   arrayCountris[i]
     
     let  CountryX = await Country.findOne(
         { where: { name: {
             [Op.iLike]: "%"+namex+"%"
            }},
        }) 
        console.log(CountryX)

        
    // los relacionamos  en las tablas intermedias 
    //await CountryX.addActivity(newActivity.id ,  { through: { selfGranted: false } })
    await CountryX.addActivity(newActivity.id )

 }
 //retornar la nueva actividad
const activitis  =  await Activity.findAll()
res.send(activitis)

}catch(error)
{
    next(error)
}
    })
    
    router.put("/",(req, res, next)=>{
        res.send("soy put / activity")
        })
        
        router.delete("/",(req, res, next)=>{
            
            Activity.sync({ force: true }); 
            country_Activity.destroy({
                truncate: true
              })
            res.send("soy delete / activity")
            })
            
module.exports = router;
