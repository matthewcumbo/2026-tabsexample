import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonCardSubtitle, IonCardTitle, IonCard, IonItem, IonList, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons],
})
export class Tab3Page {
  current = "";
  students = [
    {
      name:'Agne',
      surname:'Archipovaite',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Amelia',
      surname:'Mangion',
      class:'IDM 5.2',
      units:['PHP','Apps']
    },
    {
      name:'Christopher',
      surname:'Camilleri',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Craig',
      surname:'Zammit',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Jeremy',
      surname:'Camilleri Portelli',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Nadia',
      surname:'Zammit',
      class:'IDM 5.2',
      units:['PHP','Apps']
    },
    {
      name:'Samuel',
      surname:'Lanzon',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Shania',
      surname:'Frendo Galea',
      class:'IDM 5.2',
      units:['PHP','Apps']
    },
  ];
  
  constructor() {}

  filter(selection:string){
    this.current = selection;
  }
}
