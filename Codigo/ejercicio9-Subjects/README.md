# Ejercicio9Subjects

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

## /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

1. ng new <appName> --standalone=false
2. ng g m routing/paisesRouting --flat 
3. ng g c paises/agregar --module app --skip-tests
   ng g c paises/buscar --module app --skip-tests
   ng g c paises/editar --module app --skip-tests
   ng g c paises/eliminar --module app --skip-tests
4. paises-routing.module.ts
   Se definen los routing de la aplicación.
   Se importan las rutas
   Se exportan las rutas
   
5. app.module.ts
   Importar el pais-routing.module.ts

6. Agregar bootstrap.
   ng add @ng-bootstrap/ng-bootstrap --project ejercicio9-Subjects --> Consultar https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap
    
7. app.component.html
   Se agrega código para mostrar pestañas "buscar", "agregar" 

8. ng g interface modelos/pais
9. ng g service services/paisService --skip-tests
10. Configurar conexión con JSON Service
    app.module.ts --> Importar 
      HttpClientModule

    pais-service.service.ts --> Importar y utilizar
      import { HttpClient, HttpParams } from '@angular/common/http';
      import { Observable } from 'rxjs'; 
      import { Pais } from '../modelos/pais';  

      private endPointUrl = 'http://localhost:3000/pais'; --> URL de JSON Server
      let params: HttpParams = new HttpParams().set('id', id); --> Configuración de parámetros
      return this.http.get<Pais>(this.endPointUrl, {params}) --> Consumo de servicios que provee JSON Server (get, put, delete, post)

    
11. ng g c ejemploSubject/padre --skip-tests
    ng g c ejemploSubject/hijoUno --skip-tests
    ng g c ejemploSubject/hijoDos --skip-tests

12. padre.component.html
    Agregar los coomponentes hijos

13. pais-routing.module.ts
    Agregar path del componente padre

14. app.component.html
    agregar un routerLink para consumir componente padre

15. pais-service.service.ts
    Definir la variable valor, misma que se compartira entre los componentes padre, hijo-uno, hijo-dos mediante SUBJECT

    private _valor: string = 'miValor'; //Variable a compartir
    public cambiosMiValor: BehaviorSubject<string> = new BehaviorSubject<string>(this._valor); //Para interactuar con la variable y poder cambiar su valor.

16. hijo-uno.component.ts, hijo-dos.component.ts
    consumir la variable valor (mediante el SubjectBehavior) declarada en pais-service.service.ts
    
    Por ejemplo:
    this.paisService.cambiosMiValor.subscribe(result => {
      this.valor = result;
    });