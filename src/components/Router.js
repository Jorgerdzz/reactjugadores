import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Equipos from './Equipos'
import Jugadores from './Jugadores'

export default class Router extends Component {
  render() {

    function JugadoresElement(){
        let {idequipo} = useParams();
        return(<Jugadores idequipo={idequipo}/>)
    }

    return (
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/equipos' element={<Equipos/>} />
        <Route path='/jugadores/:idequipo' element={<JugadoresElement/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
