function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);// Pass index and the collection itself to the callback
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key],key,collection);// Pass key and the collection itself to the callback
        }
      }
    }
    return collection; // Return the original collection
}
function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      const resultArray = [];
      for (let i = 0; i < collection.length; i++) {
        resultArray.push(callback(collection[i],i,collection));
      }
      return resultArray;
    } else if (typeof collection === 'object' && collection !== null) {
      const resultObject = {};
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          resultObject[key] = callback(collection[key],key,collection);
        }
      }
      return resultObject;
    }
    return collection; // Return the original collection if it's neither an array nor an object
}
function myReduce(collection, callback, initialValue) {
    if (Array.isArray(collection)) {
      let accumulator = initialValue !== undefined ? initialValue : collection[0];
      const startIndex = initialValue !== undefined ? 0 : 1;
  
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
      return accumulator;
    } else if (typeof collection === 'object' && collection !== null) {
      let accumulator = initialValue !== undefined ? initialValue : collection[Object.keys(collection)[0]];
  
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          accumulator = callback(accumulator, collection[key], collection);
        }
      }
      return accumulator;
    }
    return initialValue; // Return the initial value if it's not an array or object
}

function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        return collection[i]; // Return the first element that matches the condition
      }
    }
    return undefined; // Return undefined if no element matches the condition
}
  
function myFilter(collection, callback) {
    if (Array.isArray(collection)) {
      const resultArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          resultArray.push(collection[i]);
        }
      }
      return resultArray;
    } else if (typeof collection === 'object' && collection !== null) {
      const resultArray = [];
      for (const key in collection) {
        if (collection.hasOwnProperty(key) && callback(collection[key])) {
          resultArray.push(collection[key]);
        }
      }
      return resultArray;
    }
    return []; // Return an empty array if it's neither an array nor an object
}
  
  
function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length; // Return the length of the array
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length; // Return the number of keys in the object
    }
    return 0; // Return 0 if it's neither an array nor an object
}
  
  
function myFirst(collection, n) {
    if (!Array.isArray(collection)) {
      return undefined; // Return undefined if it's not an array
    }
  
    if (n === undefined) {
      return collection[0]; // Return the first element if n is not provided
    } else if (n <= 0) {
      return []; // Return an empty array if n is non-positive
    } else {
      return collection.slice(0, n); // Return the first n elements using Array.slice
    }
}
  
function myLast(collection, n) {
    if (!Array.isArray(collection)) {
      return undefined; // Return undefined if it's not an array
    }
  
    if (n === undefined) {
      return collection[collection.length - 1]; // Return the last element if n is not provided
    } else if (n <= 0) {
      return []; // Return an empty array if n is non-positive
    } else {
      return collection.slice(-n); // Return the last n elements using Array.slice
    }
} 
function myKeys(collection) {
    if (typeof collection === 'object') {
      return Object.keys(collection);
    }
}
  
function myValues(collection) {
    if (typeof collection === 'object') {
      return Object.values(collection);
    }
}
  
  // Add your other functions (mySortBy, myFlatten) as needed and uncomment the relevant test cases.
  
module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
};
  