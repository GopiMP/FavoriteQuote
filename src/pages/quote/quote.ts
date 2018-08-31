import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person : string;
  text : string;
  constructor(private viewCtrl : ViewController,
              private navParms : NavParams) {
  }

  ionViewDidLoad() {
    this.person = this.navParms.get("person");
    this.text =  this.navParms.get("text");
  }
  onClose(remove = false){
    this.viewCtrl.dismiss(remove);
  }

}
