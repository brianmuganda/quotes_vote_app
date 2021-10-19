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
    new Quote (1,'kenya','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12),0,0),
    new Quote (2,'Wendy','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2019,7,14),0,0),
    new Quote (3,'Mikey','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3),0,0),
    
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
