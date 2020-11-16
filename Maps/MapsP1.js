//Find the max number times the number was repeated
var diceDict = new Object();
var diceDict = {};
let count=0;
while(true)
    {
        let diceNum=Math.floor(Math.random() * 6) + 1;
         if (!diceDict.hasOwnProperty(diceNum)) {
            diceDict[diceNum] = 1;
          }
          else{
            if(diceDict[diceNum]>9){
                break;
            }
            else
            {
            diceDict[diceNum]++;
            }
          }
     }
     for(var key in diceDict){
         if(diceDict[key]==10){
             console.log(key);
         }
     }
