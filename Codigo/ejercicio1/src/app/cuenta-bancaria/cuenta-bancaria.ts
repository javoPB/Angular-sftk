import { OnInit } from "@angular/core";

export class CuentaBancaria {
    private titular: string;
    private saldoDisponible: number;

    constructor(titular: string, saldoDisponible: number = 0){
        this.titular = titular;
        this.saldoDisponible = saldoDisponible;
    }

    informacionCuenta(){
        console.log("Información de la cuenta>>> titular:  " + this.titular + " saldoDisponible: " + this.saldoDisponible);
    }

    depositar(cantidad: number) {
        this.saldoDisponible += cantidad;
        console.log(`Se ha realizado un depósito de ${cantidad}, el saldo de la cuenta es: ${this.saldoDisponible}`)
    }

    retirar(cantidad: number){
        this.saldoDisponible -= cantidad;
        console.log(`Se ha realizado un retiro de ${cantidad}, el saldo dela cuenta es: ${this.saldoDisponible}`);
    }

    get Titular(): string{
        return this.titular;
    }

    set Titular(titular: string) {
        this.titular = titular;
    }

    get SaldoDisponible(): number {
        return this.saldoDisponible;
    }

    set SaldoDisponible(saldoDisponible: number) {
        this.SaldoDisponible = saldoDisponible;
    }
}
