 import React, { Component } from "react";
 import Imagen from "./Imagenes";
import Paginacion from "./Paginacion";

 class Resultado  extends Component {
    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;
        
        if(imagenes.length == 0 ) return null;

         //console.log(imagenes);
        
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen =>(
                        <Imagen
                            key={imagen.id}
                             imagen  = {imagen}
                    />
                     ))}
                </div>
                <Paginacion
                    PaginaAnterior={this.props.PaginaAnterior}
                    PaginaSiguiente={this.props.PaginaSiguiente}
                /> 
            </React.Fragment>
        )
    } 


        render() {
            return this.mostrarImagenes();
        }
    }
 export default Resultado;
