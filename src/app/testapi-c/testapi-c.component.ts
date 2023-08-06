import { Component } from '@angular/core';
import { ChildService } from '../services/child.service';

@Component({
  selector: 'app-testapi-c',
  templateUrl: './testapi-c.component.html',
  styleUrls: ['./testapi-c.component.scss']
})
export class TestapiCComponent {
  child: any;

  constructor(private datas: ChildService) { }

  ngOnInit(): void {
    this.datas.getall().subscribe(
      res => {
        this.child = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
