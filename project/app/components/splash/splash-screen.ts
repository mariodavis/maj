import { Observable } from '@nativescript/core';
import { waterDropImage } from '../../assets/images/water-drop';

export class SplashScreenModel extends Observable {
    private _loadingText: string = 'Initializing...';
    private _loadingTexts: string[] = [
        'Initializing...',
        'Loading data...',
        'Almost ready...'
    ];
    private _currentIndex: number = 0;

    constructor() {
        super();
        this.startLoadingAnimation();
    }

    get waterDropSource(): string {
        return waterDropImage;
    }

    get loadingText(): string {
        return this._loadingText;
    }

    private startLoadingAnimation() {
        setInterval(() => {
            this._currentIndex = (this._currentIndex + 1) % this._loadingTexts.length;
            this._loadingText = this._loadingTexts[this._currentIndex];
            this.notifyPropertyChange('loadingText', this._loadingText);
        }, 1500);
    }
}