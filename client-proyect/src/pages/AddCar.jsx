import React, { useState } from 'react';
import './css/AddCar.css';
import { useNavigate } from 'react-router-dom';
import { createCar } from './../api/vehiculo';

const AddCar = () => {
  const navigate = useNavigate();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [picture, setPicture] = useState('');
  const [status, setStatus] = useState('new'); // Valor por defecto de estado

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCar = {
      marca: brand,
      modelo: model,
      ano: year,
      kilometros: kilometers,
      tipo: type,
      estado: status,
      precio: price,
      picture
    };

    try {
      const response = await createCar(newCar);  // Llamada a la función para hacer el login
      localStorage.setItem('token', response.token);  // Guardar el token en localStorage
      navigate('/addCar');  // Redirigir a la página de inicio
    } catch (error) {
      console.error('Error al hacer add', error);
      alert('Error al hacer add');
    }
  };

  return (
    <div className="add-car-container">
      <form onSubmit={handleSubmit} className="add-car-form">
        <h2 className="form-title">Cargar Auto</h2>
        <div className="form-group">
          <label htmlFor="brand">Marca</label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Ingrese la marca del auto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Modelo</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Ingrese el modelo del auto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Año</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Ingrese el año del auto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="kilometers">Kilómetros</label>
          <input
            type="number"
            id="kilometers"
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
            placeholder="Ingrese los kilómetros recorridos"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ingrese el precio"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Tipo</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Ingrese el tipo del auto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="new">Nuevo</option>
            <option value="used">Usado</option>
            <option value="refurbished">Reacondicionado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="model">Url de Imagen</label>
          <input
            type="text"
            id="model"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            placeholder="Ingrese url de la imagen del auto"
          />
        </div>
        <button type="submit" className="submit-btn">Cargar Auto</button>
      </form>
    </div>
  );
};

export default AddCar;
