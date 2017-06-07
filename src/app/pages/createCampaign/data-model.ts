export class Campaign {

}

export class Attribute {
    attribute_name = '';
    attribute_value = '';
    inputValue = '';
}

export const Delay = [
    {id: 1,delay_type:'Minutes'},
    {id: 2,delay_type:'Hours'},
    {id: 3,delay_type:'Days'},
    {id: 4,delay_type:'Weeks'},
];

export const dropdown_attribute = ['Attribute1', 'Attribute2', 'Attribute3', 'Attribute4'];

export const attribute_values = ['Value1', 'Value2', 'Attribute Value3', 'Attribute Value4'];

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
    {id: 1,action_name:'User Action1'},
    {id: 2,action_name:'User Action2'},
    {id: 3,action_name:'User Action3'},
    {id: 4,action_name:'User Action4'},
    {id: 5,action_name:'User Action5'}
];

export const conditions = [
    {id: 1,condition_name:'Has Executed'},
    {id: 2,condition_name:'Not Executed'},
    {id: 3,condition_name:'Pending'},
    {id: 4,condition_name:'Stopped'}
];
