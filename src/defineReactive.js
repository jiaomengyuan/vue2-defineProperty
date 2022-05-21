import observe from "./observe";
export default function defineReactive(data, key, val) {
  if (arguments.length == 2) {
    val = data[key]
  }
  let childob = observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`获取到了${key}`)
      return val;
    },
    set(newVal) {
      console.log(`设置了${key}`)
      if (val == newVal) {
        return;
      }
      val = newVal
      childob = observe(newVal)
    }
  })
}