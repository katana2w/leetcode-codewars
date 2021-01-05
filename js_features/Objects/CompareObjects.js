// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/

const hero1 = {
    name: 'Batman'
  };
  const hero2 = {
    name: 'Batman'
  };
  
  hero1 === hero1; // => true
  hero1 === hero2; // => false
  
  hero1 == hero1; // => true
  hero1 == hero2; // => false
  
  Object.is(hero1, hero1); // => true
  Object.is(hero1, hero2); // => false

  function isHeroEqual(object1, object2) {
    return object1.name === object2.name;
  }
  
  const hero1 = {
    name: 'Batman'
  };
  const hero2 = {
    name: 'Batman'
  };
  const hero3 = {
    name: 'Joker'
  };
  
  isHeroEqual(hero1, hero2); // => true
  isHeroEqual(hero1, hero3); // => false

  function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  }


  function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
  
    return true;
  }
  
  function isObject(object) {
    return object != null && typeof object === 'object';
  }

  