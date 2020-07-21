const logItems = function(array) {
    for (const items of array) {
      let count = array.indexOf(items);
      count += 1;
      const result = count + "-" + items;
      console.log(result);
    }
  };
  
  logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

