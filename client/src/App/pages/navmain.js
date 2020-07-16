import React, { Component } from 'react';
import LicenciamientoTab from './mains/licenciamientotab';
import ProgramasAcademicosTab from './mains/programasacademicostab';
import CantidadIngresanteTab from './mains/cantidadingresantetab';
import UbicacionUniversidadesTab from './mains/ubicaciontab';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codigo:this.props.codigo, // 1:Menu licenciamineto   2 : Menu Programas academicos
    }
  }
  render() {
      
    switch(this.state.codigo){
      case 1:
        return(<div className="col-12 bg-light" >
        <LicenciamientoTab></LicenciamientoTab>
        </div>);
      case 2:
        return (<div className="col-12 bg-light" >
          <ProgramasAcademicosTab></ProgramasAcademicosTab>
          </div>);
      case 4:
        return (<div className="col-12 bg-light" >
          <UbicacionUniversidadesTab></UbicacionUniversidadesTab>
          </div>);
      case 5:
        return (<div className="col-12 bg-light" >
          <CantidadIngresanteTab></CantidadIngresanteTab>
          </div>);
      default: return(<h1>en Construccion</h1>);
    }
  }

}
export default Main;