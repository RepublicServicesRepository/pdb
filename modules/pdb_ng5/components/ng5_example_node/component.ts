import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng5-example-node',
  templateUrl: 'template.html'
})
export class Ng5ExampleNode {
  public title: string = '';
  constructor(){
    var node = drupalSettings.pdb.contexts['entity:node'];
    // Would be great not to have to use this ugly d7 style entity crawling, but here we are.
    this.title = node['title'][0]['value'];
  }
}
