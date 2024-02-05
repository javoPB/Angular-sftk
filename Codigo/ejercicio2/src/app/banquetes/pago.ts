export class Pago {
    private _costoTotal: number;
    private _porcentajeAntMin: number;
    private _anticipoReg: number;

    constructor(costoTotal: number, porcentajeAntMin: number, anticipoReg: number){
        this._costoTotal = costoTotal;
        this._porcentajeAntMin = porcentajeAntMin;
        this._anticipoReg = anticipoReg;
    }

    public mostrarInformacion(): void{
        console.log("Imprimiendo la información de la clase ---->>" + JSON.stringify(this));
    }

    public get costoTotal(): number {
        return this._costoTotal;
    }

    public set costoTotal(costoTotal: number){
        this._costoTotal = costoTotal;
    }
    
    public get porcentajeAntMin(): number {
        return this._porcentajeAntMin;
    }

    public set porcentajeAntMin(porcentajeAntMin: number){
        this._porcentajeAntMin = porcentajeAntMin;
    }

    public get anticipoReg(): number {
        return this._anticipoReg;
    }

    public set anticipoReg(anticipoReg: number){
        this._anticipoReg = anticipoReg;
    }    
}
