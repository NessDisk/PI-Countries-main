import axios from "axios"

export const GET_ALL_COUNTRY = 'GET_ALL_COUNTRY'
export const GET_COUNTRY = 'GET_COUNTRY'
export const SORT = 'SORT'
export const MAYOR_MENOR = 'MAYOR_MENOR'
export const ORDER_CONTINENT = 'ORDER_CONTINENT'
export const ORDER_ACTIVIDAD = 'ORDER_CONTINENT'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const GET_ALL_ACTIVITY = 'GET_ALL_ACTIVITY'
export const GET_COUNTRY_BY_ACTIVITY = 'GET_COUNTRY_BY_ACTIVITY'

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

export function AddNewActivity(activity)
{
    return function(dispatch){
        
        axios.post('http://localhost:3001/api/activity',
        {
            activity
        })
        .then((activity)=> {  
            console.log(activity)         
            dispatch({
            type:ADD_ACTIVITY,
            payload: activity.data
            })
        }).catch(error =>  {
            console.log(error)
        })
}

}

export function getAllActivity(name)
{ 
 
    return function(dispatch){
        
        axios.get('http://localhost:3001/api/activity/')
        .then((Activitys)=> {           
            dispatch({

            type:GET_ALL_ACTIVITY,
            payload: Activitys.data
            })
        }).catch(error =>  {
            console.log(error)
        })
      
}
}



export function getCountryByActivity(name)
{ 
 
    return function(dispatch){
        
        axios.get('http://localhost:3001/api/activity/AC/'+name)
        .then((Countries)=> { 
                   
            dispatch({
            type:GET_COUNTRY_BY_ACTIVITY,
            payload: Countries.data
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


export function Order_Population(Order)
{
        return {
        type:MAYOR_MENOR,
        payload: Order
        }
}

export function Order_Continente(Continen)
{
        return {
        type:ORDER_CONTINENT,
        payload: Continen
        }
}



