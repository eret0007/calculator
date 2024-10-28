let clear = document.querySelector(".clear")
let num = ""
let negative = document.querySelector(".negative")
let button = document.querySelectorAll(".num")
let display = document.querySelector(".input")
let percent = document.querySelector(".percent")
let add = document.querySelector(".add")
let equal = document.querySelector(".equal")
let subtract = document.querySelector(".subtract")
let divide = document.querySelector(".divide")
let times = document.querySelector(".times")
let numAdd = null
let numSub = null
let numDiv = null
let numTimes = null

function calculate () {
  let currentValue = Number(display.value)
  console.log(display.value)
  if (numAdd != null) {
    display.value = currentValue + numAdd
    numAdd = null}
  else if (numSub != null) {
    display.value = numSub - currentValue
    numSub = null
  }
  else if (numDiv != null) {
      display.value = numDiv / currentValue
  } 
  else display.value = display.value
}

function adding() {
  calculate()
  numAdd = Number(display.value)
  display.value = null
  
}

button.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent
  })
})

negative.addEventListener("click", () => {
  let currentValue = display.value
  if (currentValue.startsWith("-") ) display.value = currentValue.substr(1)
  else display.value = "-" + display.value
})

percent.addEventListener("click", () => display.value = display.value /100)
clear.addEventListener("click", () => {
  display.value = null
  numSub = null
  numDiv = null
  numAdd = null
  numTimes = null
}
)

add.addEventListener("click", adding)
subtract.addEventListener("click", () => {
  calculate()
  numSub = display.value
  display.value = null

})
divide.addEventListener("click", () => {
  calculate()
  numDiv = display.value
  display.value = null
})
times.addEventListener("click", () => {
  calculate()
  numTimes = display.value
  display.value = null
})

equal.addEventListener("click", calculate)


function calculate () {
  let currentValue = Number(display.value)
  console.log(display.value)
  if (numAdd != null) {
    display.value = Math.floor((currentValue + numAdd) * 1000) /1000
    numAdd = null}
  else if (numSub != null) {
    display.value = Math.floor((numSub - currentValue)*1000)/1000
    numSub = null
  }
  else if (numDiv != null) {
      display.value = Math.floor((numDiv / currentValue) * 1000) / 1000
      numDiv = null
  } 
  else if (numTimes != null) {
    display.value = Math.floor((numTimes * currentValue) * 1000) / 1000
    numTimes = null
  }
  else display.value = display.value
}
