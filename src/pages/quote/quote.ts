import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';



@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person : string
  text:string

  constructor(private navParams : NavParams, private viewCtrl : ViewController){}

  ionViewDidLoad(){
    this.person = this.navParams.get('person')
    this.text = this.navParams.get('text')
  }

  onClose(remove=false){
    this.viewCtrl.dismiss(remove)
  }

}
