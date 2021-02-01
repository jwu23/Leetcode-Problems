// Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return list of lists of the suggested products after each character of searchWord is typed.



var suggestedProducts = function(products, searchWord) {
  var result = [];
  var search = '';


  for (var i = 0; i < searchWord.length; i++) {
    var temp = [];
    var matchIndx = 0;
    search += searchWord[i];
    for (var j = 0; j < products.length; j++) {
      if (products[j].substring(0, search.length) === search) {
        temp.push(products[j])
      }
      // console.log(products[j].substring(0, search.length))
    }
    temp = temp.sort()
    temp = temp.slice(0, 3)
    result.push(temp)
  }
  return result
};

var test = suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], 'mouse')
console.log(test)