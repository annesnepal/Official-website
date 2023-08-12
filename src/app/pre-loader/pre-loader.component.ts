import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PreLoaderComponent {
  showHi: boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showHi = false;
    }, 3000); // Change the timing based on your preference
  }
}
