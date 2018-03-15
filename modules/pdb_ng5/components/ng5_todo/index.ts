/**
 * @module Ng5ExampleConfiguration
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng5Todo} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng5Todo}
    ],
    declarations: [
        Ng5Todo
    ],
    entryComponents: [
        Ng5Todo
    ]
})
export class Ng5TodoModule {}
