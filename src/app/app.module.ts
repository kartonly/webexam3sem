import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { MainComponent } from './main/main.component';
import { TableStudentsComponent } from './ui/table-students/table-students.component';
import { AddformStudentComponent } from './ui/addform-student/addform-student.component';
import { TextMaskModule } from 'angular2-text-mask';
import { RedactComponent } from './ui/redact/redact.component';
import { LastnamepipePipe } from './shared/lastnamepipe.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { FiltergroupPipe } from './shared/filtergroup.pipe';
import { FiltersectionPipe } from './shared/filtersection.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    MainComponent,
    TableStudentsComponent,
    AddformStudentComponent,
    RedactComponent,
    LastnamepipePipe,
    FilterPipe,
    FiltergroupPipe,
    FiltersectionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
