import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.API_URL + 'api/staff';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    constructor(private http: HttpClient){
    }

    getAll(): Observable<any> {
        return this.http.get(API_URL);
    }

    get(id): Observable<any> {
        return this.http.get(API_URL + '/' + id);
    }

    create(data): Observable<any> {
        return this.http.post(API_URL, data);
    }

    update(id, data): Observable<any> {
        return this.http.post(API_URL + '/' + id, data);
    }

    delete(id): Observable<any>{
        return this.http.delete(API_URL + '/' + id);
    }

    deleteAll(): Observable<any>{
        return this.http.delete(API_URL);
    }

}