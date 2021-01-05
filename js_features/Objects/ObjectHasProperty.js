// https://dmitripavlutin.com/check-if-object-has-property-javascript/

const hero = {
    name: 'Batman'
  };
  
  hero.hasOwnProperty('name');     // => true
  hero.hasOwnProperty('realName'); // => false

  const hero = {
    name: 'Batman'
  };
  
  hero.toString; // => function() {...}
  
  hero.hasOwnProperty('toString'); // => false


  const hero = {
    name: 'Batman'
  };
  
  'name' in hero;     // => true
  'realName' in hero; // => false


  const hero = {
    name: 'Batman'
  };
  
  hero.toString; // => function() {...}
  
  'toString' in hero;              // => true
  hero.hasOwnProperty('toString'); // => false


  const hero = {
    name: 'Batman'
  };
  
  hero.name;     // => 'Batman'
  hero.realName; // => undefined


  const hero = {
    name: 'Batman'
  };
  
  hero.name !== undefined;     // => true
  hero.realName !== undefined; // => false

  const hero = {
    name: undefined
  };
  
  hero.name !== undefined; // => false