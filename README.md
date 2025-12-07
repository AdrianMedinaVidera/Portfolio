# 👨‍💻 Portafolio Web Personal - Adrián Medina

¡Bienvenido al repositorio de mi portafolio personal! Este proyecto es una aplicación web moderna, minimalista y totalmente responsiva construida con **React**.

El objetivo principal de este proyecto fue crear una interfaz limpia ("pixel-perfect") con una gran atención al detalle en la experiencia de usuario (UX/UI).

## ✨ Características Principales

Este portafolio no es solo estático, incluye varias funcionalidades dinámicas:

-   **🌗 Sistema de Temas (Dark/Light Mode):**
    -   Cambio de tema instantáneo utilizando **CSS Variables**.
    -   Persistencia visual coherente en todos los componentes.
    -   Paleta de colores personalizada.

-   **🧠 Header Inteligente (Sticky Glassmorphism):**
    -   El header es invisible al inicio y aparece con un efecto de desenfoque (*blur*) al hacer scroll.
    -   Animaciones suaves de entrada para el avatar y el nombre.

-   **🖱️ Estela del Cursor Interactiva (Cursor Trail):**
    -   Efecto visual de "cometa" que sigue al ratón.
    -   Desarrollado con `useRef` y `requestAnimationFrame` para un rendimiento óptimo (60fps) sin afectar al renderizado de React.
    -   **Botón Toggle:** Se puede activar o desactivar desde el header.

-   **🎨 Iconografía Dinámica:**
    -   Uso de SVGs optimizados.
    -   Implementación de `currentColor` para que los iconos se adapten automáticamente al tema (claro/oscuro) y al color del texto.

-   **📱 Diseño Responsivo:**
    -   Adaptado a móviles, tablets y escritorio.
    -   Layouts flexibles usando **CSS Grid** y **Flexbox**.

## 🛠️ Tecnologías Utilizadas

* **[React](https://reactjs.org/):** Librería principal para la construcción de la UI.
* **CSS3:** Estilos modulares sin librerías externas pesadas (CSS puro + Variables).
* **JavaScript (ES6+) / TypeScript:** Lógica de los componentes.
* **SVGs:** Para toda la iconografía (Socials, Tecnologías, UI).

## 📂 Estructura del Proyecto

El proyecto está organizado en componentes reutilizables para facilitar la escalabilidad:

```bash
src/
├── assets/          # Imágenes estáticas (Avatar, Proyectos)
├── components/
│   ├── Header/      # Navegación y controles de tema/estela
│   ├── Hero/        # Sección principal de presentación
│   ├── Experience/  # Lista de experiencia laboral
│   ├── Projects/    # Grid de proyectos (Destacados y Secundarios)
│   ├── Contact/     # Redes sociales y copiado de email
│   └── CursorTrail/ # Lógica de animación del cursor
├── App.js           # Componente raíz y gestión de estado global
└── App.css          # Variables globales y reset
