// check('()', [['(', ')']]) // -> true
// check('((()))()', [['(', ')']]) // -> true
// check('())(', [['(', ')']]) // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// '()' '{}' '[]'
module.exports = function check(str, bracketsConfig) {
  
  const bracketsMap = {};
  for (const [open, close] of bracketsConfig) {
    bracketsMap[open] = close;
  }
  let stack = [];
  
  for (let bracket of str) {
    
    if (bracketsMap[bracket]) {
      if (bracketsMap[bracket] === '|'){
        if(stack.includes('|')) {
          console.log('here');          
          stack = stack.filter(item => item !== '|');
        };
      } else{
        // сюда открывающиеся скобки
        stack.push(bracket);
        console.log(stack);  
      }
      
    } else {
      // сюда закрывающиеся скобки
      const lastOpen = stack.pop();
      console.log(lastOpen);
      
      if (bracketsMap[lastOpen] === bracket) {
        console.log(stack);  

      } else {
        console.log(stack.length);
        console.log(stack);
        return false;
      }
    }
  }

  if (stack.length === 0){
    return true;
  } else {
    return false;
  }

}

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// function check(str, bracketsConfig) {

//   const bracketsMap = {};
//   for (const [open, close] of bracketsConfig) {
//     bracketsMap[open] = close;
//   }
//   let stack = [];
  
//   for (let bracket of str) {
    
//     if (bracketsMap[bracket]) {
//       if (bracketsMap[bracket] === '|'){
//         if(stack.includes('|')) {
//           console.log('here');          
//           stack = stack.filter(item => item !== '|');
//         };
//       } else{
//         // сюда открывающиеся скобки
//         stack.push(bracket);
//         console.log(stack);  
//       }
      
//     } else {
//       // сюда закрывающиеся скобки
//       const lastOpen = stack.pop();
//       console.log(lastOpen);
      
//       if (bracketsMap[lastOpen] === bracket) {
//         console.log(stack);  

//       } else {
//         console.log(stack.length);
//         console.log(stack);
//         return false;
//       }
//     }
//   }

//   if (stack.length === 0){
//     return true;
//   } else {
//     return false;
//   }

// }

// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6)); // true