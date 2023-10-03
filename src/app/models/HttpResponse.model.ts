import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface HttpResponseModel<T = any> {
    status: number;
    message: string;
    data: T | null;
    error: Error | null;
}

export function http<T = any>(source$: Observable<HttpResponse<T>>) {
    return new Observable<HttpResponseModel<T>>(observer => {
        return source$.subscribe({
            next: (response: HttpResponse<T>) => {
                const resp: HttpResponseModel<T> = {
                    status: response.status,
                    message: response.statusText,
                    data: response.body || null,
                    error: null
                };
                observer.next(resp);
            },
            error: (error: Error) => {
                const resp: HttpResponseModel<T> = {
                    status: 500,
                    message: error.message,
                    data: null,
                    error
                };
                observer.next(resp);
            },
            complete: () => observer.complete()
        });
    });
}