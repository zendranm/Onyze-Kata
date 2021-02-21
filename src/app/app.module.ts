import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PaymentComponent } from './payment/payment.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { JourneyComponent } from './journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    PaymentComponent,
    PassengerInfoComponent,
    JourneyComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
