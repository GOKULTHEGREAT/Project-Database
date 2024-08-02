import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VOCStatusComponent } from './voc-status/voc-status.component';
import { VOCAnalysisComponent } from './voc-analysis/voc-analysis.component';


export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'vocstatus', component: VOCStatusComponent},
    {path: 'vocanalysis', component: VOCAnalysisComponent}
];
