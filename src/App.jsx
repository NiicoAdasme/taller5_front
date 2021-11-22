
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Auto from './Auto.jsx';


import { useForm } from './Custom-Hooks/useForm/useForm';

function App() {

  const initialForm = {
    patente: '',
    año: 0,
    marca: ''
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const [autos, setAutos] = useState([])

  const { patente, año, marca } = formValues

  const guardarAuto = async () => {
    await axios.post("http://localhost:5000/api/auto", { 
      patente: patente,
      anio: año,
      marca: marca
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const handleSubmit = () => {
    guardarAuto()
  }

  const getAutos = async () => {
    await axios.get("http://localhost:5000/api/auto")
      .then(res => {
        // console.log(res.data.auto);
        setAutos(res.data.auto)
      })
      .catch(res => {
        console.error(res);
      })
  }

  useEffect(() => {
    getAutos()
  }, [guardarAuto])

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-md-12">
          <h1 className="display-2 my-5">Registro de Autos</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-12">
          <form >
            <div className="mb-3">
              <label className="form-label">PATENTE</label>
              <input type="text" className="patente form-control" id="patente" name="patente" value={patente} placeholder="Ingrese patente" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">AÑO</label>
              <input type="number" className="año form-control" id="año" value={año} name="año" placeholder="Ingrese año" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label" >MARCA</label>
              <input type="text" className="marca form-control" id="marca" value={marca} name="marca" placeholder="Ingrese marca" onChange={handleInputChange} />
            </div>
            <button type="button" onClick={handleSubmit} className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patente</th>
              <th scope="col">Año</th>
              <th scope="col">Marca</th>
            </tr>
          </thead>
          <tbody>

            {
              autos?.map((auto, index) => (
                <Auto
                  key={auto._id}
                  index={index}
                  {...auto}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
