import './App.css';
import Countrys from './components/countrys';
import SearchBar from './components/searchtbar';
import Order from './components/order' 
 import DetailCountry from './components/detailCountry'
 import AddActivity from './components/addActivity';
import {Switch, Route} from "react-router";


function App() {
  return (
    <div className="App">
           <SearchBar/>           
          
               <Switch>             
                   <Route path="/add">
                         <AddActivity/>                         
                   </Route> 
                   <Route path="/:id">
                          <DetailCountry/>          
                  </Route>       
                   <Route path="/">
                         <Order/> 
                         <Countrys/>
                   </Route> 
                </Switch>
              
                          
    </div>
  )
}

export default App;
