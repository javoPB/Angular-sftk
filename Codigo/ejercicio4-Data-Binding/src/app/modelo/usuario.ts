export class Usuario {
    private _nombre: string;
    private _usuario: string;
    private _telefono: string;

    constructor(nombre: string, usuario: string, telefono: string){
        this._nombre = nombre;
        this._usuario = usuario;
        this._telefono = telefono;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public get usuario(): string {
        return this._usuario;
    }

    public set usuario(usuario: string) {
        this._usuario = usuario;
    }

    public get telefono(): string {
        return this._telefono
    }

    public set telefono(telefono: string) {
        this._telefono = telefono;
    } 
}
