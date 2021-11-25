import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }
    baseUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com';

    postLogin() {
        return this.http.post(
            `${this.baseUrl}/login`,
            {},
            {
                responseType: 'text'
            });
    }
    
}