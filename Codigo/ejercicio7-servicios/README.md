# Ejercicio7Servicios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
1. Creación del proyecto:                                             ng new ejercicio7-servicios --standalone=false
2. Creación del módulo paises (y se agrega a app.module):             ng g m paises --module app
3. Creación del módulo routin (y se agrega a app.module):             ng g m routing/paises-routing --flat --module=app
4. Crear los siguientes componentes y asignarlos al módulo de paises: ng g c paises/agregar --module paises --skip-tests
                                                                      ng g c paises/buscar --module paises --skip-tests
                                                                      ng g c paises/editar --module paises --skip-tests
                                                                      ng g c paises/eliminar --module paises --skip-tests 

5. Instalar ngBoostrap: ng add @ng-bootstrap/ng-bootstrap --project myProject 
                        ng add @ng-bootstrap/ng-bootstrap --project ejercicio7-servicios

6. Configuración de routing
7. Definición de datos en la interface Pais (Por el momento se va a trabajar con datos estáticos)
8. Navegación entre componentes (páginas): location.back() 
9. Creación de servicios: `ng g service servicios/<serviceName>`
10. Se realiza la configuración de JSON Server 
    * Referencias de JSON-Server: https://www.npmjs.com/package/json-server/v/0.16.1
    * Instalación de JSON-Server: `npm install -g json-server`
    * Levantar el JSON-Server (En el servidor debe existir un archivo db.json - contiene la información, como una especie de BD): 
      `json-server --watch <fileName>.json`

    * El servidor levanta en: `http://localhost:3000/`