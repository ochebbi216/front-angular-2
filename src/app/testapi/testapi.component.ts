import { Component, OnInit } from '@angular/core'; 
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-testapi', 
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.scss']
})
export class TestapiComponent implements OnInit { 
  parent: any;

  constructor(private datas: ParentService) { }

  ngOnInit(): void {
    this.datas.getall().subscribe(
      res => {
        this.parent = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
