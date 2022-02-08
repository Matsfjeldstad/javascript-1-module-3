// *** List of falsy values ****
//
// false
// 0 - the number zero
// "", '' or - empty strings
// null
// undefined
// Nan - Not a Number

// Everything else is Truly

let test = false;
test = 0;
test = null;
test = "";
test = true;
test = undefined;

if (test) {
  console.log("truly");
} else {
  console.log("falsy");
}

const carsData = [
  {
    make: "Tesla",
    isElectric: true,
  },
  {
    make: "BMW",
    isElectric: false,
  },
];

carsData.forEach((car) => {
  console.log(car.isElectric);
  if (!car.isElectric) {
    console.log(`${car.make} is not electric`);
  }
});
// If we are trying to check if a value exists (if it isn't null or undefined) for example,
// we can do this:

//TODO write example

// rather than having to check for both null and undefined like this:

//TODO write example

// That applies to all the falsy values,
// so we can check that a variable's value is not one of the falsy values
// by writing an if statement like this:

// Example 1 Play with truly and falsy values

// Example 2 Real life example
