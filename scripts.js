// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    // takes an array and returns the largestEl
    var max = 0;
    for (var i = 0; i < array.length ; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  },

  reversed: function(string){
    var o = '';
    for (var i = string.length-1; i >=0; i--)
      o += string[i];
      return o;
    // your code here
    // returns the string reversed
  },

  loudSnakeCase: function(string){
    // your code here
    // all spaces turn into _ and has no
    // punctuations
    punctuations = '/[.,\/#!$%\^&\*;:{}=\-`~()]/g';

    array = string.split('');
    for (var i=0; i<array.length; i++) {
      if(array[i] === ' '){
        array[i] = '_';
      }

      if (punctuations.indexOf(array[i]) !== -1) {
        delete array[i];
      }
    }
    return array.join('');
  },

  compareArrays: function(array1, array2){

    // your code here (replace the return)
    // takes 2 arrays and check if equal
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(array){
    // your code here
    // any element in the array that is /3
    // will say FIZZ and any element that
    // is /5 then will say BUZZ and any
    // element thats /3*5 will say fizzBuzz
    var n = [];
    for (var i = 0; i < array; i++)
    if (i%3 === 0) {
      n.push("FIZZ");
    } else if (i % 5 === 0) {
      n.push("BUZZ");
    } else if (i %(3*5) === 0) {
      n.push("FIZZBUZZ")
    }
    return n;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
