let num = document.querySelectorAll(".num")
let arr = []
num.forEach((el) => {
  arr.push(el.textContent)
  if (el.textContent < 200) {
    el.textContent = "0"
  } else {
    el.textContent = "200"
  }
})
console.log(arr)

for (let i = 0; i < arr.length; i++) {
  let counter = setInterval(function() {
    num[i].textContent++
    if (num[i].textContent === arr[i]) {
      clearInterval(counter)
    }
  }, 50)
}
