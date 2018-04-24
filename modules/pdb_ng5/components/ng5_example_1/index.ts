/**
 * @module Ng5Example1
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng5Example1} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng5Example1}
    ],
    declarations: [
        Ng5Example1
    ],
    entryComponents: [
        Ng5Example1
    ]
})
export class Ng5Example1Module {}
