import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPreloader: boolean = true;
  greetings!: string;
  isDarkMode: boolean = false;
  activeFilter: string = 'projects'; // Initial active filter
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreloader = false;
    }, 6000); // Change the timing based on your preference
    this.updateGreetings();
  }

  updateGreetings(): void {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      this.greetings = 'Good Morning !';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greetings = 'Good Afternoon !';
    } else {
      this.greetings = 'Good Evening !';
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // Apply your theme toggle logic here, e.g., by adding/removing classes to the body or a wrapper element
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
