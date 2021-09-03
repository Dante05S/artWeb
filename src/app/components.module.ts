import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomePageRoutingModule } from './home/home-routing.module';

@NgModule({
  imports: [CommonModule,IonicModule,HomePageRoutingModule],
  declarations: [NavBarComponent,FooterComponent],
  exports: [NavBarComponent,FooterComponent]
})
export class ComponentsModule{}
