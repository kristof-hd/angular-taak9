import { Component, Input } from '@angular/core';
import { Persoon } from '../persoon';

@Component({
  selector: 'app-persoon-details',
  templateUrl: './persoon-details.component.html',
  styleUrls: ['./persoon-details.component.css']
})
export class PersoonDetailsComponent {

  @Input() persoon: Persoon;

}
