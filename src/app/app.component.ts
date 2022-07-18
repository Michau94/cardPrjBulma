import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cardPrj';
  posts = [
    {
      title: 'Neat Tree',
      user: '@user',
      imageUrl: 'assets/tree.jpeg',
      content: 'Content',
    },
    {
      title: 'Mountain',
      user: '@Mountain',
      imageUrl: 'assets/mountain.jpeg',
      content: 'Content',
    },
    {
      title: 'Biking',
      user: '@Michau',
      imageUrl: 'assets/biking.jpeg',
      content: 'Content',
    },
    {
      title: 'No foto',
      user: '@Michau',
      imageUrl: '', // default image charged if no image url
      content: 'Content',
    },
  ];
}
