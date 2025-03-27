import { HttpInterceptorFn } from '@angular/common/http';

export const ngxUiLoaderHttpFnInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
