import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//Style
import './styles/App.css';

//BDD

//Components 
import NavbarInicio from './components/layout/navbar-inicio/NavbarInicio'
import Navbar from './components/layout/navbar/Navbar'
import Inicio from './components/layout/index/Inicio'
import Footer from './components/layout/footer/Footer'
import Ayuda from './components/layout/ayuda/Ayuda'



//Main App
class App extends Component {

  render(){
    return <div className="App">
          
          <Router>
            
              <Route exact path="/" render={()=> {
                return <div className="container"> 
                <NavbarInicio/>
                <Inicio/>
                <Footer/>
                </div>
            }}/>

              <Route exact path="/ayuda" render={()=>{
                return  <div> 
                <Navbar/>
                <Ayuda/>
                <Footer/>
                </div>
              }}/>            
          </Router>
      </div>
  }

}


export default App;
