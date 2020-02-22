import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockApiInterceptor } from './http-mock-api.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ]
})
export class CoreModule {

    static withMock(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: HttpMockApiInterceptor, multi: true }
            ]
        };
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
            ]
        };
    }
}
