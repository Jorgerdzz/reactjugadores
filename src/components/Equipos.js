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

    deleteEquipos = () => {

    }

  render() {
    return (
      <div>
        <h1 className='text-center m-3'>Equipos</h1>
        <div className='d-flex'>
            {
                this.state.equipos.map((equipo, index)=>{
                    return(
                        <div className='row'>
                            <div className='col-md-4 m-2 d-flex justify-content-center w-100'>
                                <div key={index} className='card m-2 d-flex align-items-center' style={{width: "20rm"}}>
                                    <img src={equipo.imagen} className="card-img-top" style={{width: "100px", height: "125px"}} alt={equipo.nombre}></img>
                                    <div className="card-body flex-column justify-content-center">
                                        <h5 className="card-title">{equipo.nombre}</h5>
                                        <p className="card-text">Champions: {equipo.champions}</p>
                                        <a href={equipo.web}>Sitio web</a><br></br>
                                        <NavLink to={"/jugadores/" + equipo.idEquipo} className="btn btn-primary d-grid mt-2">Ver jugadores</NavLink>
                                    </div>
                                </div>
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
