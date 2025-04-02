import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { DataService } from "./data.service";
import { ItalicDirective } from "./italic.directive";


@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page3Component,
        NotFoundComponent,
        ItalicDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
