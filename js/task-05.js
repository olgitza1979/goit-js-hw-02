const checkForSpam = function(message) {
  message = message.toLowerCase();
    const spamArray = ["spam", "sale"];
    for (let word of spamArray) {
      if (message.includes(word)) {
        return true;
      } 
    }
   return false;
    };
  
  console.log(checkForSpam('Latest technology news')); 
  
  console.log(checkForSpam('JavaScript weekly newsletter')); 
  
  console.log(checkForSpam('Get best sale offers now!')); 
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); 