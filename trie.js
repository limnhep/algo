// Trie implementation
// A Trie, also known as prefix tree, is a type of Tree data structure that is used to store a set of strings for later retrieval.
// A 'path' from 'root' to 'node' is a 'prefix' of at least one string.

// Constructing a Tree using an Object Approach and that is we create a Trie class that consists of many 'Node' that is connected by reference.

// Unlike many other tree structures, we do not store values within the nodes of a trie.
// A Trie is not a binary tree, so a trie node can have any number of 'children'

class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

const root = new Node();
root.children['a'] = new Node();
root.children['b'] = new Node();
root.children['c'] = new Node();

console.log(root);

// A Trie is a good structure to use because we don't have to store every character instead only store the prefix of the string that is stored.
// A Trie stores 'words'

// Trie's Insert implementation

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    let letter = word[0];
    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }
    if (word.length === 1) {
      root.children[letter].isTerminal =.true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) { // if there is an edge, then return true
        return true;
      } else {
        return false;
      }
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }
}

// time: both trie insert and search require O(m) time where m is the lenght of the target word.
// space: the space is greatly vary depending on how often prefixes are shared among entries. say we have 'n' words and the maximum length of any word is m. The worst-case trie will have no overlapping prefixes and so it will have O(n*m)