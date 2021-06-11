import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { Pokemon } from './pages/Pokemon'
// import axios from 'axios'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container pt-4">
     <Switch>
       <Route path={'/'} exact component={Home} />
       <Route path={'/about'} component={About} />
       <Route path={'/pokemon:id'} component={Pokemon} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
