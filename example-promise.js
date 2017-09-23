// /**
// Demo old style call back pattern vs. promise patter.
//
// */
//
// function getTempCallback(location, callback) {
//   callback(undefined, 79); // success call back
//   callback('Error: Not found');
// }
//
// // this is the callback function - you see both results when run
// getTempCallback('CityName', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// // promise demo - will not let you call both.
// // it will only run the one - it will wait
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(88);
//       reject('that did not work, it was not found');
//     }, 1000);
//
//   });
// }
//
// // calling the promise
// getTempPromise('Adel').then(function(temp) {
//   console.log('promise-success', temp)
// }, function(err) {
//   console.log('promise-fail', err);
// });

// challenge area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Err - ' + a + " or  " + b + " non-numeric.");
    }
  });
}

addPromise(451, 278).then(function(number) {
  console.log('promise-success', number)
}, function(err) {
  console.log('promise-fail', err);
});

addPromise(1, "asdf").then(function(number) {
  console.log('promise-success', number)
}, function(err) {
  console.log('promise-fail', err);
});
