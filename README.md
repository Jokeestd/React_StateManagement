# State Management en React

En una aplicación de React, el "state management" se refiere a cómo se maneja y comparte el estado de la aplicación entre los diferentes componentes. Esto es crucial para mantener la coherencia de la interfaz de usuario y garantizar una experiencia de usuario fluida. Dos bibliotecas populares para el manejo del estado en React son Redux y Zustand.

## Redux vs Zustand

- **Redux:** Redux es una biblioteca para manejar el estado global en aplicaciones JavaScript, especialmente en aplicaciones React. Proporciona un contenedor predecible del estado de la aplicación y permite la gestión de estados complejos de manera más estructurada.

- **Zustand:** Zustand es una biblioteca minimalista para manejar el estado global en aplicaciones React. Proporciona una API simple y funcional para definir y manipular el estado, ofreciendo un enfoque más ligero y flexible que Redux.

## Instrucciones para correr las aplicaciones

1. **Clona el repositorio:**

```bash
git clone URL_DEL_REPOSITORIO
cd nombre_del_repositorio
```
2. **Instala las dependencias:**
```bash
npm install
```
3. **Corre la aplicación Todo-Redux:**
```bash
npm run dev
```
4. **Corre la aplicación Todo-Zustand:**
```bash
cd todo-zustand
npm run dev
```
## Estructura de directorios
* En la carpeta redux en ``todo-redux`` se encuentran los archivos necesarios para crear el store de Redux, incluyendo actions, action types, reducer y store.
* En la carpeta store en ``todo-zustand`` se encuentra el archivo JavaScript para crear el store de Zustand.

## Tecnologías utilizadas
* React
* JavaScript
* Vite
* Tailwind CSS
* Redux
* Zustand
* Devtools Redux
* Persistent

¡Listo! Ahora puedes explorar las aplicaciones Todo-Redux y Todo-Zustand y ver cómo se maneja el estado en cada una utilizando Redux y Zustand, respectivamente.