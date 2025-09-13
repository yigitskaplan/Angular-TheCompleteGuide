import { bootstrapApplication } from '@angular/platform-browser';
import {
    HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { tap } from 'rxjs';

function loggingInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
    // const req = request.clone({
    //     headers: request.headers.set('Auth', 'xyz'),
    // });
  console.log('Request made:', request);
  return next(request).pipe(
    tap({
        next: (event) => {
        if (event.type === HttpEventType.Response) {
            console.log('Response received:', event);
            console.log('Response status:', event.status);
            console.log('Response body:', event.body);
        }
      },
    })
  );
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));
