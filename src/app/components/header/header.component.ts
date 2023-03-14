import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';
  showAddTask:boolean = true;
  subscription:Subscription

  constructor(private uiServise:UiService) {
    this.subscription = this.uiServise
     .onToggle()
     .subscribe((value => this.showAddTask = value));
    
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('toggle')
    this.uiServise.toggleAddTask();
  }

}
