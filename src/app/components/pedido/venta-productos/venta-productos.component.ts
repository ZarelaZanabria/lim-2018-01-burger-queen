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
  public carrito: Array<Producto> = [];
  public subscription: Subscription;
  public total: number;
  name : string
 
    constructor(private pedidoService: PedidoService) { }
    
    ngOnInit() {
      this.pedidoService.getCarrito().subscribe(data => {
        this.carrito = data;
        this.total = this.pedidoService.getTotal();
      },
        error => alert(error));
    }
  
  guardarPedido(userName){
      const data = {
        order: this.carrito,
        username: this.name,
        amount: this.total
      };
      if (userName) {
        this.pedidoService.save(data);
        window.location.reload()
       
      alert('Pedido guardado correctamente');
      } else {
        alert('Realice un pedido e inserte su nombre');
      }
  
    } 

    deleteTodo(indice){     
      const index = this.carrito.indexOf(indice) ;
      this.carrito.splice(index,1)
     }

     
    
  }