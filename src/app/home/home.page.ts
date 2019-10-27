import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// Adding two fields in the class
  username: string;
  password: string;

  constructor(public navCtrl: NavController) {}


// Check if the fields are empty and if they are less than two characters
login() {

  if (this.username != null || this.password != null) {

    if (this.username.length >= 2 && this.password.length >= 2) {

    this.navCtrl.navigateForward('about');

    } else {

      alert('Username and password fields must at least be 2 characters long');

    }
  } else {

    alert('Fields must be filled');
  }
}

}
