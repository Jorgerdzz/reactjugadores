import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Equipos extends Component {

    url = Global.apiEjemplos

    state = {
        equipos: []
    }

    loadEquipos = () => {
        let request = "api/Equipos";
        axios.get(this.url + request).then(response => {
            this.setState({
                equipos: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadEquipos();
    }

  render() {
    return (
      <div>
        <h1 className='text-center m-3'>Equipos</h1>
        <div className='d-flex'>
            {
                this.state.equipos.map((equipo, index)=>{
                    return(
                        <div key={index} className="card d-flex align-items-center m-2" style={{width: "18rem"}}>
                            <img src={equipo.imagen} className="card-img-top" style={{width: "100px"}} alt={equipo.nombre}></img>
                            <div className="card-body">
                                <h5 className="card-title">{equipo.nombre}</h5>
                                <p className="card-text">{equipo.descripcion}</p>
                                <NavLink to={"/jugadores/" + equipo.idEquipo} className="btn btn-primary">Ver jugadores</NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
