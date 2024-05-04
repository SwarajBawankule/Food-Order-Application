import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  styleUrls: ['./foodpage.component.css'],
  templateUrl: './foodpage.component.html'
})
export class FoodpageComponent implements OnInit {
  food!: Foods;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.food = foodService.getFoodById(params.id);
      }
    });
  }

  ngOnInit(): void {}
}
