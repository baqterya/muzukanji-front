import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoBarComponent } from "./logo-bar/logo-bar.component";
import {FrontPageBodyComponent} from "./front-page-body/front-page-body.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LogoBarComponent, FrontPageBodyComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'muzukanji-front';
}
