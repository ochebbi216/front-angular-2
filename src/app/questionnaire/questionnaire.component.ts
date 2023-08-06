import { Component } from '@angular/core';

interface Question {
  text: string;
  responses: string[];
  selectedResponse: string | null;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {


  value: string = '';


}
