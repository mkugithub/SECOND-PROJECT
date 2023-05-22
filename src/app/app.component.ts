import { Component } from '@angular/core';
import{User} from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
    
  constructor(){
   this.user=new User();
   this.user.name="Foo Bar";
   this.user.designation="Software Developer";
   this.user.address="100 Street Napervile Cheicga"
   this.user.phone=[
    "132-123-1234",
    "234-234-2345"
   
   ]


  }
}
