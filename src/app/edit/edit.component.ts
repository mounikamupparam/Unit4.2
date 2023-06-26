import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  data: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }
  updatePlayer(
    _id: string,
    Name: string,
    Role: string,
    Runs: number,
    Wickets: number
  ) {
    this.apiService
      .updatePlayer({
        _id: _id,
        Name: Name,
        Role: Role,
        Runs: Runs,
        Wickets: Wickets,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('updatePlayer', this.data);
      });
  }
  Update(
    _id: string,
    Name: string,
    Role: string,
    Runs: number,
    Wickets: number
  ) {
    this.updatePlayer(_id, Name, Role, Runs, Wickets);
    this.routes.navigate(['/dashboard']);
  }
}
