import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WebComponentsModule } from './lib/web-components/web-components.module';
import { registerWebComponents } from './lib/web-components/web-components';

platformBrowserDynamic().bootstrapModule(WebComponentsModule)
  .then(platformRef => {
    const injector = platformRef.injector;
    registerWebComponents(injector);
  })
  .catch(err => console.error(err));