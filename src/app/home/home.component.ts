import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.fadeInContent();
  }

  fadeInContent() {
    const intro = document.querySelector('.intro');
    if (intro) {
      intro.classList.add('fade-in');
    }
  }
}
