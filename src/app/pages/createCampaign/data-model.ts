import { FormBuilder } from '@angular/forms';
const  fb = new FormBuilder();
export class Campaign {
    campaign_name = '';
    android= '';
    iOS= '';
    web= '';
    target_audience= '';
    user_action = '';
    attributes: Attribute[];
    filters:Filters[];
    trigger_message  = '';
}

export class Filto {
    filter_action_name='';
    filter_user_action='';
    action_value='';
    action_input='';
}

export class filto_attr1 {
    filter_attribute_name = '';
    filter_attribute_action = '';
    filter_attribute_value = '';
}

export class Attribute {
    attribute_name = '';
    attribute_value = '';
    inputValue = '';
}

export class Filters {
    filter_action_name='';
    filter_user_action='';
    action_value='';
    action_input='';
    filter_attr:Filter_Attr[]
}

export class Filter_Attr{
    filter_attribute_name = '';
    filter_attribute_action = '';
    filter_attribute_value = '';
    filter_input_value = '';
}

export const Delay = [
    {id: 1,delay_type:'Minutes'},
    {id: 2,delay_type:'Hours'},
    {id: 3,delay_type:'Day'},
    {id: 4,delay_type:'Week'},
];

export const dropdown_attribute = ['Attribute1', 'Attribute2', 'Attribute3', 'Attribute4'];

export const attribute_values = ['value1', 'value2', 'attribute_value3', 'attribute_value4'];

export const segment = [
    {id: 1,segment_name:'segment1'},
    {id: 2,segment_name:'segment2'},
    {id: 3,segment_name:'segment3'},
    {id: 4,segment_name:'segment4'},
    {id: 5,segment_name:'segment5'}
    ];
export const action = [
    {id: 1,action_name:'Action1'},
    {id: 2,action_name:'Action2'},
    {id: 3,action_name:'Action3'},
    {id: 4,action_name:'Action4'},
    {id: 5,action_name:'Action5'}
];

export const user_actions = [
    {id: 1,action_name:'Action1'},
    {id: 2,action_name:'Action2'},
    {id: 3,action_name:'Action3'},
    {id: 4,action_name:'Action4'},
    {id: 5,action_name:'Action5'}
];

export const conditions = [
    {id: 1,condition_name:'Has Executed'},
    {id: 2,condition_name:'Not Executed'},
    {id: 3,condition_name:'Pending'},
    {id: 4,condition_name:'Stopped'}
];
