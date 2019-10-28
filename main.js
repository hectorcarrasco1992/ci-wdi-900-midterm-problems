function isEvenlyDivisible(num, num1) {
  let result = num / num1

  if(result % 2 === 0){
    return true
  } else return false
}

function halfSquare(num) {
  result = (num * num)/ 2

  return result
}

function isLong(str) {
  if(str.length >= 15){
    return true
  }else return false
  
}

function exclaim(str) {
  let exclamation = '!'
  if (str.includes('!')){
    return str
  } else if (str.length -1 !== '!'){
    return str + exclamation
  } 
    
}

function countWords(str) {
  let count = 0
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i]){
      count ++
      return count
    } else if( str.indexOf(i) === ' '){
      return count
    }
  }
 
}

function containsDigit(str) {
  for (let i = 0; i <str.length; i++){
  if ( str[i].includes('0123456789')){
    return true
  }else return false
  }
}

function containsLowerCase(str) {
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i].toLowerCase){
      return true
    }else return false
  }

  if (str === str.toLowerCase){
    return true
  } else return false
}

function containsUpperCase(str) {
  for (let i = 0; i < str.length; i++){
    if (str === str.toUpperCase()|| str.toUpperCase !== str.toLowerCase()){
      return true
    }else if (str[i.toLowerCase()] === str[i.toUpperCase()]){
      return false
    }
    
  }
  
}

function containsNonAlphanumeric(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < str.length; i++){
    if( str[i] === alphabet){
      return true
    } else return false
  }
  
  

}

function containsSpace(str) {
   if ( str.includes(' ')){
     return true 
   }else return false
}

function digits(num) {
  
    
  
  

}

function truncate(str) {
  if(str.length >= 15){
    return str.slice(0,8) + '...'
  }else if( str.length < 15){
    return str
  }
}

function isValidPassword(str) {
 for ( let i = 0; i <str.length; i++){
   if(str.includes(' ')){
     return false
   }else if (str[i].includes(str[i].toUpperCase())){
     return false 
   } 
 }
}

function onlyPunchy(str) {
  let exclamationPoint = str.indexOf('!')
  if(str.length < 15){
    return str.slice(0,)
  } 
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}