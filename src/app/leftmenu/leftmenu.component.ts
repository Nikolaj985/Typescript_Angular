import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Post } from '../post';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css'],
})
export class LeftmenuComponent implements OnInit {
  posts: Post[];

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.posts = this.counterService.citiesData();
  }
}
