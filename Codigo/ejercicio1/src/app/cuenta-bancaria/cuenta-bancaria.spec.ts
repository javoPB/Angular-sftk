import { CuentaBancaria } from './cuenta-bancaria';

describe('CuentaBancaria', () => {
  it('should create an instance', () => {
    expect(new CuentaBancaria("Javier", 2000)).toBeTruthy();
  });
});
