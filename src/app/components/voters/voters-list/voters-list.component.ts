import { Component, OnInit } from '@angular/core';
import { Voter } from 'src/app/models/voter.model';
import { VotersService } from 'src/app/services/voters.service';

@Component({
  selector: 'app-voters-list',
  templateUrl: './voters-list.component.html',
  styleUrls: ['./voters-list.component.css']
})
export class VotersListComponent implements OnInit{

  voters : Voter[] = [];

  constructor(private voterService : VotersService) {}

  ngOnInit(): void {
      this.voterService.getAllVoters()
      .subscribe({
        next: (voters) => {
          this.voters = voters;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
