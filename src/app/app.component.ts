import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  env :string;
  constructor() {
    this.env = environment.environment;
    // Logs false for default environment
  }
  title = 'angulardockerapp';
}
