import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-fire-editor',
  templateUrl: './fire-editor.component.html',
  styleUrls: ['./fire-editor.component.css']
})
export class FireEditorComponent implements OnInit {

  
  @HostBinding('attr.class') css = 'ui segment container';
  myForm: FormGroup;
  sku: AbstractControl;
  private object: Object = { 'display': 'some' };

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];
   }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('your submitted value:', form);
  }

  skuValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }
}
