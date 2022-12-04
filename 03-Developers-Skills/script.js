// 61. Debugging

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celcius:'),
    };

    console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    //console.table(measurement.value); -- view the value in the console in table
    const kelvin = measurement.value + 273;
    return kelvin;
}

// console.log(measureKelvin());

// 97. The this Keyword in Practice
// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };
// jonas.calcAge();

// 100. Primitives and Objects
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27
// }
 
// const jessicaReallyCopy = Object.assign({}, jessica2);
// jessicaReallyCopy.lastName = 'Davis';

// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaReallyCopy);

// 103. Destructuring Arrays
// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;


// const restaurant = {
//     name: 'ABC',
//     categories: ['1', '2', '3'],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 18,
//         },
//         fri: {
//             open: 12,
//             close: 16,
//         },
//     },
// }
// const { fri: { open:o, close:c }, } = restaurant.openingHours;
// console.log(o, c);