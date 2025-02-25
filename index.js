function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(emphatic = "*") {
  return function(adjective = 'special') {
    return `You are ${emphatic}${adjective}${emphatic}!`;
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  },

  multiply: function(a, b) {
    return a * b;
  },

  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(startingInteger, array) {
  let a = startingInteger;
  
  for (let i = 0; i < array.length; i++) {
    a = array[i](a)
  }

  return a
}