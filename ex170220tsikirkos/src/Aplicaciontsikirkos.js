import React, { Component } from 'react'
/* import Distribucion1 from './distribuciones/Distribucion1'
import { Router, Link } from "@reach/router"; */
import DistribucionTsiKirKos from './DistribucionTsiKirKos.js'
import Distribucion3TsiKirKos from './Distribucion3TsiKirKos.js'


class Aplicaciontsikirkos extends Component {

    render() {
        return (
            <div className="contenedorEjer1tsikirkos">
                <ul className="contenedorEjer1tsikirkos__ul">
                    <li className="contenedorEjer1tsikirkos__ul__li"><a href="">Distribucion 1</a></li>
                    <li className="contenedorEjer1tsikirkos__ul__li"><a href="">Distribucion 2</a></li>
                    <li className="contenedorEjer1tsikirkos__ul__li"><a href="">Distribucion 3</a></li>
                    <li className="contenedorEjer1tsikirkos__ul__li"><a href="">Pruebas</a></li>
                </ul>
                <DistribucionTsiKirKos/>
                <Distribucion3TsiKirKos/>
            </div >
        )
    }
}
export default Aplicaciontsikirkos