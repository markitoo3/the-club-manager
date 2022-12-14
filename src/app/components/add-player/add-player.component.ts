import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  addPlayerForm: FormGroup;

  constructor(private playersService: PlayersService, private route: ActivatedRoute, private router: Router, fb: FormBuilder) {
    this.addPlayerForm = fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      position: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      team: ['', [Validators.required, Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      wage: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      endOfContract: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  addPlayer() {
    if(this.addPlayerForm.valid) {
      let addedPlayer = {
        ...this.addPlayerForm.value,
        id: parseInt(this.addPlayerForm.value.id),
        wage: parseInt(this.addPlayerForm.value.wage),
      }

    this.playersService.addPlayer(addedPlayer);
    this.router.navigate(['/players']);
    }
  }

  backToPlayers() {
    this.router.navigate(['/players']);
  }

  get name() {
    return this.addPlayerForm.get('name') as FormControl;
  }

  get position() {
    return this.addPlayerForm.get('position') as FormControl;
  }

  get team() {
    return this.addPlayerForm.get('team') as FormControl;
  }

  get age() {
    return this.addPlayerForm.get('age') as FormControl;
  }

  get wage() {
    return this.addPlayerForm.get('wage') as FormControl;
  }

  get endOfContract() {
    return this.addPlayerForm.get('endOfContract') as FormControl;
  }


}
