import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})


export class FoodService {



  constructor() { }
  
  

  getFoodById(id:number): Foods{

    return this.getAll().find(food => food.id== id)!;
  }

  getAllFoodByTag(tag:string): Foods[]{
    if(tag== 'All'){
      return this.getAll()}
    else{
    return this.getAll().filter(food => food.tags?.includes(tag));
    }
  }
  

  getAllTag():Tag[]{
    return [
      { name: 'All', count: 10},
      { name: 'FastFood', count: (5)},
      { name: 'Pizza', count: (2)},
      { name: 'Lunch', count: (3)},
      { name: 'Rolls', count: (2)},
      { name: 'Fry', count: (1)},
      { name: 'Soup', count: (1)},
      { name: 'Cake', count: (7)},
    ];

  

  }

  getAll():Foods[]{
    return[
     {
      id:1,
      name:'Pizza Pepperoni',
      cookTime: '30 min', 
      price:10,
      favorite: false,
      origin: ['Pune'],
      star:4.5,
      imgUrl:'/assets/img1.jfif',
      tags: ['FastFood','Pizza'],

     }
     ,
     {
      id:2,
      name:'Domplings',
      cookTime: '20 min',
      price:30,
      favorite: true,
      origin: [ 'India', 'China'],
      star:4.6,
      imgUrl:'/assets/img2.jfif',
      tags: ['FastFood','Slow', 'Lunch'],

     },
     {
      id:3,
      name:'Chocolate Rolls',
      cookTime: '40 min',
      price:7,
      favorite: true,
      origin: ['pakistan'],
      star:4.5,
      imgUrl:'/assets/img3.jfif',
      tags: ['Cake'],

     },
     {
      id:4,
      name:' Soup',
      cookTime: '15 min',
      price:6,
      favorite: false,
      origin: ['koreyaan','japna'],
      star:2.2,
      imgUrl:'/assets/img4.jfif',
      tags: ['Soup'],

     },
     {
      id:5,
      name:'Friech fries',
      cookTime: '10-20 min',
      price:11,
      favorite: false,
      origin: ['italy'],
      star:5.0,
      imgUrl:'/assets/img5.jfif',
      tags: ['FastFood','fry'],

     },
     {
      id:6,
      name:'Panner Rolls',
      cookTime: '5-20 min',
      price:10,
      favorite: false,
      origin: ['italy'],
      star:4.5,
      imgUrl:'/assets/img6.jfif',
      tags: ['Rolls', 'Lunch'],

     },
     {
      id:7,
      name:'Rolls',
      cookTime: '10-15 min',
      price:18,
      favorite: false,
      origin: ['italy'],
      star:4.5,
      imgUrl:'/assets/img8.jfif',
      tags: ['Rolls', 'Lunch'],

     },
     {
      id:8,
      name:'Pizza Vegetable',
      cookTime: '10 min',
      price:55,
      favorite: false,
      origin: ['italy'],
      star:4.5,
      imgUrl:'/assets/img9.jfif',
      tags: ['FastFood','Pizza'],

     },
     {
      id:9,
      name:'Pasta',
      cookTime: '4 min',
      price:7,
      favorite: true,
      origin: ['italy'],
      star:4.5,
      imgUrl:'/assets/img10.jfif',
      tags: ['FastFood'],

     },
     {
      id:10,
      name:'Garlic Bread',
      cookTime: '6 min',
      price:22,
      favorite: false,
      origin: ['italy'],
      star:4.5,
      imgUrl:'/assets/img13.jfif',
      tags: ['FastFood'],

     },

    ];
  }
}
