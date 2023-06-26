import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  data: any = [];
  constructor(private routes: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  registerPlayer(Name: string, Role: string, Runs: number, Wickets: number) {
    this.apiService
      .addPlayer({
        Name: Name,
        Role: Role,
        Runs: Runs,
        Wickets: Wickets,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('registerPlayer', this.data);
      });
    this.routes.navigate(['/dashboard']);
  }
  Register(Name: string, Role: string, Runs: number, Wickets: number) {
    this.registerPlayer(Name, Role, Runs, Wickets);
  }
}
