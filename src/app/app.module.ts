import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule,Routes, Router} from '@angular/router';
import { SecondarynavbarComponent } from './secondarynavbar/secondarynavbar.component';
import { PrimarysearchbarComponent } from './primarysearchbar/primarysearchbar.component';
import { AdvancedsearchbarComponent } from './advancedsearchbar/advancedsearchbar.component';
import { HelppageComponent } from './helppage/helppage.component';
import { FraudComponent } from './fraud/fraud.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobDictionaryComponent } from './job-dictionary/job-dictionary.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ShortlistComponent } from './shortlist/shortlist.component';


const appRoutes:Routes = [
  {path:'',component:HomepageComponent},
  {path:'search',component:PrimarysearchbarComponent },
  {path:'advancedsearch',component:AdvancedsearchbarComponent },
  {path:'signup',component: SignupComponent  },
  {path:'alert',component: FraudComponent },
  {path:'help',component: HelppageComponent },
  {path:'about',component:AboutusComponent },
  {path:'contact',component:ContactusComponent },
  {path:'job',component:JobDictionaryComponent },
  {path:'policy',component: PrivacyPolicyComponent },
  {path:'terms',component: TermsOfUseComponent },
  {path:'view',component:ViewProfileComponent },
  {path:'list',component:ShortlistComponent  },
]


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    SecondarynavbarComponent,
    PrimarysearchbarComponent,
    AdvancedsearchbarComponent,
    HelppageComponent,
    FraudComponent,
    AboutusComponent,
    ContactusComponent,
    JobDictionaryComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    ViewProfileComponent,
    ShortlistComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgFlashMessagesModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
