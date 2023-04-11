import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangeDirectiveDirective } from 'src/directives/color-change-directive/color-change-directive.directive';
import { GenerateInputsDirective } from 'src/directives/new-directive/generate-inputs-directive.directive';
import { ChildrenComponentComponent } from 'src/directives/children-component/children-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeDirectiveDirective,
    GenerateInputsDirective,
    ChildrenComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
