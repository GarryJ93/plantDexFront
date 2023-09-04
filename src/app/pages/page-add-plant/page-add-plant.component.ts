import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './page-add-plant.component.html',
  styleUrls: ['./page-add-plant.component.css']
})
export class PageAddPlantComponent {
  addPlant!: FormGroup;
  plant!: Plant;


  constructor(private plantService : PlantService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addPlant = this.formBuilder.group({
      code_plante: ['', Validators.required],
      nom: ['', Validators.required],
      soleil: ['', Validators.required],
      arrosage: ['', Validators.min],
      categorie: ['', Validators.required],
      image: [''],

    })}

    addPlants(){
      let plant: Plant = { ...this.addPlant.value };
      if(!this.addPlant.valid){
         plant={ ...this.addPlant.value  };
      }
      console.log(plant);



    this.plantService.addPlant(plant).subscribe({
      next: () => {
        alert('Plante ajoutée avec succès !');
        this.addPlant.reset();
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout de la plante", error);
      }
    });
    }
 
 }
