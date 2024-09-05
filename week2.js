//Task 1
function createArrayOfObjects() {
    // Initialize an empty array
    const arrayOfObjects = [];
  
    // Create objects
    const object1 = {
      name: 'javeria',
      age: 20,
      job: 'Engineer'
    };
  
    const object2 = {
      name: 'Ushna',
      age: 25,
      job: 'Designer'
    };
  
    const object3 = {
      name: 'Ayesha',
      age: 35,
      job: 'Manager'
    };
  
    // Add objects to the array
    arrayOfObjects.push(object1);
    arrayOfObjects.push(object2);
    arrayOfObjects.push(object3);
  
    // Return the array
    return arrayOfObjects;
  }
  
  // Call the function and store the result
  const result = createArrayOfObjects();
  
  // Log the result to the console
  console.log(result);