import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Tag } from '../shared/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  // foodpage 
  @Input()
  foodpageTags?:string[];
// cssimplement
  @Input()
  justifyContent:string='center';


tags:Tag[]=[]
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodpageTags)
    this.tags=this.fs.getAllTag()
  }

}
