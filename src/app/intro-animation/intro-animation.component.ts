import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro-animation',
  templateUrl: './intro-animation.component.html',
  styleUrls: ['./intro-animation.component.css']
})
export class IntroAnimationComponent implements OnInit {
  isVisible = true;

  @Output() animationComplete = new EventEmitter<void>();

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = false;
      this.animationComplete.emit();
    }, 3000);
  }
}
