import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string="https://www.feelcats.com/wp-content/uploads/2019/08/beagle.jpg";
  public Titulo:string = "App weather";

}
