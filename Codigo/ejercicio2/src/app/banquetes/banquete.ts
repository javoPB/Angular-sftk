export class Banquete {
    private _tipoBanquete: TipoBanquete;
    private _menu: Menu;
    
    
    constructor(tipoBanquete: TipoBanquete, menu: Menu){
        this._tipoBanquete = tipoBanquete;
        this._menu = menu;
    }

    public mostrarInformacion(): void{
        console.log("Imprimiendo la información de la clase ---->>" + JSON.stringify(this));
    }

    public get tipoBanquete(): TipoBanquete{
        return this._tipoBanquete;
    }

    public set tipoBanquete(tipoBanquete: TipoBanquete){
        this._tipoBanquete = tipoBanquete;
    }

    public get menu(): Menu{
        return this._menu;
    }

    public set menu(menu: Menu){
        this._menu = menu;
    }    
}

export enum TipoBanquete {
    COMIDA = "Comida",
    CENA = "Cena",
    COCTEL = "Coctel"
}

export enum Menu {
    INFORMA = "Informal",
    TRADICIONAL = "Tradicional"
}