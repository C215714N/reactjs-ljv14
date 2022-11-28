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
```
	npm i -g vite@latest // instalacion global
	npx init vite <name> // creamos el proyecto con vite
	cd <name> // abre la carpeta creada con vite
	npm install // instala los modulos de NodeJS
	npm run dev // ejecuta la aplicacion de reactjs
```

## Componentes

Corresponden a partes dentro de nuestra aplicacion que van a repetirse, poseen _atributos (props)_ y tambien _estados (state)_. Si bien, originalmente, los mismos se puedian declarar mediante clases, a partir de la version __16__ podemos declararlos mediante funciones estandar y funciones flecha.

* __PROPS__: Son atributos de los componentes, pueden ser heredados por sus elementos padres y son inmutables.
* __STATE__: Son atributos cuyo valor puede variar en base a algun evento, se declaran en el componente que afectan y pueden ser enviados a sus elementos contenedores.