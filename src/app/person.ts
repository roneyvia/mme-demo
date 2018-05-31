export const person = {
    name: {
        label: 'Name',
        value: '',
        type: 'text',
        validation: {
            required: true,
            pattern: '[a-zA-Z ]*'
        }
    },
    first: {
        label: 'First',
        value: 'Jibin',
        type: 'text',
        validation: {
            required: true,
            pattern: '[a-zA-Z ]*'
        }
    },
    age: {
        label: 'Age',
        value: 28,
        type: 'number',
        validation: {
            min: 1,
            max: 5
        },
        styleClass: ['myStyle', 'myStyle2']
    },
    gender: {
        label: 'Gender',
        value: '',
        type: 'radio',
        options: [
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F' }
        ],
        validation: {
            required: true
        },
        styleClass: ['myStyle']
    },
    city: {
        label: 'City',
        value: '39010',
        type: 'select',
        options: [
            { label: '(choose one)', value: '' },
            { label: 'Cochi', value: '39100' },
            { label: 'USA', value: '39010' },
            { label: 'TVM', value: '39057' }
        ],
        validation: {
            required: true
        }
    }
};
