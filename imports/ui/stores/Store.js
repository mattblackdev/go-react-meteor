import { observable, action } from 'mobx'

class Store {
  @observable nodes = []
  @observable links = []
  
  constructor() {
    this.nodes = [
      { key: "Hello" },   // two node data, in an Array
      { key: "World!" }
    ]

    this.links = [{ from: "Hello", to: "World!"}]
  }

  @action add() {
    console.log('add')
    this.nodes.push({ key: 'New Node'})
  }
}

const store = new Store()
export default store
export { Store }