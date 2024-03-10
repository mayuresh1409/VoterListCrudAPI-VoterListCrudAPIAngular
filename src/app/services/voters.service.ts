import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voter } from '../models/voter.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VotersService {

  baseApiUrl : string = environment.baseApiurl;
  
  constructor(private http : HttpClient) { }

  getAllVoters(): Observable<Voter[]> {
    return this.http.get<Voter[]>(this.baseApiUrl + '/api/voters');
  }

  addVoter(addVoterRequest: Voter): Observable<Voter> {
    addVoterRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Voter>(this.baseApiUrl + '/api/voters', addVoterRequest);
  }

  getVoter(id: string): Observable<Voter> {
    return this.http.get<Voter>(this.baseApiUrl + "/api/voters/" + id); 
  }

  updateVoter(id: string, updateVoterRequest: Voter): Observable<Voter>{
    return this.http.put<Voter>(this.baseApiUrl + '/api/voters/' + id, updateVoterRequest);
  }

  deleteVoter(id: string): Observable<Voter> {
    return this.http.delete<Voter>(this.baseApiUrl + '/api/voters/' + id);
  }
}
