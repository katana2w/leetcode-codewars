// array and property for unique check

function uniqueArrayObjects(array, property) {
    const newArray = new Map();
  
    array.forEach((item) => {
      const propertyValue = item[property];
      newArray.has(propertyValue)
        ? newArray.set(propertyValue, { ...item, ...newArray.get(propertyValue) })
        : newArray.set(propertyValue, item);
    });
  
    return [...Array.from(newArray.values())];
  }