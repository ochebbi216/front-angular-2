import { Component } from '@angular/core';
import { ChildService } from '../services/child.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
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

