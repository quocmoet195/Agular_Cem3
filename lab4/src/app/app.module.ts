import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Page1Component } from "./pages/page1/page1.component";
import { Page2Component } from "./pages/page2/page2.component";
import { Page3Component } from './pages/page3/page3.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";


@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        Page1Component,
        Page2Component,
        Page3Component,
        AppComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
