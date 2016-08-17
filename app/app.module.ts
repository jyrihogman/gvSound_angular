import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './Components/app';
import { DND_PROVIDERS } from 'ng2-dnd/ng2-dnd';
import { HTTP_PROVIDERS } from '@angular/http';

@NgModule({
imports: [ BrowserModule, FormsModule],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ],
providers:[ HTTP_PROVIDERS, DND_PROVIDERS]
})
export class AppModule { }