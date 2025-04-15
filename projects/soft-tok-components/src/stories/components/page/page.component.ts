import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import type { User } from '../../../stories/user';

@Component({
  selector: 'soft-tok-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `<article>
  <soft-tok-header
    [user]="user"
    (onLogout)="doLogout()"
    (onLogin)="doLogin()"
    (onCreateAccount)="doCreateAccount()"
  ></soft-tok-header>
  <section class="soft-tok-page">
    <h2>Páginas en SoftTok</h2>
    <p>
      Recomendamos construir UIs con un
      <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
        <strong>enfoque basado en componentes</strong>
      </a>
      comenzando con componentes atómicos y terminando con páginas.
    </p>
    <p>
      Renderizar páginas con datos de prueba. Esto facilita la construcción y revisión de estados de página sin
      necesidad de navegar por ellos en tu aplicación. Aquí hay algunos patrones útiles para gestionar los datos de página
      en tu aplicación:
    </p>
    <ul>
      <li>
        Utiliza un componente conectado de nivel superior. SoftTok te ayuda a componer dichos datos desde los
        "args" de las historias de componentes hijo.
      </li>
      <li>
        Reúne datos en el componente de página desde tus servicios. Puedes simular estos servicios
        utilizando las herramientas de prueba.
      </li>
    </ul>
    <p>
      Obtén un tutorial guiado sobre desarrollo basado en componentes en
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Tutoriales de Storybook
      </a>
      . Lee más en la
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> documentación </a>
      .
    </p>
    <div class="tip-wrapper">
      <span class="tip">Tip</span> Ajusta el ancho del canvas con el
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999"
          />
        </g>
      </svg>
      Addon de Viewports en la barra de herramientas
    </div>
  </section>
</article>`,
  styleUrls: ['./page.css'],
})
export class PageComponent {
  user: User | null = null;

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };
  }
}
