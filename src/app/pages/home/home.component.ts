import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { configs } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchString!: string;
  brand: any;

  constructor(private router: Router) {
    this.brand = configs.brand;
  }

  ngOnInit(): void {
  }

  OnEnter(evt: any) {
    if (evt.keyCode == 13) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
    }
  }
}
