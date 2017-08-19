import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import { observable, action } from 'mobx'


import App from '../imports/ui/containers/App'

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

Meteor.startup(() => {
  ReactDOM.render(<App store={store}/>, document.querySelector('#app'))
})
