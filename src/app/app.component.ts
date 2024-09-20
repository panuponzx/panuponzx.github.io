import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isAnimationComplete = false;
  isScrolled: boolean = false;
  isVisible = true;

  ngOnInit() {
    this.checkScroll();
    setTimeout(() => {
      this.isVisible = false;
      this.isAnimationComplete = true;
    }, 3000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
