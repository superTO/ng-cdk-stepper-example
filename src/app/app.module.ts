import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyStepperComponent } from './stepper/my-stepper/my-stepper.component';
import { MyStepperHeaderComponent } from './stepper/my-stepper-header/my-stepper-header.component';

@NgModule({
  declarations: [AppComponent, MyStepperComponent, MyStepperHeaderComponent],
  imports: [
    BrowserModule,
    CdkStepperModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
