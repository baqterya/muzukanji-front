import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatTab, MatTabGroup, MatTabLink, MatTabNav} from "@angular/material/tabs";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-logo-bar',
  standalone: true,
    imports: [
        NgOptimizedImage,
        MatTabGroup,
        MatTab,
        MatTabNav,
        MatTabLink,
        MatButton
    ],
  templateUrl: './logo-bar.component.html',
  styleUrl: './logo-bar.component.scss'
})
export class LogoBarComponent {

}
