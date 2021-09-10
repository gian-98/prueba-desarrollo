import { Component, OnInit } from '@angular/core';
import * as delay from 'delay';

//SERVICIO
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-vendedor-pedidos',
  templateUrl: './vendedor-pedidos.component.html',
  styleUrls: ['./vendedor-pedidos.component.css']
})
export class VendedorPedidosComponent implements OnInit {

  vendedores = {};
  vendedores1: any;
  vendedores2: any;
  vendedores3: any;
  code_vendedores: any;
  seleccionado: any;
  vendedor_sel: any;

  constructor(public dataService: DataService) { }

  async ngOnInit() {
    await this.getDatosVendedores();

    await delay(3500);

    this.vendedores1.forEach(element => {
      if (!this.vendedores.hasOwnProperty(element.seller_code + ' / ' + element.seller_name)) {
        this.vendedores[element.seller_code + ' / ' + element.seller_name] = {
          fechas: []
        }
      }

      this.vendedores[element.seller_code + ' / ' + element.seller_name].fechas.push({
        visits_date: element.visits_date,
        visits_amount: element.visits_amount,
        orders_amount: element.orders_amount,
        visits_without_sale_amount: element.visits_without_sale_amount
      })
    })

    this.vendedores2.forEach(element => {
      if (!this.vendedores.hasOwnProperty(element.seller_code + ' / ' + element.seller_name)) {
        this.vendedores[element.seller_code + ' / ' + element.seller_name] = {
          fechas: []
        }
      }

      this.vendedores[element.seller_code + ' / ' + element.seller_name].fechas.push({
        visits_date: element.visits_date,
        visits_amount: element.visits_amount,
        orders_amount: element.orders_amount,
        visits_without_sale_amount: element.visits_without_sale_amount
      })
    })

    this.vendedores3.forEach(element => {
      if (!this.vendedores.hasOwnProperty(element.seller_code + ' / ' + element.seller_name)) {
        this.vendedores[element.seller_code + ' / ' + element.seller_name] = {
          fechas: []
        }
      }

      this.vendedores[element.seller_code + ' / ' + element.seller_name].fechas.push({
        visits_date: element.visits_date,
        visits_amount: element.visits_amount,
        orders_amount: element.orders_amount,
        visits_without_sale_amount: element.visits_without_sale_amount
      })
    })
    console.log(this.vendedores)
    this.code_vendedores = Object.keys(this.vendedores);
  }

  getDatosVendedores() {
    this.dataService.getDatos('2016/12/04').subscribe(data => {
      this.vendedores1 = data['data']
    });

    this.dataService.getDatos('2016/12/11').subscribe(data => {
      this.vendedores2 = data['data'];
    })

    this.dataService.getDatos('2016/12/18').subscribe(data => {
      this.vendedores3 = data['data'];
    })
  }

  onChange() {
    this.vendedor_sel = this.vendedores[this.seleccionado].fechas;
  }
}
