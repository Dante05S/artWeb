import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PortafolioPage } from './portafolio.page';
import { ContenidoPortafolioComponent } from "./contenido-portafolio/contenido-portafolio.component";
import { PortafolioPageRoutingModule } from './portafolio-routing.module';
import { ComponentsModule } from "../components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortafolioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PortafolioPage,ContenidoPortafolioComponent]
})
export class PortafolioPageModule {}
