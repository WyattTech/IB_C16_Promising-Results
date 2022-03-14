// setTimeout(() => {
//   console.log("Let's get started");
//   slowMath
//     .add(6, 2)
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.multiply(results, 2);
//     })
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.divide(results, 4);
//     })
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.subtract(results, 3);
//     })
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.add(results, 98);
//     })
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.remainder(results, 2);
//     })
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.multiply(results, 50);
//     })
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.remainder(results, 40);
//     })
//     .then((results) => {
//       console.log(`The number is ${results}`);
//       return slowMath.add(results, 32);
//     })
//     .then((results) => {
//       try {
//         if (results > 0) {
//           console.log("Everything went well");
//         }
//       } catch (error) {
//         if (!results) {
//           console.log(error);
//         }
//       } finally {
//         console.log(`The the final results is ${results}`);
//       }
//     }, 1000);
// });

async function doMath() {
  

  try {

    console.log("Let's get started ");
    let results = await slowMath.add(6, 2);
    console.log(`The number is ${results}`);

    results = await slowMath.multiply(results, 2);
    console.log(`The number is ${results}`);

    results = await slowMath.divide(results, 4);
    console.log(`The number is ${results}`);

    results = await slowMath.subtract(results, 3);
    console.log(`The number is ${results}`);

    results = await slowMath.add(results, 98);
    console.log(`The number is ${results}`);

    results = await slowMath.remainder(results, 2);
    console.log(`The number is ${results}`);

    results = await slowMath.multiply(results, 50);
    console.log(`The number is ${results}`);

    results = await slowMath.remainder(results, 40);
    console.log(`The number is ${results}`);

    results = await slowMath.add(results, 32);
    console.log(`The final number is ${results}`);
  } catch (error) {
    console.log("Something went wrong");
  } finally {
    console.log("Everybody is a winner!");
  }
}
doMath();
