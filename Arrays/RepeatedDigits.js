function find_duplicate_in_array(arra) {
    var object = {};
    var result = [];

    arra.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}
var numbers = [9, 8, 2, 6, 1, 8, 5, 3, 4, 6 ]; 
console.log(find_duplicate_in_array(numbers)); 