// First, create an instance of Map. A Map is a data structure that is similar to that of an object. It's an object-like data structure that consists of key-value pairs. The key in map can be any data type: e.g. {'name' => 'lim', 'age' => '27'}

// After a new instance of Map has initialized, {}, to add key-value pairs to a Map, simply use a built-in method .set(key, value)

// For example:

// To add key-value pairs to Map:

let filters = new Map();
filters.set('name', 'lim');
console.log('Display filters after adding the property, key: name and value: lim =>',
  filters
);

// Another option to set multiple key-value pairs:

let instanceOfMap = new Map()
  .set('name', 'lim')
  .set('age', 27)
  .set('hobby', 'Coding')
  .set('favoriteChildHood Game', 'MapleStory');

console.log('Display instanceOfMap => ',
  instanceOfMap
);
console.log('Retrieve name from instanceOfMap => ',
  instanceOfMap.get('name')
);

// To retrieve key from Map:
// Expect the value to be any data types.

console.log('Retrieve the value of key: name from Map, filters => ',
  filters.get('name');
);

// To remove any key-value pair from Map:

instanceOfMap.delete('name');
console.log('Remove key: name => ',
  instanceOfMap
);

// To remove all key-value pairs from Map:
instanceOfMap.clear();
console.log('Remove all key-value pairs => '
  instanceOfMap
);

// Additionally, to create an instance of an Object:

const newObj = new Object();

// Or, the short-cut to display Object is:

const createNewObj = {};

/*
Advantages of using map #
The change is subtle but very important. First, the code is much cleaner. That’s a big advantage in itself. But you’ll see far bigger advantages when you compare these functions to the ones you created with an object. With these functions:

You always use a method on a Map instance.

You don’t mix in language operators after you create the initial instance.

You don’t ever have to create a new instance to perform a simple action.

These are the reasons why maps are so much easier to work with than objects when you’re frequently changing the information. Every action and intention is very clear.
*/