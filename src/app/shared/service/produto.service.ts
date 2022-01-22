  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/produto';
import { ResponsePageable } from '../model/responsePageable';


@Injectable({ providedIn: 'root' })
export class ProdutoService {

    apiUrl = '/api';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getProdutos(flag: string): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl + flag);
    }

}