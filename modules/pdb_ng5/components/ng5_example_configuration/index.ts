/**
 * @module Ng5ExampleConfiguration
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng5ExampleConfiguration} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng5ExampleConfiguration}
    ],
    declarations: [
        Ng5ExampleConfiguration
    ],
    entryComponents: [
        Ng5ExampleConfiguration
    ]
})
export class Ng5ExampleConfigurationModule {}
