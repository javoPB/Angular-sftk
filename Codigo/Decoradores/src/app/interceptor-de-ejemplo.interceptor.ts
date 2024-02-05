import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorDeEjemploInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
