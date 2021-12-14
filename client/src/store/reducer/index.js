import Order from '../../components/order'
import { ASCENDENTE , DECENDENTE } from '../../constante/sort'
import {GET_ALL_COUNTRY,GET_COUNTRY,SORT} from '../actions'

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
let orderCountry = [...state.countris]

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


default:
    return state
}
 }