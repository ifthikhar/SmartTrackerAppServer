import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiserviceService} from '../shared/apiservice.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {FeedbackDialogComponent} from '../DialogBox/feedback-dialog/feedback-dialog.component';
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
  constructor(private api: ApiserviceService, private dialog: MatDialog) { }
  ngOnInit() {
  }
  sendFeedback(): void {

    this.api.postFeedback(this.model).subscribe(  res => {
      openDialog();

      location.reload();
      },
      err => {
        alert('An error has occurred while sending feedback');
      }
    );
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(FeedbackDialogComponent, dialogConfig);
  }





}
export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
