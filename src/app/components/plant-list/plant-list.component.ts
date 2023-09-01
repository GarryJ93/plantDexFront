import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';


@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent {
  @Input() plantsRecupDeLaHome!: Plant[];
  





}
