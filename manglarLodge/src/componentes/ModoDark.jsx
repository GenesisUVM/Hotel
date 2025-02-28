import { useEffect, useState } from 'react';
import './Modo.css'

const AlternarTema = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Cargar el tema desde el almacenamiento local al iniciar
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
        </button>
    );
};

export default AlternarTema;