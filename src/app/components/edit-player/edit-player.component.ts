import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  editPlayerForm: FormGroup;


  constructor(private playersService: PlayersService, private route: ActivatedRoute, private router: Router, fb: FormBuilder) {
    this.editPlayerForm = fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      position: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      team: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      wage: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      endOfContract: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.playersService.getPlayer(this.route.snapshot.params['id']).subscribe(value => {
      this.editPlayerForm.patchValue(value)
    })
  }

  editPlayer() {
    if(this.editPlayerForm.valid) {
      let player = {
        ...this.editPlayerForm.value,
        id: parseInt(this.route.snapshot.params['id']),
      }
      this.playersService.overWritePlayer(player)
      this.router.navigate(['/players']);
    }
  }

  get name() {
    return this.editPlayerForm.get('name') as FormControl;
  }

  get position() {
    return this.editPlayerForm.get('position') as FormControl;
  }

  get team() {
    return this.editPlayerForm.get('team') as FormControl;
  }

  get age() {
    return this.editPlayerForm.get('age') as FormControl;
  }

  get wage() {
    return this.editPlayerForm.get('wage') as FormControl;
  }

  get endOfContract() {
    return this.editPlayerForm.get('endOfContract') as FormControl;
  }

  prevPage() {
    this.router.navigate([`../`], { relativeTo: this.route })
  }


}
