export class Cliente {
    private _nombre: string;
    private _isDistinguido: boolean;
    private _conDescuento: boolean


    constructor(nombre: string, isDistinguido: boolean, conDescuento: boolean){
        this._nombre = nombre;
        this._isDistinguido = isDistinguido;
        this._conDescuento = conDescuento;
    }

    public mostrarInformacion(): void{
        console.log("Imprimiendo la información de la clase ---->>" + JSON.stringify(this));
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(nombre: string){
        this._nombre = nombre;
    }

    public get isDistinguido(): boolean {
        return this._isDistinguido;
    }

    public set isDistinguido(isDistinguido: boolean){
        this._isDistinguido = isDistinguido;
    }
    
    public get conDescuento(): boolean {
        return this._conDescuento;
    }

    public set conDescuento(conDescuento: boolean){
        this._conDescuento = conDescuento;
    }    
}
