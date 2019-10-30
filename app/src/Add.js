import React, { Component } from "react";

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {

  }

  submitCreature(e){
    
    e.preventDefault();
    console.log("sumbitting creature");
    console.log(document.querySelector('#name').value);

    let that = this;
    console.log(that);
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODc2NSIsImlhdCI6MTU3MjM2NTMwNiwibmJmIjoxNTcyMzY1MzA2LCJleHAiOjE1NzI5NzAxMDYsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.aGgHhqfLf2-RYSA8euMR-ypMjDWIF4WN0Qt6KO0HcTw";
    fetch('http://localhost:8765/wp-json/wp/v2/creature', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            title: document.querySelector('#name').value,
            content: document.querySelector('#content').value,
            status: "publish"
        })
    }).then(function(response){
        that.props.history.push('/');
    }).then(function(post){
        console.log(post);
    });
  }

  render() {
    return (
      <div>

        
        <form onSubmit={e => this.submitCreature(e)} className="d-flex flex-column bd-highlight mb-3">
            <div className="form-group">
                <label htmlFor="name">Creature name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>

            <div className="form-group">
                <label htmlFor="content">Content</label>
                <input type="text" className="form-control" id="content" placeholder="Enter content" />
            </div>

            <button className="btn btn-primary">Save Creature</button>
      </form>

      </div>

        
    )
  }
}

export default Add;