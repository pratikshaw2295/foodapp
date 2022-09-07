import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;
  constructor(private fs: FoodService, 
    private activated: ActivatedRoute,
    private cs:CartService,
    private route:Router) {
    activated.params.subscribe((params) => {
      if (params['id'])
        this.food = fs.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cs.addToCart(this.food)
    this.route.navigateByUrl('/cart-page')
  }

}
