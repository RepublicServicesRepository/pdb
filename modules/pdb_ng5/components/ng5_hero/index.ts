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
import {Ng5Hero} from './component';
import {Ng5HeroDetail} from './ng5_hero_detail/component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng5Hero}
    ],
    declarations: [
        Ng5Hero,
        Ng5HeroDetail
    ],
    entryComponents: [
        Ng5Hero
    ]
})
export class Ng5HeroModule {}
