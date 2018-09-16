import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface'
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage /*implements OnInit*/ {
  quoteGroup : {category:string, quotes:Quote[], icon : string}

  constructor(private navParams:NavParams, private alertCtrl : AlertController, private quotesService:QuotesService){
    this.quoteGroup = this.navParams.data
  }

  /*ngOnInit(){
    this.quoteGroup = this.navParams.data
  }*/
  onAddToFavorites(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote)
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    })
    alert.present()
  }

  isFavorite(quote:Quote){
    return this.quotesService.isQuoteFavorite(quote)
  }

  onRemoveToFavorites(quote:Quote){
    this.quotesService.removeQuoteFromFavorites(quote)
  }

}