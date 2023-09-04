import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  addUser!: FormGroup;
  newUser!: User;

  constructor(private userService : UserService,
    private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.addUser = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', [Validators.required]],
      rôle: ['Admin', [Validators.required]],
    } 
    
    )
    
  }
  
  OnAddUser() {
let newUser: User = { ...this.addUser.value};
      if(!this.addUser.valid){
         newUser={ ...this.addUser.value};
      }
      console.log(newUser);



    this.userService.addUser(newUser).subscribe({
      next: () => {
        alert('Utilisateur ajouté avec succès !');
        this.addUser.reset();
        this.router.navigate(['/connexion'])
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout de l'utilisateur", error);
      }
    });
    }
}
