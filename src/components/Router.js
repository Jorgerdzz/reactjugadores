import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Equipos from './Equipos'
import Jugadores from './Jugadores'
import JugadorDetalle from './JugadorDetalle'
import CreateEquipo from './CreateEquipo'
import CreateJugador from './CreateJugador'

export default class Router extends Component {
  render() {

    function JugadoresElement(){
        let {idequipo} = useParams();
        return(<Jugadores idequipo={idequipo}/>)
    }

    function IdJugadorElement(){
        let {idjugador} = useParams();
        return(<JugadorDetalle idjugador={idjugador}/>)
    }

    function AnadirJugadorElement(){
      let {idequipo} = useParams();
      return(<CreateJugador idequipo={idequipo}/>)
    }

    return (
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Equipos/>}/>
        <Route path='/jugadores/:idequipo' element={<JugadoresElement/>}/>
        <Route path='/jugador/:idjugador' element={<IdJugadorElement/>}/>
        <Route path='/crearequipo' element={<CreateEquipo/>} />
        <Route path='/createjugador/:idequipo' element={<AnadirJugadorElement/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
