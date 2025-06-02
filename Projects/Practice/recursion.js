function recursion(n) {
  let i = 1
  while (i < n){
    console.log(i)
    recursion(n - 1)
    i++
  }
}
// recursion(2)

// ? just a random test
function num(n) {
  for(let i = 1; i <= n; i++){
    console.log(i)
    num(n - 1)
  }
}

// num(4)

//? print 1 - n
let count = 1
function num2(n) {
  if(n === 0) {
    return
  }
  num2(n-1)
  console.log(count)
  count++
}

// num2(10)

// ? print something n times
function num3(n, s) {
  if(n === 0) {
    return
  }
  console.log(s)
  num3(n-1, s)
}

num3(10, 'hello')