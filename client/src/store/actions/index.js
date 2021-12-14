import axios from "axios"

export const GET_ALL_COUNTRY = 'GET_ALL_COUNTRY'
export const GET_COUNTRY = 'GET_COUNTRY'
export const SORT = 'SORT'

export function getAllCountry()
{ 
 
    return function(dispatch){
        
        axios.get('http://localhost:3001/api/country/')
        .then((countrys)=> {           
            dispatch({
            type:GET_ALL_COUNTRY,
            payload: countrys.data
            })
        }).catch(error =>  {
            console.log(error)
        })
      
}
}


export function searchCountry(search)
{
    return function(dispatch){
        
        axios.get('http://localhost:3001/api/country/query?name='+ search)
        .then((country)=> {           
            dispatch({
            type:GET_COUNTRY,
            payload: country.data
            })
        }).catch(error =>  {
            console.log(error)
        })
}

}



export function Sort(Order)
{
        return {
        type:SORT,
        payload: Order
        }
}



