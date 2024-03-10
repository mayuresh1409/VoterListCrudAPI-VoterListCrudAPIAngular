import { Component, OnInit } from '@angular/core';
import { Voter } from 'src/app/models/voter.model';
import { VotersService } from 'src/app/services/voters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css']
})
export class AddVoterComponent implements OnInit{

  addVoterRequest : Voter = {
    id : '',
    name : '',
    email : '',
    phoneNumber : ''
  }

  constructor(private voterService : VotersService, private router : Router) {}

  ngOnInit(): void {
      
  }
  addVoter() {
    this.voterService.addVoter(this.addVoterRequest)
    .subscribe({
      next : (voter) => {
        this.router.navigate(['voters']);
      }
    })
  }
}
