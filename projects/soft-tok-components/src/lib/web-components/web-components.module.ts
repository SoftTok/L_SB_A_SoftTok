import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../public-api';
import { HeaderComponent } from '../../public-api';
import { PageComponent } from '../../public-api';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    PageComponent
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ]
})
export class WebComponentsModule { }