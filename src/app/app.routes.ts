import { Routes } from '@angular/router';
import { MurdleMapComponent } from './murdle-map/murdle-map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectedMurdleComponent } from './selected-murdle/selected-murdle.component';

export const routes: Routes = [
    { path: 'case', component: SelectedMurdleComponent },
    { path: '', component: MurdleMapComponent },
    { path: '**', component: PageNotFoundComponent},
];
