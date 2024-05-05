import { Routes } from '@angular/router';
import { FrontPageBodyComponent } from "./front-page-body/front-page-body.component";
import { TryItBodyComponent } from "./try-it-body/try-it-body.component";

export const routes: Routes = [
    { path: 'front-page', component: FrontPageBodyComponent },
    { path: 'try-it-page', component: TryItBodyComponent }
];
