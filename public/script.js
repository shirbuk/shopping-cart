// an array with all of our cart items
var cart = [];


var saveToLocalStorage = function (item) {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem('shoppingCart' || '[]');
}

cart = getFromLocalStorage();

var calcTotal = function() {
  var total = 0;
  for(i=0 ; i < cart.length; i++ ){
  total += cart[i].price;
};
$(".total").html(total);
};


var removeItem = function() {
    var index = $(this).closest('.cartItem').index();
    cart.splice(index, 1); 
    updateCart();
    saveToLocalStorage();
}

$('body').on('click', '.removeBtn', removeItem);

// html בכל פעם נוסיף ל
// את הפריטים שבקארט
var updateCart = function () {
  // כל פעם מחדש שנוסיף פריט, זה לא ישכפל את הפריט הקודם
  $(".cart-list").empty();
  // להוסיף את ההנדלבר שיצרנו:
  var source = $('#shopping-template').html();
  var template = Handlebars.compile(source);
  for (var i= 0; i < cart.length; i++) {
    // מגדירים את המשמעות של האנדלברס שיצרנו
    var newHTML = template(cart[i]);
    // htmlמוסיפים את הטמפלט ל
    $(".cart-list").append(newHTML);
  }
  calcTotal();
  // DONE: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}

var addItem = function (item){
  cart.push(item);
  saveToLocalStorage(cart[i]);
  // DONE: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  $('.cart-list').empty();
  cart = [];
  total = 0;
  $('.total').html(total);
  // DONE: Write a function that clears the cart ;-)
}

$('.view-cart').on('click', function () {
  // DONE: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.item').data();
   // DONE: get the "item" object from the page
  addItem(item);
  updateCart();
});


$('.clear-cart').on('click', function () {
  clearCart();
});



// update the cart as soon as the page loads!
updateCart();

