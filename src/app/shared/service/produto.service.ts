  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/produto';


@Injectable({ providedIn: 'root' })
export class LiveService {

    apiUrl = 'http://localhost:8080/produto';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getProdutos(flag: string): Observable<Produto> {
        return this.httpClient.get<Produto>(this.apiUrl + flag);
    }

}