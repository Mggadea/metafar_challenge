# Metafar Challenge

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Librerias](#Librerias)
3. [Instalación](#instalación)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Comentarios y mejoras](#comentarios)

# Descripción

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



# Instalación

Instrucciones para instalar y configurar el proyecto en un entorno local.

```bash
# Clona el repositorio
git clone https://github.com/Mggadea/metafar_challenge/

# Navega al directorio del proyecto
cd metafar_challenge

# Instala las dependencias
npm install
cd ios && pod install
```

```.env
# Agrega tu API keys de twelvedata en el archivo .env 
    EXPO_PUBLIC_API_URL = https://api.twelvedata.com
    EXPO_PUBLIC_API_KEY= 'Agrega tu key acá'
```

```bash
# Ejecuta el proyecto
expo start
```

# Estructura del proyecto

1. `api`  
   Configuración de la API
2. `assets`  
   Recursos estáticos como fuentes y imágenes
   - `fonts`  
     Fuentes personalizadas
   - `images`  
     Imágenes utilizadas en la aplicación
3. `components`  
   Componentes reutilizables de la interfaz de usuario
   - `__tests__`  
     Pruebas unitarias de los componentes
4. `constants`  
   Constantes y configuraciones globales
5. `helpers`  
   Funciones auxiliares y utilidades
6. `hooks`  
   Hooks personalizados de React
7. `navigation`  
   Configuración de la navegación
8. `screens`  
   Pantallas principales de la aplicación
9. `services`  
   Lógica de negocio y llamadas a servicios
   
# Comentarios

A continuación se detallan algunos aspectos que se podrían mejorar o implementar en futuras versiones del proyecto:

- **Pruebas**: Me gustaría haber agregado más pruebas unitarias y de integración para asegurar la robustez del código y su correcto funcionamiento.

- **Tipado**: Existen áreas en el proyecto donde el tipado podría ser más riguroso. Mejorar el tipado en algunos componentes ayudaría a prevenir errores y hacer el código más predecible y más fácil de mantener.

- **Estilos Globales**: Implementar archivos globales para manejar estilos como colores, fuentes, y paddings etc. Esto permitiría una mayor consistencia en el diseño y facilitaría los cambios globales en el estilo de la aplicación.

- **Optimización de Rendimiento**: Considerar optimizaciones para mejorar el rendimiento, como el uso eficiente de la memoria , la carga diferida de componentes y alguna memorización  de datos para evitar renders innecesarios podría mejorar la experiencia del usuario.





