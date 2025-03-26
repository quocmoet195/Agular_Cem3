import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { confirmInGuard } from "./core/guards/confirm-in.guard";
import { confirmOutGuard } from "./core/guards/confirm-out.guard";
import { DataService } from "./core/services/data.service";


const appRoutes: Routes = [
    { path: '', component: Page1Component },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component, canActivate: [confirmInGuard] },
    { path: 'page3', component: Page3Component, canActivate: [confirmInGuard] },
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page3Component,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }

