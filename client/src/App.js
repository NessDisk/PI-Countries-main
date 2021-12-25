import './App.css';
import Countrys from './components/countrys';
import SearchBar from './components/searchtbar';
import OrderbyContinente from './components/orderByCountry';
import Order from './components/order' 
 import DetailCountry from './components/detailCountry'
 import AddActivity from './components/addActivity';
import {Switch, Route} from "react-router";
import OrderByActivity from './components/orderByActivity';
import Inicial from './components/inicial'
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
               <Switch>   
                   <Route path="/add">
                         <Nav/>          
                         <AddActivity/>                         
                   </Route> 
                   <Route path="/p/:id">
                   <Nav/> 
                          <DetailCountry/>          
                  </Route>       
                   <Route path="/p">
                   <Nav/> 
                         <SearchBar/>           
                        <Order/> 
                      <OrderbyContinente/>
                          <OrderByActivity/>
                          <Countrys/>
                   </Route> 
                   <Route path="/">
                    
                         <Inicial/>
                              {/*  PONER EL BOTON PARA MOVERSE ENTRE RUTAS
                         */}
                   </Route>
                </Switch>
              
                          
    </div>
  )
}

export default App;
