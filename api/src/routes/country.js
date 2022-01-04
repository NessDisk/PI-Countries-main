const { Router } = require('express');
const {Op} = require(`sequelize`)
const {Country} = require('../db');
const axios = require("axios");
const router = Router();

router.get("/",async(req, res, next)=>{
  
   let listacompletaciudades;   



 listacompletaciudades = axios.get("https://restcountries.com/v2/all")
let datas = await listacompletaciudades;


const citis  =  await Country.findAll()
if(citis.length === 0 )
{


   

    let test = datas.data.map((countrys)=>{

    return {     
              id: countrys.alpha3Code, 
            name: countrys.name,
            imageflag:countrys.flag,
            Continente: countrys.region,
            capital   : countrys.capital,
            Subregion : countrys.subregion,
            Area: countrys.area,
            Poblation: countrys.population
}

})

    let index = 0;   
    try{ 
    for(index ; index <  250 ; index++)
    {
     result =  await Country.create(test[index])
    }
      const citis  =  await Country.findAll()
      res.send(citis)
}catch(error)
{
    console.log(test[index]);
    next(error)
}



    }else
    {
        res.send(citis)
    }
}
// }


)
  
    router.get("/prueba",async(req, res, next)=>{
        const citis  =  await Country.findAll()
        res.send(citis)

        }
        
           )

router.get("/query",async(req, res, next)=>{
               let name =  req.query.name 

           const  CountrysDB = await Country.findAll(
            { where: { name: {
                    [Op.iLike]: "%"+name+"%"
                }},
                order: [                   
                    ['name', 'ASC'],
                ], 
            
            })

res.json(CountrysDB)
            
    }   
)

router.get("/:id",async(req, res, next)=>{
    let id =  req.params.id 
    let  CountrysDB 
    
    try{

          CountrysDB = await Country.findByPk(id)

          res.json(CountrysDB)
    }catch(error)
    {

        next(error)   
    } 
}   
)

    
    
router.post("/",async(req, res, next)=>{


    try{        
        const{name,
            imageflag,
             Continente,
             capital ,
             Subregion,
              Area,
              Poblation} =  req.body;
        const newCountry = await Country.create({name,
            imageflag,
             Continente,
             capital ,
             Subregion,
             Area,
             Poblation
        
        })
        
        res.send(newCountry)

    }catch(error)
    {
        next(error)
    }

    


    
}



)
        
router.put("/",(req, res, next)=>{
     res.send("soy put / Country")
 })
            
 router.delete("/",(req, res, next)=>{
      Country.sync({ force: true }); 
     res.send("soy delete / Country")
 })
                


module.exports = router;
