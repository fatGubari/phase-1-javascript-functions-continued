// code your solution here

saturdayFun()
saturdayFun('bathe my dog')
function saturdayFun(value = 'roller-skate'){
    return "This Saturday, I want to "+value+"!"
}

mondayWork()
mondayWork("work from home")
function mondayWork(value = 'go to the office'){
    return "This Monday, I will "+value +"."
}

console.log(wrapAdjective("*")("a hard worker"))
function wrapAdjective(value) {
    const innerFunction = function (emphatic) {
      return `You are ${value}${emphatic}${value}!`;
    };
    return innerFunction;
  }