import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [HttpService]
})
export class ProductComponent implements OnInit {

  products:Product[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data:Product[]) => this.products = data["productList"]);
    
  }

}
