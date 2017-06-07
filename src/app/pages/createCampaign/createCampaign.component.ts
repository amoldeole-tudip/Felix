import {Component, ViewEncapsulation, ViewChild, Input, OnChanges}       from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Attribute, Filto, filto_attr1, Filter_Attr, user_actions} from './data-model';
import {Delay, dropdown_attribute, segment, action} from './data-model';
import {conditions, Filters, Campaign, attribute_values} from './data-model';
import {AuthenticationHelper } from "../../app.authentication";
import { Router }       from '@angular/router';

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
    dropdownAttributes = dropdown_attribute;
    attributeValues = attribute_values;
    segment = segment;
    actions = action;
    userActions = user_actions;
    delays = Delay;
    conditions = conditions;
    public submitted: boolean = false;
    step: any = 1;
    data: any;

    constructor(private fb: FormBuilder, private authentication: AuthenticationHelper, private router: Router) {
        if(!this.authentication.isLoggedIn()){
            this.router.navigate(['/login']);
        }
        else if(this.authentication.isLoggedIn()){
            this.router.navigate(['campaign/createCampaign']);
        }
        this.createForm();
        this.addAttribute();
    }

    createForm() {
        this.campaignForm = this.fb.group({
            campaign_name: ['', Validators.compose([Validators.required, Validators.minLength(2)
                , Validators.maxLength(100)])],
            android: '',
            iOS: '',
            web: '',
            target_audience: ['', Validators.compose([Validators.required])],
            user_action: ['', Validators.compose([Validators.required])],
            attributes: this.fb.array([]),
            trigger_message: ['', Validators.compose([Validators.required])],
            trigger_message_delay: this.delays[1].id,
            min_delay: ['', Validators.compose([Validators.required])],
            filter_user_action: this.conditions[0].id,
            min_intel_delay: this.delays[1].id,
            max_delay: ['', Validators.compose([Validators.required])],
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
            action_input: '',
            filterAttributes: this.fb.array([
                this.fb.group({
                    filter_attribute_name: ['', Validators.required],
                    filter_attribute_action: ['', Validators.required],
                    filter_attribute_value: ['', Validators.required]
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
        let newCont = control.controls[i];
        let arrCont = newCont;
        this.data = arrCont;
        let arry = this.data.controls['filterAttributes'];
        arry.controls.splice(x, 1);
        this.campaignForm.value.filters[i].filterAttributes.splice(x, 1);
    }

    previous() {
        this.step = 1;
    }

    get attributes(): FormArray {
        return this.campaignForm.get('attributes') as FormArray;
    };

    get filters(): FormArray {
        return this.campaignForm.get('filters') as FormArray;
    };

    get Attr(): FormArray {
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

    removeAttribute(i) {
        this.attributes.controls.splice(i, 1);
        this.campaignForm.value.attributes.splice(i, 1);
    }

    onSubmit() {
        this.hero = this.prepareSaveHero();
        console.log(this.hero)
        this.ngOnChanges();
        this.step = 2;
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
            filters: filtersDeepCopy,
        };
        return saveHero;
    }

    revert() {
        this.ngOnChanges();
    }

    logNameChange() {
        const nameControl = this.campaignForm.get('campaign_name');
        nameControl.valueChanges.forEach(
            (value: string) => this.nameChangeLog.push(value)
        );
    }

}

