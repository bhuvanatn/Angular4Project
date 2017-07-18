import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .after-five{
    color: white;
  }
  `]
})
export class AppComponent {
  ptoggle = false;
  buttonclicklog = [];
  updateButtonclick() {
    this.ptoggle = !this.ptoggle;
    this.buttonclicklog.push(this.buttonclicklog.length + 1);
  }
}

