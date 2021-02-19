import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private posts: Post[] = [
    new Post(
      'Post #1',
      '../assets/Untitled.jpg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit veritatis amet commodi, sint cupiditate quisquam illum, eos in dolore eum tempore, deserunt natus quia laudantium esse ipsam et consectetur?'
    ),
    new Post(
      'Post #2',
      '../assets/Untitled.jpg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit veritatis amet commodi, sint cupiditate quisquam illum, eos in dolore eum tempore, deserunt natus quia laudantium esse ipsam et consectetur?'
    ),
    new Post(
      'Post #3',
      '../assets/Untitled.jpg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit veritatis amet commodi, sint cupiditate quisquam illum, eos in dolore eum tempore, deserunt natus quia laudantium esse ipsam et consectetur?'
    ),
  ];
  public counter: number = 3;

  constructor() {}

  public addNewPost(): void {
    this.plus();
    this.posts.push(
      new Post(
        'Post #' + this.counter,
        '../assets/Untitled.jpg',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit veritatis amet commodi, sint cupiditate quisquam illum, eos in dolore eum tempore, deserunt natus quia laudantium esse ipsam et consectetur?'
      )
    );
  }

  private plus(): void {
    this.counter++;
  }
  public minus(): void {
    this.counter--;
  }

  citiesData(): Post[] {
    return this.posts;
  }
}
