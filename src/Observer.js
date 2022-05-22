
import defineReactive from './defineReactive.js'
import { def } from './utils.js'
export default class Observer {
  constructor(value) {
    console.log(this,111)
    def(value, '__ob__', this, false)

    console.log('我是Observer构造器', value)
    this.walk(value)
  }
  walk(value) {
    for (let k in value) {
      defineReactive(value, k)
    }
  }
}