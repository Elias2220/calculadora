# Calculadora

Esta es una calculadora web simple creada con HTML, CSS y JavaScript utilizando Web Components.

## Contenido

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Descripción

La **Calculadora Terrenal** es un componente web personalizado que proporciona una interfaz de usuario para realizar cálculos básicos como suma, resta, multiplicación, división, exponentes y raíces cuadradas. La calculadora está diseñada utilizando Shadow DOM para encapsular estilos y mantener un comportamiento modular.

## Instalación

Para usar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/calculadora-terrenal.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd calculadora-terrenal
    ```
3. Abre el archivo `index.html` en tu navegador web.

## Uso

Al abrir el archivo `index.html` en un navegador, verás la interfaz de la calculadora. Usa los botones para realizar operaciones matemáticas. La calculadora soporta las siguientes operaciones:

- Suma (`+`)
- Resta (`-`)
- Multiplicación (`*`)
- División (`/`)
- Exponentes (`^`)
- Raíz Cuadrada (`√`)

También hay botones para limpiar la pantalla (`C`) y calcular el resultado (`=`).

Para lograr usar de forma correcta la raíz cuadrada, es necesario lo siguiente:

- Dar un click en cualquiera de los números que tiene la calculadora (de preferencia el 0)
- Seleccionar el botón (`√`), seguido del número del que se desee conocer la raíz
- Dar click en ('=') y el resultado se mostrará en pantalla
  
## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML y el componente web personalizado.
- `script.js`: Contiene la lógica de la calculadora implementada como un componente web.

### HTML

El archivo `index.html` define la plantilla de la calculadora y la inserta en la página mediante un componente personalizado.

### JavaScript

El archivo `script.js` define la clase `Calculadora` que extiende `HTMLElement` y maneja toda la lógica de la calculadora. La calculadora usa un Shadow DOM para encapsular su estructura y estilos.




