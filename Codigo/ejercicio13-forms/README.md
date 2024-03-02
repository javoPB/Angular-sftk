# Ejercicio13Forms

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

## /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
## /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

1. ng new ejercicio13-forms
2. ng g c components/newUser --skip-tests
3. app.module.ts --> importar formModules
4. Formularios dirigidos por Plantilla --> Configuraciones requeridas:
    app.module.ts --> Importar FormsModule

|   Forma de asociar el elemento al form:
    * form: Mediante #userForm le asignamos un nombre al form y al mismo tiempo lo asociamos a ngForm y pasamos al userForm como parámetro al metodo submit
            (La información del form se puede mandar a imprimir en el método submit)
    * input (puede ser cualquier otro elemento de html): Mediante la directiva ngModel se indica que el input (o cualquier elemento html) es parte del
                                                         modelo del form y mediante #name="ngModel" se puede acceder a las propiedades del input "name" (por ejemplo: name.touched, name.invalid, etc...) 
    * div (Para indicar que el valor del campo es requerido): Mediante *ngIf="name.touched && name.invalid" se indica que el div se va a visualizar cuando 
                                                              no se cumplan las condiciones del input. (SE REALIZAN VALIDACIONES DEL LADO DEL HTML)
    * button: mediante [disabled]="userForm.invalid" deshabilitamos el botón cuando los valores de los elementos del form no son validos.
              Por ejemplo: el campo para el nombre debe tener una longitud: min: 2, max: 10 de lo contrario el botón permanece deshabilitado.
    * 
    <form #userForm="ngForm" (ngSubmit)="submit(userForm)">
        <div class="form-group">
            <label for="name">Name:</label> 
            <input type="text" class="form-control" required name="name" minlength="2" maxlength="10" ngModel #name="ngModel">
            <div *ngIf="name.touched && name.invalid" class="alert alert-danger">
                <p *ngIf="name.errors && name.errors['minlength']">Validate name length</p>
            </div>
        </div>

        <!-- Etiqueta para pre visualizar el contenido del formulario -->
        <pre>
            {{ userForm.value | json}}
        </pre>
    
        <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">Submit</button>
    </form>     

