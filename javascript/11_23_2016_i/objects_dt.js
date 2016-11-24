var x = {
    firstName: 'Shirisha',
    isPresent: false,
    isSuspended: null,
    rollNumber: 66,
    y: {
        lastName: 'Kuncha',
        rollNumber: 55,
        z:{
            fullName: 'Shirisha Kuncha',
            rollNumber: 100,
            status: undefined
        }
    }

};

var y = {
    firstName: 'Dhaksh',
    rollNumber: 99
};

x.y.rollNumber = 111;
y.rollNumber = 222;

// -- using dot notation to update the properties

x.firstName = 'Viswa';

//x->y->lastName
x.y.lastName = 'Kandi';

//x->y->z->fullName
x.y.z.fullName = 'Viswa Kandi';

/* --using less preferred way " property notation"
to update the property */
x['firstName'] = 'Tanvhika';

//x->y->lastName
//  TODO: this will work but not a preferred way

x.y['lastName'] = 'Kuncha';
x.y.z['fullName'] = 'Tanvhika Kuncha';

console.log(x);
console.log(y);
