import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-logo-bar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './logo-bar.component.html',
  styleUrl: './logo-bar.component.scss'
})
export class LogoBarComponent {

}
