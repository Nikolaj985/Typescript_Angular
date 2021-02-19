import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Post } from '../post';

@Component({
  selector: 'app-rigthwindow',
  templateUrl: './rigthwindow.component.html',
  styleUrls: ['./rigthwindow.component.css'],
})
export class RigthwindowComponent implements OnInit {
  posts: Post[];

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.posts = this.counterService.citiesData();
  }
}
