import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Foods[] {
    return [
      {
        id:1,
        name:"Pizza Pepperon",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['Indian','Italy','Jarmany'],
        star:4.6,
        imageUrl:'/assets/img/f1.jpg',
        tag:['Fastfood','Pizza']

      },
      {
        id:2,
        name:"Noodles",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['Indian','china','Greek'],
        star:4.6,
        imageUrl:'/assets/img/f7.jpg',
        tag:['Lunch']

      },
      {
        id:3,
        name:"Burger",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['Indian','Italy','Jarmany'],
        star:4.6,
        imageUrl:'/assets/img/f3.jpg',
        tag:['Lunch']

      },
      {
        id:4,
        name:"French-fries",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['Indian','china','Greek'],
        star:4.6,
        imageUrl: '/assets/img/f4.jpeg',
        tag:['Fastfood','Pizza','Lunch']

      },
      {
        id:5,
        name:"Manchurian",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['Indian','Italy','Jarmany'],
        star:4.6,
        imageUrl: '/assets/img/f5.jpeg',
        tag:['Fastfood','Pizza','Lunch']

      },
      {
        id:6,
        name:"Chiken-Lollypop",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['Indian','china','Greek'],
        star:4.6,
        imageUrl:'/assets/img/f8.jpg',
        tag:['Fastfood','Pizza','Lunch']

      },
      {
        id:7,
        name:"Noodles",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origin:['Indian','china','Greek'],
        star:4.6,
        imageUrl:'/assets/img/f7.jpg',
        tag:['Fastfood','Pizza','Lunch']

      }
    ]
};
// for tag filter
getAllFoodByTag(tag:string):Foods[]{
  // this method for call all tag
  return tag=='All'?
  this.getAll():this.getAll().filter(food=>food.tag?.includes(tag));

  // if(tag='All')
  // return this.getAll();
  // else
  // return this.getAll().filter(food=>food.tag?.includes(tag));
   

};
// for tag
getAllTag():Tag[]{
  return[
    {name:'All',count:7},
    {name:'Fastfood',count:4},
    {name:'Pizza',count:4},
    {name:'Lunch',count:2},

  ]

};
// for foodpage componant
getFoodById(id:number):Foods{
  return this.getAll().find(food=>food.id==id)!;
}

}
  

