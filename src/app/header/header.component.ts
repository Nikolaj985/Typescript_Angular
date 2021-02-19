import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {}

  addNewPost() {
    this.counterService.addNewPost();
  }
}
