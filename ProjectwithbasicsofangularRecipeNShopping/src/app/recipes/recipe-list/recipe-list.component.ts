import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A new Recipe', 'This is delicious Recipe','https://cdn.lifestyle.com.au/cache/400x225/recipes/thumbnails/IceCreamRecipeCollection.jpg'),
    new Recipe('A new Recipe', 'This is delicious Recipe','https://cdn.lifestyle.com.au/cache/400x225/recipes/thumbnails/IceCreamRecipeCollection.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
