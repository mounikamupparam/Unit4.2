import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersGraterThan10000Runs() {
    this.apiService
      .getPlayersGraterThan10000Runs()
      .subscribe((response: any) => {
        this.data = response?.response;
      });
  }
  getPlayersGraterThan200Wickets() {
    this.apiService
      .getPlayersGraterThan200Wickets()
      .subscribe((response: any) => {
        this.data = response?.response;
      });
  }
  getPlayersByRuns() {
    this.apiService.getPlayersByRuns().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getAllRounderPlayers() {
    this.apiService.getAllRounderPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getLeastWicketPlayers() {
    this.apiService.getLeastWicketPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-players-grater-than-10000-runs') {
      this.getPlayersGraterThan10000Runs();
    } else if (value === 'get-players-grater-than-200-wickets') {
      this.getPlayersGraterThan200Wickets();
    } else if (value === 'get-players-by-runs') {
      this.getPlayersByRuns();
    } else if (value === 'get-all-rounder-players') {
      this.getAllRounderPlayers();
    } else if (value === 'get-least-wicket-players') {
      this.getLeastWicketPlayers();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
