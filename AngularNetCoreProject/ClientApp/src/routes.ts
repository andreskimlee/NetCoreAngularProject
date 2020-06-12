import { Routes } from '@angular/router'
import { SectionSalesComponent } from './section/section-sales/section-sales.component'
import { SectionOrdersComponent } from './section/section-orders/section-orders.component'
import { SectionHealthComponent } from './section/section-health/section-health.component'

export const appRoutes: Routes = [
    { path: "sales", component: SectionSalesComponent },
    { path: "orders", component: SectionOrdersComponent },
    { path: "health", component: SectionHealthComponent },
    { path: '', redirectTo: './sales', pathMatch: 'full' }
    // pathMatch is pretty much equivalent to exact path. 
]
