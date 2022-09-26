import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ContainerCardComponent } from './components/container-card/container-card.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    ContainerCardComponent,
    AsideComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    ContainerCardComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    TooltipModule
  ]
})
export class SharedModule { }
