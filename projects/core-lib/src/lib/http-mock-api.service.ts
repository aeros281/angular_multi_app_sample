import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { default as mockEndpoints } from '../mock-data';

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req.url);
    const currentMockEndpoints = mockEndpoints[req.method] && mockEndpoints[req.method][req.url.split('?')[0]] || null;

    return currentMockEndpoints ? currentMockEndpoints.handler(req) : next.handle(req);
  }
}
