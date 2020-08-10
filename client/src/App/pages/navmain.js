import React, { Component } from 'react';
import LicenciamientoTab from './mains/licenciamientotab';
import ProgramasAcademicosTab from './mains/programasacademicostab';
import CantidadIngresanteTab from './mains/cantidadingresantetab';
import UbicacionUniversidadesTab from './mains/ubicaciontab';
import TopUniversidadesTab from './mains/topuniversidadestab';
import Beca18Tab from './mains/beca18tab';
import ModificarLicenciamientoTab from './mains/modificarlicenciamientotab';
import localS from 'local-storage'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codigo: this.props.codigo, // 1:Menu licenciamineto   2 : Menu Programas academicos
    }
  }
  render() {

    switch (this.state.codigo) {
      case 1:
        return (<div className="col-12 bg-light px-2" >
          <LicenciamientoTab></LicenciamientoTab>
        </div>);
      case 2:
        return (<div className="col-12 bg-light px-2" >
          <ProgramasAcademicosTab></ProgramasAcademicosTab>
        </div>);
      case 3:
        return (<div className="col-12 bg-light px-2" >
          <Beca18Tab></Beca18Tab>
        </div>);
      case 4:
        return (<div className="col-12 bg-light px-2" >
          <UbicacionUniversidadesTab></UbicacionUniversidadesTab>
        </div>);
      case 5:
        return (<div className="col-12 bg-light px-2" >
          <CantidadIngresanteTab></CantidadIngresanteTab>
        </div>);
      case 6:
        return (<div className="col-12 bg-light px-2" >
          <TopUniversidadesTab></TopUniversidadesTab>
        </div>);
      case 7:
        const varAdmin = localS.get('myData')
        if (varAdmin === 'gersrpb@gmail.com') {
          return (<div className="col-12 bg-light px-2" >
            <ModificarLicenciamientoTab></ModificarLicenciamientoTab>
          </div>);
        } else {
          return (
            <div className="text-center">
              <div className='d-flex col-12'>
                <div className="cover-container d-flex p-3 mx-auto flex-column justify-content-center align-self-center">
                  <main role="main" className="inner cover mt-5">
                    <h1 className="">OOOPS!!!! TE PERDISTE???</h1>
                    <img width='450' className="mt-3" src="../../../assets/4042.jpg"></img>
                    <p className="lead">Puede que no tengas permisos.</p>
                    <p className="mt-3">
                      <a href="#" className="b-portada2 button button-responsive button-medium button-primary-outline-v2" to='/topuniversidades'>Regresar</a>
                    </p>
                  </main>
                </div>
              </div>
            </div>
          )
        }
      default: return (<h1>en Construccion</h1>);
    }
  }

}
export default Main;