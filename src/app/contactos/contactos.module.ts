import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactosPage } from './contactos.page';
import { ContenidoContactosComponent } from "./contenido-contactos/contenido-contactos.component";
import { ContactosPageRoutingModule } from './contactos-routing.module';
import { ComponentsModule } from "../components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContactosPage,ContenidoContactosComponent]
})
export class ContactosPageModule {}
