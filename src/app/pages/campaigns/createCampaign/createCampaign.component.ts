import { Component, ViewEncapsulation, Input, OnChanges }       from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Attribute, userActions } from './data-model';
import { delay, dropdownAttribute, segment, action } from './data-model';
import { conditions, Campaign, attributevalues } from './data-model';
import { AuthenticationHelper } from '../../../app.authentication';
import { Router }       from '@angular/router';

@Component({
    selector: 'createCampaign',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./createCampaign.scss')],
    template: require('./createCampaign.html')
})

export class CreateCampaign implements OnChanges {
    @Input() saveCampaign: Campaign;

    campaignForm: FormGroup;
    dropdownAttributes = dropdownAttribute;
    attributeValues = attributevalues;
    segment = segment;
    actions = action;
    userActions = userActions;
    delays = delay;
    conditions = conditions;
    public submitted: boolean = false;
    step: any = 1;
    data: any;

    constructor(private fb: FormBuilder, private authentication: AuthenticationHelper
        , private router: Router) {
        if (!this.authentication.isLoggedIn()){
            this.router.navigate(['/login']);
        }
        else if (this.authentication.isLoggedIn()){
            this.router.navigate(['campaign/createCampaign']);
        }
        this.createForm();
        this.addAttribute();
    }

    createForm() {
        this.campaignForm = this.fb.group({
            campaign_name: ['', Validators.compose([Validators.required
                , Validators.minLength(2), Validators.maxLength(40)])],
            android: [''],
            iOS: [''],
            web: [''],
            target_audience: ['', Validators.compose([Validators.required])],
            user_action: ['', Validators.compose([Validators.required])],
            attributes: this.fb.array([]),
            trigger_message: ['', Validators.compose([Validators.required
                , Validators.minLength(2), Validators.maxLength(100)])],
            trigger_message_delay: this.delays[1].id,
            min_delay: [''],
            filter_user_action: this.conditions[0].id,
            min_intel_delay: this.delays[1].id,
            max_delay: [''],
            delayOptimization: '',
            max_intel_delay: this.delays[1].id,
            filters: this.fb.array([
                this.initFilters()
            ])
        });
    }

    initFilters(): any {
        return this.fb.group({
            filter_action_name: '',
            filter_user_action: '',
            action_value: '',
            action_input: ['', Validators.compose([Validators.required])],
            filterAttributes: this.fb.array([
                this.fb.group({
                    filter_attribute_name: [''],
                    filter_attribute_action: [''],
                    filter_attribute_value: ['']
                })
            ])
        });
    }

    ngOnChanges() {
        /*this.campaignForm.reset({});*/
    }

    addFilterAttributes(i): void {
        let control = < FormArray > this.campaignForm.controls['filters'];
        let newCont = control.controls[i];
        let arrCont = newCont;
        this.data = arrCont;
        const arry = this.data.controls['filterAttributes'];
        arry.push(this.initAttrributes());
    }

    addFilter(): void {
        const control = < FormArray > this.campaignForm.controls['filters'];
        control.push(this.initFilters());
    }

    initAttrributes(): any {
        return this.fb.group({
            filter_attribute_name: ['', Validators.required],
            filter_attribute_action: ['', Validators.required],
            filter_attribute_value: ['', Validators.required]
        });
    }

    removeFilter(i) {
        let control = < FormArray > this.campaignForm.controls['filters'];
        control.controls.splice(i, 1);
        this.campaignForm.value.filters.splice(i, 1);
    }

    removeFilterAttribute(i, x) {
        let control = < FormArray > this.campaignForm.controls['filters'];
        let newControll = control.controls[i];
        let arrayControll = newControll;
        this.data = arrayControll;
        let attrArray = this.data.controls['filterAttributes'];
        attrArray.controls.splice(x, 1);
        this.campaignForm.value.filters[i].filterAttributes.splice(x, 1);
    }

    previous() {
        this.step = 1;
    }

    get attributes(): FormArray {
        return this.campaignForm.get('attributes') as FormArray;
    };

    addAttribute() {
        this.attributes.push(this.fb.group(new Attribute()));
    }

    removeAttribute(i) {
        this.attributes.controls.splice(i, 1);
        this.campaignForm.value.attributes.splice(i, 1);
    }

    onSubmit() {
        this.saveCampaign = this.prepareSaveHero();
        this.ngOnChanges();
        this.step = 2;
    }

    prepareSaveHero(): Campaign {
        const saveCampaign = this.campaignForm.value;
        return saveCampaign;
    }

}

