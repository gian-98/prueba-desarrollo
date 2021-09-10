import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDatos(fecha: string) {
    const order_date = fecha;
    const url = `https://devback.ventasremotas.com/orders/technical-admission-test?order_date=${order_date}&token=?jrTGbLNA%26jxWL*%26Y/$*Q:2]v=hGpH-`
    return this.http.get(url);
  }
}
