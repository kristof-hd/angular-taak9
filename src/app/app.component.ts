import { Component, OnInit } from '@angular/core';
import { Persoon } from './persoon';
import { PersoonService } from './persoon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Founders of Angular';
  personen: Persoon[];
  selectedPersoon: Persoon;

  constructor(private persoonService: PersoonService) {}

  onSelect(persoon: Persoon): void {
    this.selectedPersoon = persoon;
  }

  ngOnInit(): void {
    this.persoonService.getPersonen().then(personen => this.personen = personen);
  }

}
