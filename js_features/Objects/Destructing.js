// https://dmitripavlutin.com/javascript-object-destructuring/

// 1. The need for object destructuring

var hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  var name     = hero.name;
  var realName = hero.realName;
  
  name;     // => 'Batman',
  realName; // => 'Bruce Wayne'

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { name, realName } = hero;
  
  name;     // => 'Batman',
  realName; // => 'Bruce Wayne'

  // 2. Extracting a property

  const { identifier } = expression;

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { name } = hero;
  
  name; // => 'Batman'

  // 3. Extracting multiple properties

  const { identifier1, identifier2, ..., identifierN } = expression;


  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { name, realName } = hero;
  
  name;     // => 'Batman',
  realName; // => 'Bruce Wayne'

  // 4. Default values

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { enemies } = hero;
  
  enemies;     // => undefined

  const { identifier = defaultValue } = expression;

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { enemies = ['Joker'] } = hero;
  
  enemies;     // => ['Joker']

  // 5. Aliases

  const { identifier: aliasIdentifier } = expression;

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { realName: secretName } = hero;
  
  secretName; // => 'Bruce Wayne'

// 6. Extracting properties from nested objects

  const { nestedObjectProp: { identifier } } = expression;

  const { propA: { propB: { propC: { .... } } } } = object;

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
      city: 'Gotham'
    }
  };
  
  // Object destructuring:
  const { address: { city } } = hero;
  
  city; // => 'Gotham'

//  7. Extracting a dynamic name property

const { [propName]: identifier } = expression;

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const prop = 'name';
  const { [prop]: name } = hero;
  
  name; // => 'Batman'

  // 8. Rest object after destructuring

  const { identifier, ...rest } = expression;

  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const { name, ...realHero } = hero;
  
  realHero; // => { realName: 'Bruce Wayne' }

