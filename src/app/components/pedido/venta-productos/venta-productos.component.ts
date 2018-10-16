import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../model/producto';
import { PedidoService } from '../../../services/pedido.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.css']
})
export class VentaProductosComponent implements OnInit {
//CARRITO
private carrito: Array<Producto> = [];
private subscription: Subscription;
private total: number;
private qty : number
  constructor(private pedidoService: PedidoService) { }

  
  ngOnInit() {
    this.pedidoService.getCarrito().subscribe(data => {
      this.carrito = data;
      this.total = this.pedidoService.getTotal();
    },
      error => alert(error));
  }
 


}
