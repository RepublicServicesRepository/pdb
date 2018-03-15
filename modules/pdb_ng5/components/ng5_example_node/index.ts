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
import {Ng5ExampleNode} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng5ExampleNode}
    ],
    declarations: [
        Ng5ExampleNode
    ],
    entryComponents: [
        Ng5ExampleNode
    ]
})
export class Ng5ExampleNodeModule {}
