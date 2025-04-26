import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';
import { ButtonComponent } from '../../public-api';
import { HeaderComponent } from '../../public-api';
import { PageComponent } from '../../public-api';

export function registerWebComponents(injector: Injector) {
  // Botón
  const buttonElement = createCustomElement(ButtonComponent, { injector });
  customElements.define('soft-tok-button', buttonElement);

  // Header
  const headerElement = createCustomElement(HeaderComponent, { injector });
  customElements.define('soft-tok-header', headerElement);

  // Página
  const pageElement = createCustomElement(PageComponent, { injector });
  customElements.define('soft-tok-page', pageElement);
}