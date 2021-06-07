/*
  Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.


Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
*/

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.storage = [];
};

/**
* value will always be non-negative.
* @param {number} key
* @param {number} value
* @return {void}
*/

MyHashMap.prototype.hash = function (key) {
  return key;
}

MyHashMap.prototype.put = function (key, value) {
  const address = this.hash(key);
  this.storage[address] = value;
  return;
};

/**
* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function (key) {
  const address = this.hash(key);
  if (this.storage[address] >= 0) return this.storage[address];
  return -1;
};

/**
* Removes the mapping of the specified value key if this map contains a mapping for the key
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function (key) {
  const address = this.hash(key);
  delete this.storage[address];
  return;
};

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/

// time: O(N)
// space: O(N)

// Class Constructor Method

class MyHashMap {
  constructor() {
    this.storage = [];
  }
  hash(key) {
    return key;
  }
  put(key, value) {
    const address = this.hash(key);
    this.storage[address] = value;
    return;
  }
  get(key) {
    const address = this.hash(key);
    if (this.storage[address] >= 0) return this.storage[address];
    return -1;
  }
  remove(key) {
    const address = this.hash(key);
    delete this.storage[address];
    return;
  }
}
