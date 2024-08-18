# Metafar Challenge

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Librerias](#Librerias)
3. [Instalación](#instalación)
4. [Estructura del Proyecto](#estructura-del-proyecto)

## Descripción

 Esta es es una aplicación que permite a los usuarios explorar y visualizar datos de acciones.
 La aplicación presenta una tabla paginada con todas las acciones disponibles, con columnas que incluyen Símbolo, Nombre, Moneda y Tipo. 
 Los usuarios pueden buscar acciones por nombre o símbolo, y hacer clic en el símbolo para ver detalles más específicos sobre la acción seleccionada.
 Además, la aplicación permite a los usuarios visualizar gráficos de la cotización de la acción seleccionada en varios intervalos de tiempo (diario, semanal, mensual, anual).


# Librerias

Este proyecto utiliza varias librerías para diferentes funcionalidades. A continuación se presentan las librerías utilizadas y su propósito:

- [axios](https://github.com/axios/axios): Para el manejo de peticiones.
- [react-navigation](https://reactnavigation.org/): Para la navegación.
- [react-native-chart-kit](https://www.npmjs.com/package/react-native-chart-kit): Para los crear los gráficos de la pantalla de detalles.
- [react-native-svg](https://github.com/software-mansion/react-native-svg): Dependencia necesaria para "react-native-chart-kit".



## Instalación

Instrucciones para instalar y configurar el proyecto en un entorno local.

```bash
# Clona el repositorio
git clone https://github.com/Mggadea/metafar_challenge/

# Navega al directorio del proyecto
cd metafar_challenge

# Instala las dependencias
npm install
cd ios && pod install 

# agrega tu Api key de twelvedata para poder utilizar los endpoints en el achivo .env
    
# Ejecuta el proyecto
expo start
```

## Estructura del Proyecto


