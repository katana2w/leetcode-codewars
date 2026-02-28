// https://dmitripavlutin.com/javascript-shallow-clone-objects/

const hero = {
    name: 'Batman',
    city: 'Gotham'
  };
  
  const heroClone = {
    ...hero
  };
  
  heroClone; // { name: 'Batman', city: 'Gotham' }
  
  hero === heroClone; // => false

  const hero = {
    name: 'Batman',
    city: 'Gotham'
  };
  
  const heroEnhancedClone = {
    ...hero,
    name: 'Batman Clone',
    realName: 'Bruce Wayne'
  };
  
  heroEnhancedClone; 
  // { name: 'Batman Clone', city: 'Gotham', realName: 'Bruce Wayne' }


  const hero = {
    name: 'Batman',
    city: 'Gotham'
  };
  
  const { ...heroClone } = hero;
  
  heroClone; // { name: 'Batman', city: 'Gotham' }
  
  hero === heroClone; // => false



  const hero = {
    name: 'Batman',
    city: 'Gotham'
  };
  
  const { city, ...heroClone } = hero;
  
  heroClone; // { name: 'Batman' }


  const hero = {
    name: 'Batman',
    city: 'Gotham'
  };
  
  const { city, ...heroClone } = {
    ...hero,
    realName: 'Bruce Wayne'
  };
  
  heroClone; // { name: 'Batman', realName: 'Bruce Wayne' }


  const hero = {
    name: 'Batman',
    city: 'Gotham'
  };
  
  const heroClone = Object.assign({}, hero);
  
  heroClone; // { name: 'Batman', city: 'Gotham' }
  
  hero === heroClone; // => false



  const hero = {
    name: 'Batman',
    city: 'Gotham'
  };
  
  const heroClone = Object.assign({}, hero, { name: 'Batman Clone' });
  
  heroClone; // { name: 'Batman Clone', city: 'Gotham' }



  