export class Libro {
    private _isbn: string;
    private _titulo: string;
    private _autor: string;
    private _editorial: string;
    private _fecPublicacion: string;
    private _numEjemplares: number;

    constructor(isbn: string, titulo: string, autor: string, editorial: string, fecPublicacion: string, numEjemplares: number){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._editorial = editorial;
        this._fecPublicacion = fecPublicacion;
        this._numEjemplares = numEjemplares;
    }

    public get isbn(): string {
        return this._isbn;
    }

    public set isbn(isbn: string) {
        this._isbn = isbn;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get autor(): string {
        return this._autor;
    }

    public set autor(autor: string) {
        this._autor = autor;
    }
    
    public get editorial(): string {
        return this._editorial;
    }

    public set editorial(editorial: string) {
        this._editorial = editorial;
    }
    
    public get fecPublicacion(): string {
        return this._fecPublicacion;
    }

    public set fecPublicacion(fecPublicacion: string) {
        this._fecPublicacion = fecPublicacion;
    }    
    
    public get numEjemplares(): number {
        return this._numEjemplares;
    }

    public set numEjemplares(numEjemplares: number) {
        this._numEjemplares = numEjemplares;
    }
}


export const LIBROS: Libro[] = [
    new Libro('isbn-1', 'Titulo-1', 'Autor-1', 'Editorial-1', '2000-12-18', 5000),
    new Libro('isbn-2', 'Titulo-2', 'Autor-2', 'Editorial-2', '2010-11-18', 50000), 
    new Libro('isbn-3', 'Titulo-3', 'Autor-3', 'Editorial-3', '2000-05-10', 30000),
    new Libro('isbn-4', 'Titulo-4', 'Autor-4', 'Editorial-4', '1970-02-16', 5200),
    new Libro('isbn-5', 'Titulo-5', 'Autor-5', 'Editorial-5', '2000-10-20', 7000)
];