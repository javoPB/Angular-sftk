export class Prestamo {
    private _fecInicio: string;
    private _fecDevolucion: string;
    private _usuario: string;

    constructor(fecInicio: string, fecDevolucion: string, usuario: string){
        this._fecInicio = fecInicio;
        this._fecDevolucion = fecDevolucion;
        this._usuario = usuario;
    }

    public get fecInicio(): string {
        return this._fecInicio;
    }

    public get fecDevolucion(): string {
        return this._fecDevolucion;
    }

    public get usuario(): string {
        return this._usuario
    }

    public set fecInicio(fecInicio: string){
        this._fecInicio = fecInicio;
    }

    public set fecDevolucion(fecDevolucion: string){
        this._fecDevolucion = fecDevolucion;
    }

    public set usuario(usuario: string){
        this._usuario = usuario;
    }

}
