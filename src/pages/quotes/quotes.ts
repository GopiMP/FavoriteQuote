import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quotegrp : { category : string, quotes : Quote[], icon : string}[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl: AlertController,
    private quotesService : QuotesService) {
  }

  ngOnInit() {
    this.quotegrp = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }
  onAddToFavorite(selectedQuote :  Quote) {
    console.log("clicked");
      const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are you sure ? ',
        message : 'Are you sure want to add a quote ?',
        buttons: [
          {
            text :  'Yes, go ahead',
            handler : () =>{
              console.log('Ok');
              this.quotesService.addQuoteToFavorite(selectedQuote);
            }
          },
          {
            text : 'No, I changed my mind',
            role : 'cancel',
            handler : () =>{
              console.log("Canceled !");
            }
          }
        ]
      });
      alert.present();
    }
    onRemoveFromFavorite(quote : Quote){
      this.quotesService.removeQuoteFromFavorite(quote);
    }
    isFavorite(quote : Quote){
      return  this.quotesService.isQuoteFavorite(quote);
    }
}
