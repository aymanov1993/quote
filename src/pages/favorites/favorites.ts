import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

import {QuotePage} from '../quote/quote'
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favoritesQuotes : Quote[]

  constructor(private quotesService:QuotesService, private modalCtrl : ModalController, private settingsService:SettingsService){

  }

  ionViewWillEnter(){
    this.favoritesQuotes = this.quotesService.getFavoriteQuotes()
  }

  onViewQuote(quote:Quote){
      const modal = this.modalCtrl.create(QuotePage, quote)
      modal.present()
      modal.onDidDismiss((remove:boolean)=>{
        if(remove){
          this.onRemoveFromFavorites(quote)
        }
      })
  }

  onRemoveFromFavorites(quote:Quote){
    this.quotesService.removeQuoteFromFavorites(quote)
    this.favoritesQuotes = this.quotesService.getFavoriteQuotes()
  }

  isAltBackground(){
    return this.settingsService.isAltBackground()
  }

}
