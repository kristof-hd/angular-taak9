import { Injectable } from '@angular/core';
import { Persoon } from './persoon';
import { PERSONEN } from './mock-personen';

@Injectable({
  providedIn: 'root'
})
export class PersoonService {
  getPersonen(): Promise<Persoon[]> {
    return Promise.resolve(PERSONEN);
  }
}
