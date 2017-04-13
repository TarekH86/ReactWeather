// function getTempCallback(location, callback) {
//     callback(undefined, 20);
//     callback('City not foun');
// }


// getTempCallback('Nirot', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// });

// //--------------------
// // Promis:

// function getTempPromise (location){
//     return new Promise( (resolve, reject) =>{
//         setTimeout( () => {
//              resolve(22);
//         reject('city not found');
//         }, 2000)
//     })
// }

// getTempPromise('Niort').then( temp => {
//     console.log('premise success', temp);
// }, err => {
//    console.log('city not found', err);
// })

// Challenge Area

function addPromise (a, b){
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
        if(typeof(a) === 'number' && typeof(b) === 'number'){
            resolve(a + b);
        }
        else{
            reject('a or b need to be numbers')
        }
        }, 1000)
    })
}

addPromise(2, 4).then( sum => {
    console.log('Success: a + b = ' + sum)
}, err =>{
    console.log('Error ' + err)
}
);

addPromise(2, 'd').then( sum => {
    console.log('a + b = ' + sum)
}, err =>{
    console.log('Error: ' + err)
}
);