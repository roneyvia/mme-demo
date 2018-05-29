import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() dataObject;
  form: FormGroup;
  objectProps;

  constructor() {
  }

  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps = Object.keys(this.dataObject)
        .map(prop => {
          const rt = Object.assign({}, { key: prop } , this.dataObject[prop]);
          return rt;
        });
        console.log('------this.objectProps----', this.objectProps);

    // setup the form
    const formGroup = {};
    for (const prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
    }

    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        } else if (validation === 'max') {
          formValidators.push(Validators.max(validators[validation]));
        } else if (validation === 'pattern') {
          formValidators.push(Validators.pattern(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    console.log(form);
  }

}
