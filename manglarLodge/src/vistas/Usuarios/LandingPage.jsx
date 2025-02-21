import { useEffect, useState } from "react";
import axios from "axios";
import NavUsuarios from "../../componentes/NavUsuarios";
import "./Usuarios.css";
import "./LandingPage.css";

/* Componente de Landing Page */
function LandingPage() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Chichiriviche,VE&units=metric&lang=es&appid=803b8f27deffc1c37ec0de7617932745`
        );
        setClima(response.data);
      } catch (error) {
        console.error("Error obteniendo el clima:", error);
      }
    };

    fetchClima();
  }, []);

  return (
    <>
      <NavUsuarios />

      {/* Sección de Clima */}
      {clima && (
        <div className="clima-box">
          <div>
            <p><strong>Clima en Chichiriviche</strong></p>
            <p>{clima.main.temp}°C, {clima.weather[0].description}</p>
          </div>
          <img 
            src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} 
            alt="Icono del clima" 
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Manglar Lodge</h1>
          <p>Un Paraíso Inolvidable en Chichiriviche, Destino Perfecto para el Descanso y la Aventura.</p>
          <a href="/usuario/reservas" className="cta-button">Reserva Ahora</a>
        </div>
      </section>

      {/* Información del hotel */}
      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          Nuestro hotel se encuentra en el hermoso pueblo de Chichiriviche, estado Falcón, donde el clima es ideal para unas vacaciones en familia.  
          El hotel tiene 50 años de historia, en el casco central de la ciudad donde puedes visitar, en cuestión de minutos, lugares increíbles como las cuevas y cayos que rodean la costa.
        </p>
      </section>
    </>
  );
}

export default LandingPage;
