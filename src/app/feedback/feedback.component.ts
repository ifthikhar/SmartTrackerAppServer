import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiserviceService} from '../shared/apiservice.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model: FeedbackViewModel = {
    name: '',
    email: '',
    feedback: ''
  };
  constructor(private api: ApiserviceService) { }
  ngOnInit() {
  }
  sendFeedback(): void {

    this.api.postFeedback(this.model).subscribe(  res => {
        location.reload();
      },
      err => {
        alert('An error has occurred while sending feedback');
      }
    );
  }
}
export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
