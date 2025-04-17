import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './buttons/button/button.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';


@NgModule({
  imports: [CommonModule, ButtonComponent, HeaderComponent, PageComponent],
  exports: [ButtonComponent, HeaderComponent, PageComponent],
  providers: []
})
export class AngularLibrarySoftTokModule { }
