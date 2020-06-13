import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SectionHealthComponent } from '../section/section-health/section-health.component';
import { SectionOrdersComponent } from '../section/section-orders/section-orders.component';
import { SectionSalesComponent } from '../section/section-sales/section-sales.component';
import { BarChartComponent } from '../app/chart/bar-chart/bar-chart.component';
import { LineChartComponent } from '../app/chart/line-chart/line-chart.component';
import { PieChartComponent } from '../app/chart/pie-chart/pie-chart.component';

import { appRoutes } from '../routes'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavBarComponent,
    SideBarComponent,
    SectionHealthComponent,
    SectionOrdersComponent,
    SectionSalesComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
