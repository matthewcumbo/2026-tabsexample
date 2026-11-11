import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCardSubtitle, IonCard } from '@ionic/angular';
import { ServiceExample } from '../service-example';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {

  private se = inject(ServiceExample);
  public student = {
    name:"",
    surname:"",
    age:0
  };

  constructor() { }

  ngOnInit() {
    this.student = this.se.student;
  }

}
