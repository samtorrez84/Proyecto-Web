import React, { useState, useEffect } from 'react';
import logo from '../assets/images/LLA_LOGO.png';
import equipo1 from '../assets/images/equipos/estral.png';
import equipo2 from '../assets/images/equipos/leviatan.png';
import equipo3 from '../assets/images/equipos/Isurus.png';
import equipo4 from '../assets/images/equipos/all_knights.png';

const Header = () => {
    // Estado para almacenar el ancho de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Array de logos de equipos
    const logosEquipos = [equipo1, equipo2, equipo3, equipo4];

    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Efecto para suscribirse al evento de cambio de tamaño de la ventana
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Función para generar un arreglo de estilos únicos para cada logo
    const generateLogoStyles = () => {
        const numLogos = logosEquipos.length;
        const logoWidth = 150; // Ancho del logo en píxeles
        const containerWidth = windowWidth; // Ancho de la ventana del navegador
        const spacing = (containerWidth - logoWidth * numLogos) / (numLogos + 1); // Espaciado entre logos

        // Opacidad deseada para los logos
        const opacity = 0.3;

        return logosEquipos.map((logo, index) => ({
            backgroundImage: `url(${logo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            top: '50%', // Centrado vertical
            left: `${spacing * (index + 1) + logoWidth * index}px`, // Distribución horizontal
            transform: 'translateY(-50%)', // Alinear verticalmente al centro
            width: `${logoWidth}px`,
            height: `${logoWidth}px`,
            zIndex: numLogos - index, // Z-index para superposición
            opacity: opacity, // Ajuste de opacidad
        }));
    };

    // Arreglo de estilos únicos para cada logo
    const logoStyles = generateLogoStyles();

    return (
        <header className="relative bg-blue-800 text-white py-4 mt-4 overflow-hidden">
            {/* Contenedor de logos de equipos */}
            <div className="absolute inset-0 flex items-center justify-center hidden md:flex">
                {logoStyles.map((style, index) => (
                    <div
                        key={index}
                        style={style}
                    />
                ))}
            </div>

            {/* Contenido del encabezado */}
            <div className="container mx-auto flex justify-between items-center relative z-10">
                <p className="text-lg hidden md:block">Split de Primavera</p>
                <img src={logo} alt="Logo" className="h-20 mx-auto relative z-10" />
                <h1 className="text-3xl font-bold hidden md:block">Liga Latinoamérica</h1>
            </div>
        </header>
    );
};

export default Header;
