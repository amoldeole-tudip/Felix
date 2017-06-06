import { Component, ViewEncapsulation, ViewChild, Input, OnChanges }       from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Attribute, Filters, Campaign, Filto, filto_attr1, Filter_Attr, user_actions, conditions, attribute_values,Delay, dropdown_attribute, segment,action } from './data-model';

@Component({
  selector: 'createCampaign',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./createCampaign.scss')],
  template: require('./createCampaign.html')
})

export class CreateCampaign implements OnChanges {
  @Input() hero: Campaign;

  campaignForm: FormGroup;
  nameChangeLog: string[] = [];
  dropdown_attributes = dropdown_attribute;
  attribute_values = attribute_values;
  segment = segment;
  actions = action;
  user_actions = user_actions;
  delays = Delay;
  conditions = conditions;
  public submitted: boolean = false;
  step:any = 1;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange();
    this.addAttribute();
    this.addFilters();
  }

  createForm() {
    this.campaignForm = this.fb.group({
      campaign_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
      android: '',
      iOS: '',
      web: '',
      target_audience: ['',Validators.compose([Validators.required])],
      user_action: ['',Validators.compose([Validators.required])],
      attributes: this.fb.array([]),
      trigger_message:['',Validators.compose([Validators.required])],
      trigger_message_delay:this.delays[1].id,
      min_delay:['',Validators.compose([Validators.required])],
      filter_user_action:this.conditions[0],
      min_intel_delay:this.delays[1].id,
      max_delay:['',Validators.compose([Validators.required])],
      delayOptimization:'',
      max_intel_delay:this.delays[1].id,
      Attr:this.fb.array([]),
      filters: this.fb.array([])
    })
  }

  ngOnChanges() {
   /* this.campaignForm.reset({
      campaign_name: this.hero.campaign_name
    });*/
/*    this.setAttributes(this.hero.attribute);*/
  }

  previous(){
    this.step = 1;
  }

  get attributes(): FormArray {
    return this.campaignForm.get('attributes') as FormArray;
  };

  get filters(): FormArray {
    return this.campaignForm.get('filters') as FormArray;
  };

  get Attr():FormArray{
    return this.campaignForm.get('Attr') as FormArray;
  }

  setAttributes(attributes: Attribute[]) {
    const attributeFGs = attributes.map(attribute => this.fb.group(attribute));
    const attributeFormArray = this.fb.array(attributeFGs);
    this.campaignForm.setControl('attributes', attributeFormArray);
  }

  addAttribute() {
    this.attributes.push(this.fb.group(new Attribute()));
  }

  addFilters(){
    this.filters.push(this.fb.group(new Filto()));
    this.Attr.push(this.fb.group(new filto_attr1()))
  }

  removeFilters(i){
    this.filters.controls.splice(i, 1);
    this.campaignForm.value.filters.splice(i, 1);
    this.Attr.controls.splice(i, 1);
    this.campaignForm.value.Attr.splice(i, 1);
  }
  addFiltersAttribute(){
    this.Attr.push(this.fb.group(new filto_attr1()))
    console.log(this.Attr)
  }

  removeAttribute(i) {
    this.attributes.controls.splice(i, 1);
    this.campaignForm.value.attributes.splice(i, 1);
  }

  removeFiltersAttribute(i){
    this.Attr.controls.splice(i, 1);
    this.campaignForm.value.Attr.splice(i, 1);
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    console.log(this.hero)
    this.ngOnChanges();
    this.step=2;
  }

  prepareSaveHero(): Campaign {
    const formModel = this.campaignForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Attribute[] = formModel.attributes.map(
        (attribute: Attribute) => Object.assign({}, attribute)
    );

    const filtersDeepCopy: Filters[] = formModel.attributes.map(
        (attribute: Filters) => Object.assign({}, attribute)
    );

    // return new `Campaign` object containing a combination of original campaign value(s)
    // and deep copies of changed form model values
    const saveHero: Campaign = {
      campaign_name: formModel.campaign_name as string,
      android: formModel.android as string,
      iOS: formModel.iOS as string,
      web: formModel.web as string,
      target_audience: formModel.target_audience as string,
      trigger_message: formModel.target_audience as string,
      user_action: formModel.user_action as string,
      attributes: secretLairsDeepCopy,
      filters:filtersDeepCopy,
    };
    return saveHero;
  }

  revert() { this.ngOnChanges(); }

  logNameChange() {
    const nameControl = this.campaignForm.get('campaign_name');
    nameControl.valueChanges.forEach(
        (value: string) => this.nameChangeLog.push(value)
    );
  }

}

