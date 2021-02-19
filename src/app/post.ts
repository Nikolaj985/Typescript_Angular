export class Post {
  title: string;
  imageUrl: string;
  content: string;

  constructor(title, imageUrl, content) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.content = content;
  }
}
