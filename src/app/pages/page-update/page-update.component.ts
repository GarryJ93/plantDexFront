import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-update-plant',
  templateUrl: './page-update.component.html',
  styleUrls: ['./page-update.component.css']
})
export class PageUpdateComponent {
  updatePlant!: FormGroup;
  plant!: Plant;


  constructor(private plantService : PlantService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.updatePlant = this.formBuilder.group({
      code_plante: [`${this.plant.code_plante}`, Validators.required],
      nom: [`${this.plant.nom}`, Validators.required],
      soleil: [`${this.plant.soleil}`, Validators.required],
      arrosage: [`${this.plant.arrosage}`, [Validators.required]],
      categorie: [`${this.plant.categorie}`, [Validators.required]],
      image: [`${this.plant.image}`],

    })
  }
  
  OnUpdate(id: number, plant: Plant) {
    
  }

    
 
 }
