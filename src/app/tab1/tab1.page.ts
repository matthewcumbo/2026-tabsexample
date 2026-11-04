import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonListHeader} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, IonListHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
})
export class Tab1Page {
  constructor() {}

  header = "Capital Cities";
  header2 = "Cities";

  countries = [
    {
      country: "Malta",
      city: "Valletta",
      capital: true
    },
    {
      country: "England",
      city: "London",
      capital: true
    },
    {
      country: "Italy",
      city: "Rome",
      capital: true
    },
    {
      country: "France",
      city: "Paris",
      capital: true
    },
    {
      country: "Malta",
      city: "Mosta",
      capital: false
    },
    {
      country: "England",
      city: "Newcastle",
      capital: false
    },
    {
      country: "Italy",
      city: "Milan",
      capital: false
    },
    {
      country: "France",
      city: "Marseille",
      capital: false
    }
  ];
}
