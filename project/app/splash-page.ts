import { NavigatedData, Page } from '@nativescript/core';
import { Frame } from '@nativescript/core';
import { SplashScreenModel } from './components/splash/splash-screen';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new SplashScreenModel();
    
    // Simulate loading time with progressive animations
    setTimeout(() => {
        Frame.topmost().navigate({
            moduleName: "main-page",
            clearHistory: true,
            transition: {
                name: "fade",
                duration: 800
            }
        });
    }, 4500);
}