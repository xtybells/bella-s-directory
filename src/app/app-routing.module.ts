import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // TODO: LOOK HERE!
  { path: '', component: WelcomePageComponent },
  { path: 'contacts-page', component: ContactsPageComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [WelcomePageComponent, ContactsPageComponent, ProfileComponent] 
