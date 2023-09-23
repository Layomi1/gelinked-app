import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { OverviewComponent } from './components/overview/overview.component';


const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "register", component:RegisterComponent},
  { path: "contact", component:ContactComponent},
  { path: "timeline", component:TimelineComponent},
  { path: "faqs", component:FaqsComponent}, 
  { path: "faqs", component:FaqsComponent}, 
  { path: "overview", component: OverviewComponent}, 
];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
