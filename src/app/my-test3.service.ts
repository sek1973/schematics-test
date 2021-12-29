import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MyTest3Service {
    constructor(private http: HttpClient) { }
}