import { Component } from '@angular/core';
import { MessagingService } from "./shared/messaging.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  message;
  currentToken;
  

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    var now = new Date();
   
    const userId = 'user'+ now.getMilliseconds();
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
   
    this.message = this.messagingService.currentMessage;
   

    this.currentToken = this.messagingService.currentToken;
  }
}
