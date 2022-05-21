import observe from './observe.js'
let obj = {
  a: {
    b: {
      c: 1
    }
  },
  m: 2,
  n: [3, 4, 5, 6]
}
observe(obj)