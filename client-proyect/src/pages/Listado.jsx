import React, { useEffect, useState } from 'react';
import { getCars } from './../api/vehiculo';
import './css/Listado.css'

const Listado = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCars(); // Llama a tu función getCars
        setCars(response); // Asigna la respuesta al estado
        setLoading(false); // Cambia el estado de carga a false
      } catch (error) {
        console.error('Error al obtener los autos:', error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-page">
      <h2>Vehículos Disponibles</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img
              src={car.picture || 'https://via.placeholder.com/200'} // Asegúrate de que la imagen esté en el formato correcto
              alt={`${car.marca} ${car.modelo}`}
              className="car-image"
            />
            <div className="car-details">
              <h3>{car.marca} {car.modelo}</h3>
              <p>Año: {car.ano}</p>
              <p>Kilómetros: {car.kilometros}</p>
              <p>Tipo: {car.tipo}</p>
              <p>Estado: {car.estado}</p>
              <p>Precio: ${car.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listado;
