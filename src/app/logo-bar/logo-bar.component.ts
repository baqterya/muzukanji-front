import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MatButton, MatIconButton } from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
    selector: 'app-logo-bar',
    standalone: true,
    imports: [
        NgOptimizedImage,
        MatButton,
        MatIconButton,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './logo-bar.component.html',
    styleUrl: './logo-bar.component.scss'
})
export class LogoBarComponent {

}
