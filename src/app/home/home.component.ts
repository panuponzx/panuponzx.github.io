import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.fadeInContent();
    }
  }

  fadeInContent() {
    if (isPlatformBrowser(this.platformId)) {
      const content = document.querySelector('.content'); 
      if (content) {
        content.classList.add('fade-in');
      }
    }
  }
}
