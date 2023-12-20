import './App.css'

import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      inp: "",
      inputs: []
    }

    this.change_inp = this.change_inp.bind(this)
  }

  change_inp(e) {
    this.setState(() => {
      return {
        inp: e.target.value,
        inputs: this.state.inputs
      }
    })
  }

  createList = () => {
    if(this.state.inp==''){
      return;
    }
    let oldVal = this.state.inp
    let oldInp = [...this.state.inputs]
    oldInp.push(oldVal)

    this.setState(() => {
      return {
        inp: " ",
        inputs: oldInp
      }
    })
  }

  update = (e, ind) => {
    let oldInArr = [...this.state.inputs]
    oldInArr[ind] = e.target.value
    this.setState(() => {
      return {
        inp: " ",
        inputs: oldInArr
      }
    })
  }

  delete = (ind) => {
    let oldIns = [...this.state.inputs]
    oldIns.splice(ind,1)
    this.setState(() => {
      return {
        inp: " ",
        inputs: oldIns
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <div>
          <input type="text" placeholder='Type here' id="text-box" onChange={(e) => this.change_inp(e)} />
          <button onClick={this.createList}>Add Item</button>
        </div>


        <div>
          {this.state.inp}
          <br />
        </div>


        <div>
          {
            this.state.inputs && this.state.inputs.map((item,ind) => {
              return (
                <>
                  <input type="text" value={item} onChange={(e)=>this.update(e,ind)}/>
                  <button onClick={()=>this.delete(ind)}>Delete Item</button>
                  <br />
                </>
              )
            })
          }
        </div>


      </div>

    )
  }
}
