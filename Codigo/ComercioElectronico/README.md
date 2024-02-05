# ComercioElectronico

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


/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

Pasos:
1. Creación de módulos:                    ng g module <moduleName>
2. Creación de Componentes en cada módulo: ng g c <path>/<componentName> --module <moduleName>
3. Creación de clases:                     ng g class <papth>/<className>
4. Creación de servicios:                  ng g service <path>/<serviceName>


NOTA:
Los servicios se comparten en todos los módulos de la aplicación, por lo tanto, al crear una clase de tipo Servicio, no se le asocia a un module.

En la decoración/anotación de los module (@NgModule(...)) únicamente se pueden declarar "components", "pipes" y "directivas"

* export/import para compartir componentes de un mismo módulo --> las palabras reservadas (export/import) se indican en las clases involucradas
* export/import para compartir componentes de diferentes módulos --> las palabras reservadas (export/import) se indican tanto en las clases como en los   módulos involucrados (Para el caso de los moduls, en el export se indica cada uno de los componentes a exponer, en el import se indica el module que contiene los componentes a incluir)

* Los Servicios al ser de caracter global, se deben incluir en el app.module mediante @NgModule(..., providers: [lista de servicios], ...)
* En el módulo principal de la aplicación (app.module.ts) mediante el atributo "bootstrap" se indica la lista de componetes que se deben considerar al momento de inicializar la aplicación.