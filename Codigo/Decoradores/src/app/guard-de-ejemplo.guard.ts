import { CanActivateFn } from '@angular/router';

export const guardDeEjemploGuard: CanActivateFn = (route, state) => {
  return true;
};
