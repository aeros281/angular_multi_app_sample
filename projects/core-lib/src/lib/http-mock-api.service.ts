import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { default as mockEndpoints } from '../mock-data';

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentMockEndpoints = mockEndpoints[req.method] && mockEndpoints[req.method][req.url] || null;

    return currentMockEndpoints ? currentMockEndpoints.handle(req) : next.handle(req);
  }
}