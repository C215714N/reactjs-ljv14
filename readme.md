# ReactJS

Biblioteca de JS desarrollada por el equipo de Facebook para facilitar el desarrollo de interfaces de usuario.
Representa la __V__ de la Arquitectura _MODELO, VISTA, CONTROLADOR_ y utiliza una sintaxis conocida como __JSX__ (JavaScript & XML)

## Creacion de un Proyecto

Si bien podemos crear un proyecto desde cero o incorporar reactjs a un proyecto iniciado, existen herramientas preconfiguradas que nos facilitan el desarrollo.
Esto se debe a que necesitamos configurar la compilacion del proyecto con herramientas como _webpack_ y traduccion del mismo a una sintaxis de js vanilla con _babel_.

__create-react-app__
```
	npm i -g create-react-app // instalacion global
	npx create-react-app <name> // crea un proyecto con CRP
	cd <name> // abre la carpeta creada con CRP
	npm start // ejecuta la aplicacion de reactjs
```
__vite@latest__
````
	npm i -g vite@latest // instalacion global
	npx init vite <name> // creamos el proyecto con vite
	cd <name> // abre la carpeta creada con vite
	npm install // instala los modulos de NodeJS
	npm run dev // ejecuta la aplicacion de reactjs
```

