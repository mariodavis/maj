import { Application } from '@nativescript/core';
import { registerElement } from '@nativescript/core';

registerElement('splash-screen', () => require('./components/splash/splash-screen').default);

Application.run({ moduleName: 'app-root' });