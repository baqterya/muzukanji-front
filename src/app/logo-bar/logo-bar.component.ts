import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";



@Component({
  selector: 'app-logo-bar',
  standalone: true,
    imports: [
        NgOptimizedImage,
        MatButton,
        MatIconButton
    ],
  templateUrl: './logo-bar.component.html',
  styleUrl: './logo-bar.component.scss'
})
export class LogoBarComponent {

}
