import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-tab-admin',
  templateUrl: './tab-admin.component.html',
  styleUrls: ['./tab-admin.component.css']
})
export class TabAdminComponent {
  @Input() adminPlant!: Plant;
  plantsToDisplay!: Plant[];

 constructor(private plantService: PlantService,
    private route: ActivatedRoute) {
    
     }

  
  ngOnInit(): void {
    this.plantService.getPlants().subscribe({
      next: (response) => {
        this.plantsToDisplay = [...response['data']]
      }, error: (error) => {
        console.error('erreur de récup', error)
      }
    })
  }

  onDelete() {
    const routeParam = Number(this.adminPlant.id);
    
    console.log(routeParam)
    
      
    if (confirm('Êtes-vous sûr ?')) { 
    
    this.plantService.deletePlant(routeParam).subscribe({
      next: (response) => {
        alert('Plante erradiquée avec succès !')
        console.log(response)
      },
      error: () => {
        alert("Erreur lors de la suppression de la plante");
      }
    })}
    
    
  }
}
