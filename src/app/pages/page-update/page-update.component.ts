import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-plant',
  templateUrl: './page-update.component.html',
  styleUrls: ['./page-update.component.css']
})
export class PageUpdateComponent {
  updatePlant!: FormGroup;
  plant!: Plant ;
  


  constructor(private plantService: PlantService,
    private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    
     }

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const plantIdFromRoute = Number(routeParam.get('id'));

      this.plantService.getPlantById(plantIdFromRoute).subscribe((plant) => {
      console.log(plant);
      console.log(plant.data);
      this.plant = plant.data;
      
      console.log(this.plant.code_plante);

    
    
      this.updatePlant = this.formBuilder.group({
      code_plante: [this.plant.code_plante, Validators.required],
      nom: [this.plant.nom, Validators.required],
      soleil: [this.plant.soleil, Validators.required],
      arrosage: [this.plant.arrosage, [Validators.nullValidator]],
      categorie: [this.plant.categorie, [Validators.required]],
      image: [this.plant.image]
    })})
  }
  
  OnUpdate() {
    const id = this.route.snapshot.params['id'];
    const plant = this.updatePlant.value

    if (this.updatePlant) {
    this.plantService.updatePlant(id, plant).subscribe({
      next: () => {
        alert('Plante modifiée avec succès !')
        this.router.navigate(['/admin'])
      },
      error: () => {
        alert("Erreur lors de la modification de la plante");
      }
    })};
    }
  }

    
 




