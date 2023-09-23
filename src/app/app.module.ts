import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { ButtonComponent } from './reuseable/button/button.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { JudgeComponent } from './components/judge/judge.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { RulesComponent } from './components/rules/rules.component';
import { PrizesComponent } from './components/prizes/prizes.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PrivacyComponent } from './components/privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent, 
    HomeComponent, 
    RegisterComponent,
    NavbarComponent, 
    ButtonComponent, 
    OverviewComponent,
    FaqsComponent, 
    TestimonialsComponent,
    JudgeComponent,
    FooterComponent, 
    TimelineComponent,
    RulesComponent,
    PrizesComponent,
    PartnersComponent,
    PrivacyComponent
    


  ],
  imports: [
    BrowserModule, 
    MaterialModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
