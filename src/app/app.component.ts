import { Component, OnInit } from '@angular/core';

import { JeopardyDataService } from './jeopardy-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy API';

  question: any;
  successMessage: string;
  errorMessage: string;

  constructor(private useanything: JeopardyDataService){}

  getQuestions(){
    this.useanything.getRecords("random") //random is the endpoint
      .subscribe(  //this is listening to the observable
        questions => {
          this.question = questions[0]; //getting "questions" data array
          console.log(this.question);
          },
        error =>  
        {this.errorMessage = <any>error; 
          console.log(this.errorMessage)});

        
  }  

  ngOnInit(){
    this.getQuestions()
  }
}