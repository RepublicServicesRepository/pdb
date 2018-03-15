import {Component, Inject, ElementRef} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng5-example-configuration',
  templateUrl: 'template.html',
})
export class Ng5ExampleConfiguration {
  // We define default values in our YAML file instead of here.
  public text: string = '';
  constructor(
      @Inject(ElementRef) elRef: ElementRef,
  ){
    // Strip the 'instance-id-' off the beginning of our selector for uuid.
    var instanceId = elRef.nativeElement.id.substring(12);
    // Grab the text value defined in our info.yml and instance configurated and feed it to our template.
    this.text = drupalSettings.pdb.configuration[instanceId].text;
  }
}
