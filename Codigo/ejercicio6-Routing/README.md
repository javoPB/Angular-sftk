# Ejercicio6Routing

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



## /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
1. Creación del proyecto:                                                          ng new <proyectName> --standalone=false
2. Creación de módulos (Se requiere generar routing para cada uno de los módulos): ng g m <moduleName> --routing
3. Creación de componentes:                                                        ng g c <pathFile>/<componentName> --skip-tests --module <moduleName>
4. Configuración de los routing de cada uno de los módulos generados (<moduleNmae>-routing.module.ts, <moduleNmae>.module.ts)
5. Configurar y consumir las rutas hijas - rutas configuradas en cada uno de los módulo - (app-routing-module.ts, app.module.ts, app.component.html)