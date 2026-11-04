import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonListHeader} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonListHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
})
export class Tab1Page {
  constructor() {}

  header = "Countries";

  countries = [
    {
      country: "Malta",
      capital: "Valletta"
    },
    {
      country: "England",
      capital: "London"
    },
    {
      country: "Italy",
      capital: "Rome"
    },
    {
      country: "France",
      capital: "Paris"
    }
  ];
}
