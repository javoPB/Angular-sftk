export class Evento {
    private _fecha: string;
    private _numAsistentes: number;
    private _ubicacion: Ubicacion;

    constructor(fecha: string, numAsistentes: number, ubicacion: Ubicacion){
        this._fecha = fecha;
        this._numAsistentes = numAsistentes;
        this._ubicacion = ubicacion;
    }

    public mostrarInformacion(): void{
        console.log("Imprimiendo la información de la clase ---->>" + JSON.stringify(this));
    }

    public get fecha(): string{
        return this._fecha;
    }

    public set fecha(fecha: string){
        this._fecha = fecha;
    }

    public get numAsistentes(): number{
        return this._numAsistentes;
    }

    public set numAsistentes(numAsistentes: number){
        this._numAsistentes = numAsistentes;
    }
    
    public get ubicacion(): Ubicacion{
        return this._ubicacion;
    }

    public set ubicacion(ubicacion: Ubicacion){
        this._ubicacion = ubicacion;
    }    
}

export interface Ubicacion {
    calle: string;
    numero: string;
    colonia: string;
    ciudad: string;
    referencias: string;
}