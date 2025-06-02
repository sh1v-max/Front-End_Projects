function recursion(n) {
  let i = 1
  while (i < n){
    console.log(i)
    recursion(n - 1)
    i++
  }
}
// recursion(3)

function num(n) {
  for(let i = 1; i <= n; i++){
    console.log(i)
  }
}

// num(4)

function num2(n) {
  for(let i = 1; i <= n; i++){
    console.log(i)
  }
}

num2(4)