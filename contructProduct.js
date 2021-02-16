/*
A class named Product is given below. You need to define the following in it:

The class constructor that takes the following as parameters in the exact order:
_name: the name of the product.
_price: the price of the product in dollars.
_amount: the amount of that product available.
_madeIn: the country the product is made in.
Important Note: All of the above-mentioned properties should be defined as protected properties in the constructor.

In order to access the protected properties, the following methods need to be defined:

getName: returns the name.
getPrice: returns the price.
getAmount: returns the amount.
getMadeIn: returns the name of the country the product is made in.
setAmount(num): sets the value amount equal to the value passed.
Lastly, you need to implement the following methods inside the class:

canSell(num): num will denote the amount of product that needs to be sold. The method checks if this amount or more is available. It’ll return true if it does and false if the amount available is less than what needs to be sold.

sell(num): the method is used to sell num amount of a product. It should return the updated amount of product left after selling. If the amount of product available is less than num, it should restock the product by adding twice the amount requested to the previously available amount of product and should return this updated value.
*/

class Product {
  //initialize constructor here
  //constructor should have protected properties defined
  //it should also have the get/set functions mentioned above

  //define the canSell function here

  //define the sell function here1
  constructor(_name, _price, _amount, _madeIn) {
    var _name = _name;
    var _price = _price;
    var _amount = _amount;
    var _madeIn = _madeIn;

    this.getName = function () {
      return _name;
    }
    this.getPrice = function () {
      return _price;
    }
    this.getAmount = function () {
      return _amount;
    }
    this.setAmount = function (num) {
      _amount = num;
    }
    this.getMadeIn = function () {
      return _madeIn;
    }
  }
  canSell(num) {
    if (this.getAmount() < num) {
      return false;
    } else {
      return true;
    }
  }
  sell(num) {
    const temp = this.getAmount();
    if (this.canSell(num)) {
      this.setAmount(temp - num);
      return this.getAmount();
    } else {
      this.setAmount(temp + (num * 2));
      return this.getAmount();
    }
  }
}