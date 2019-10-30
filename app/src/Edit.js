import React, { Component } from "react";

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {title: ""};

      }

    componentDidMount() {
  
      const { match: { params } } = this.props;
  
      fetch('http://localhost:8765/wp-json/wp/v2/creature/' + params.id + '?_embed')
      .then(res => res.json())
      .then((data) => {
        this.setState({ creature: data,
        title: data.title.rendered,
        content: data.content.rendered,
       });
        console.log(this.state.creature);
      })
      .catch((error) => {
        console.log(error);
      })
    }

  submitCreature(e){
    let that = this;
      e.preventDefault();
    console.log("sumbitting creature");
    console.log(document.querySelector('#name').value);
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODc2NSIsImlhdCI6MTU3MjM2NTMwNiwibmJmIjoxNTcyMzY1MzA2LCJleHAiOjE1NzI5NzAxMDYsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.aGgHhqfLf2-RYSA8euMR-ypMjDWIF4WN0Qt6KO0HcTw";
    fetch('http://localhost:8765/wp-json/wp/v2/creature/' + this.state.creature.id, {
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
      that.props.history.push('/creature/' + that.state.creature.id);
    }).then(function(post){
        console.log(post);
    });
  }

  handleTitleChange(e){
    this.setState({title: e.target.value});
  }

  handleContentChange(e){
    this.setState({content: e.target.value});
  }
  render() {
    return (
      <div>

        <form onSubmit={e => this.submitCreature(e)} className="d-flex flex-column bd-highlight mb-3">
            <div className="form-group">
                <label htmlFor="name">Creature name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" value={this.state.title} onChange={e => this.handleTitleChange(e)}  />
            </div>

            <div className="form-group">
                <label htmlFor="content">Content</label>
                <input type="text" className="form-control" id="content" placeholder="Enter content" value={this.state.content} onChange={e => this.handleContentChange(e)} />
            </div>


            <button className="btn btn-primary">Edit Creature</button>
      </form>

      </div>

        
    );
  }
}

export default Edit;