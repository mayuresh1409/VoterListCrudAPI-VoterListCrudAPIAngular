import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Voter } from 'src/app/models/voter.model';
import { VotersService } from 'src/app/services/voters.service';

@Component({
  selector: 'app-edit-voter',
  templateUrl: './edit-voter.component.html',
  styleUrls: ['./edit-voter.component.css']
})
export class EditVoterComponent implements OnInit{

  voterDetails : Voter = {
    id : '',
    name : '',
    email : '',
    phoneNumber : ''
  };

  constructor (private route : ActivatedRoute, private voterService : VotersService, private router : Router) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next : (params) => {
          const id = params.get('id');

          if(id) {
            this.voterService.getVoter(id)
            .subscribe({
              next : (response) => {
                this.voterDetails = response;
              }
            })
          }
        }
      })
  }

  updateVoter(){
    this.voterService.updateVoter(this.voterDetails.id, this.voterDetails)
    .subscribe({
      next : (response) => {
        this.router.navigate(['voters']);
      }
    })
  }

  deleteVoter(id: string){
    this.voterService.deleteVoter(id)
    .subscribe({
      next : response => {
        this.router.navigate(['voters']);
      }
    })
  }
}