5. Formularios Reactivos --> Configuraciones requeridas:
    app.module.ts --> Imortar ReactiveFormsModule

    Formas de asociar los elementos html vs clase (component.ts)
    * [formGroup]="userFormReactive" --> Para asociar el formulario con el html (html vs. clase del componente)
    * (ngSubmit)="submit()" --> Al activarse un click de un boton de tipo submit, se realiza un binding html vs elementos correspondientes de la clase del
                                componente
    * *ngIf="userFormReactive.get('name')?.touched && userFormReactive.get('name')?.invalid --> Para realizar las validaciones correspondientes al elemento 
                                                                                                "name" del html
    * form-control --> Para asociar el elemento html al modelo del formulario
    * <fieldset formGroupName="address"> --> Para agrupar la información de un objeto, por ejemplo, dirección (streer, city, zipcode, ...) 

    <form [formGroup]="userFormReactive" (ngSubmit)="submit()">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" formControlName="name" class="form-control">
            <div class="alert alert-danger" *ngIf="userFormReactive.get('name')?.touched && userFormReactive.get('name')?.invalid">
                <p>Name is invalid</p>
            </div>
        </div>
        <div class="form-group">
            <label for="email">UserName: </label>
            <input type="text" formControlName="email" class="form-control">
        </div>

        <!--Elemento para agrupar información (Por ejemplo, Objeto direccion)-->
        <fieldset formGroupName="address">
            <div class="form-group">
                <label for="street">Street: </label>
                <input type="text" formControlName="street" class="form-control">
            </div>
            <div class="form-group">
                <label for="city">City: </label>
                <input type="text" formControlName="city" class="form-control">
            </div>
            <div class="form-group">
                <label for="zipcode">Zipcode: </label>
                <input type="text" formControlName="zipcode" class="form-control">
            </div>            
        </fieldset>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    Configuraciones en la clase del componente:
    * userFormReactive: FormGroup --> Objeto en el que se generan los elementos del html
    * FormGroup --> Para mapear los elementos del html en un objeto de la clase del componente y de esta forma poder realizar validaciones desde la clase 
                   del componente. Por ejemplo:
        html            clase
        name            name: new FormControl('name'),
        email           email: new FormControl('email'),
        address         address: new FormGroup({
            street          street: new FormGroup('street'), 
            city            city: new FormGroup('city'),
            zipcode         zipcode: new FormGroup('zipcode'),
                        })
    * [Validators.required, Validators.minLength(2), Validators.maxLength(10)] --> Para indicar las validaciones que se deben realizar a cada uno de los 
                                                                                   elementos del html, pero ahora se controlan desde el lado de la clase del componente.

    export class NewUserReactiveComponent implements OnInit {
        userFormReactive: FormGroup;

        ngOnInit(): void {
            this.userFormReactive = new FormGroup({
            name: new FormControl('name', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
            email: new FormControl('email'),
            address: new FormGroup({
                street: new FormGroup('street'),
                city: new FormGroup('city'),
                zipcode: new FormGroup('zipcode'), 
            })
            });
        }

        submit(){
            console.log(userFormReactive);
        }
    }

6. Configuración de formularios dinámicos:
    En el html del componente:
    * fieldset: Para agrupar la información de los elementos.
    * formArrayName: Para hacer el binding con el arreglo definido en la clase.
    * userFormReactive.get('hobbies')['controls']: Los elementos del html se van almacenando en los "controls" es por ello que la información se toma de
                                                   aquí 
    <fieldset>
        <legend>Hobbies | <button type="button" (click)="addHobby()">Add Hobby</button></legend>
        <div formArrayName="hobbies" *ngFor="let hobby of userFormReactive.get('hobbies')['controls']; let i=index;">
            <div [formGroupName]="i">
                <input formControlName="name" placeholder="Hobby name" />
            </div>
        </div>
    </fieldset>

    En la clase del componente:
    * addHobby(): Función que se activa al dar clic en botón Add (Botón para agregar elementos)
    * hobbies: Arreglo donde se va almacenando la información generada al dar clic en botón Add
    * userFormReactive: GroupForm en que se debe dar de alta al arreglo hobbies (para poder mapearlo con el html)

    hobbies: FormArray;

    ngOnInit(): void {
        this.userFormReactive = new FormGroup({
        name: new FormControl('name', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
        email: new FormControl('email'),
        address: new FormGroup({
            street: new FormControl('street'),
            city: new FormControl('city'),
            zipcode: new FormControl('zipcode'), 
        }),
        hobbies: new FormArray([this.createHobby()])
        });
    }
    
    addHobby(){
        this.hobbies = this.userFormReactive.get('hobbies') as FormArray;
        this.hobbies.push(this.createHobby());
    }

    createHobby(): FormGroup {
        return new FormGroup({
        name: new FormControl(), 
        });
    }


6. Definición de validaciones personalizadas
    * ng g class clases/customValidation --> Para crear la clase en la que se definen las validaciones personalizadas.
    * Definir las validaciones personalizadas, por ejemplo: 
        static unique(control: AbstractControl): ValidationErrors | null {
            return control.value === 'test' ? {unique: true} : null;
        }

    * Aplicar las validaciones personalizadas en la clase del componente, en este ejemplo, se aplican las validaciones en el email.
        ngOnInit(): void {
            this.userFormReactive = new FormGroup({
            name: new FormControl('name', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
            email: new FormControl('email', CustomValidations.unique),
            address: new FormGroup({
                street: new FormControl('street'),
                city: new FormControl('city'),
                zipcode: new FormControl('zipcode'), 
            }),
            hobbies: new FormArray([this.createHobby()])
            });

            console.log(this.userFormReactive);
        }

    * Visualizar las validaciones en el html, en este ejemplo, se utiliza el campo email.
            <div class="form-group">
                <label for="email">Email: </label>
                <input type="text" formControlName="email" class="form-control">
                <div class="alert alert-danger" *ngIf="userFormReactive.get('email')?.touched && userFormReactive.get('email')?.invalid">
                    <p *ngIf="userFormReactive.get('email')?.hasError('unique');">Email is unique</p>
                </div>
            </div>

    