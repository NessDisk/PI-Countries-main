import Order from '../../components/order'
import { ASCENDENTE , DECENDENTE,POBLACION, } from '../../constante/sort'
import {GET_ALL_COUNTRY,
        GET_COUNTRY,
        SORT,
        MAYOR_MENOR,
        ORDER_CONTINENT, 
        ORDER_ACTIVIDAD ,
        ADD_ACTIVITY ,
        GET_ALL_ACTIVITY,
        GET_COUNTRY_BY_ACTIVITY
        } from '../actions'

        import { none } from '../../constante/cotinents'

const initialState ={
 countris:[], 
 country:{},
 filerteredCountris:[],
 activty:[]
 }

 export default function reducer(
     state = initialState,action
 )
 {    
  
    let orderCountry;

switch(action.type)
{
case GET_ALL_COUNTRY:
return{
    ...state,
    countris: action.payload,
    filerteredCountris : action.payload,
}

case GET_COUNTRY:
return{
    ...state,
   // filerteredCountris: action.payload
   countris: action.payload
}

case SORT:
 orderCountry = [...state.countris]

orderCountry = orderCountry.sort((a,b)=>
{
if( a.name < b.name )
{
    return action.payload === ASCENDENTE ? -1:1;
}
if( a.name > b.name )
{
    return action.payload === ASCENDENTE ? 1 : -1;
}
}

)


return{
    ...state,
   // filerteredCountris: action.payload
   countris: orderCountry
}

case MAYOR_MENOR:

    orderCountry = [...state.countris]


    const bubbleSort = arr => {
        const l = arr.length;
        for (let i = 0; i < l; i++ ) {
          for (let j = 0; j < l - 1 - i; j++ ) {

            if(POBLACION === action.payload)
            {
                if ( arr[ j ].Poblation < arr[ j + 1 ].Poblation ) {
                [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];

            }
            }else{
                if ( arr[ j ].Poblation > arr[ j + 1 ].Poblation ) {
                    [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
    
                }

            }
          }
        }
      
        return arr;
      };
      
      orderCountry = bubbleSort(orderCountry)

     

    return{
        ...state,
       // filerteredCountris: action.payload
       countris: orderCountry
    }

case ORDER_CONTINENT:

     orderCountry = [...state.filerteredCountris]
    
     
    if(none !== action.payload)
    {  
        orderCountry = orderCountry.filter((x)=>{

             if(x.Continente === action.payload)
                    {
                        return x
                    }
            }    
        )
    }
        
    return{
        ...state,
       // filerteredCountris: action.payload
       countris: orderCountry
    }

    case ADD_ACTIVITY:
    return{
        ...state,
       // filerteredCountris: action.payload
       activty: action.payload
    }

    case GET_ALL_ACTIVITY:
        return{
            ...state,      
            activty: action.payload
        }
        
    case GET_COUNTRY_BY_ACTIVITY:
            
            console.log("Estoy reducer")
    return{
                ...state,      
                countris: action.payload
            }
    


default:
    return state
}
 }