import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'We serve inspiration through quotes';
  quotes:Quote[] = [
    new Quote (1,'Princess cute','Love','If I know what love is, it is because of you.','Hermann Hesse', new Date(2021,10,17),0,0),
    new Quote (2,'Plezident kingston','Politics','My concern is not whether God is on our side; my greatest concern is to be on Gods side, for God is always right','Abraham Lincoln',new Date(2021,10,14),0,0),
    new Quote (3,'Finer coder','Programming','There are two ways to write error-free programs; only the third one works.','Alan J. Perlis',new Date(2021,10,16),0,0),
    
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
