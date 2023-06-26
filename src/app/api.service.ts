import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getPlayersGraterThan10000Runs() {
    return this.http.get(
      'http://localhost:3000/get-players-grater-than-10000-runs'
    );
  }
  public getPlayersGraterThan200Wickets() {
    return this.http.get(
      'http://localhost:3000/get-players-grater-than-200-wickets'
    );
  }
  public getPlayersByRuns() {
    return this.http.get('http://localhost:3000/get-players-by-runs');
  }
  public getAllRounderPlayers() {
    return this.http.get('http://localhost:3000/get-all-rounder-players');
  }
  public getLeastWicketPlayers() {
    return this.http.get('http://localhost:3000/get-least-wicket-players');
  }
}
