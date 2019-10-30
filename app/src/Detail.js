import React, { Component } from "react";
import { Link } from "react-router-dom";

class Detail extends Component {


  state = {}

  componentDidMount() {

    const { match: { params } } = this.props;

    fetch('http://localhost:8765/wp-json/wp/v2/creature/' + params.id + '?_embed')
    .then(res => res.json())
    .then((data) => {
      this.setState({ creature: data });
      console.log(this.state.creature);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleDelete(e){
    let that = this;
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODc2NSIsImlhdCI6MTU3MjM2NTMwNiwibmJmIjoxNTcyMzY1MzA2LCJleHAiOjE1NzI5NzAxMDYsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.aGgHhqfLf2-RYSA8euMR-ypMjDWIF4WN0Qt6KO0HcTw";
    fetch('http://localhost:8765/wp-json/wp/v2/creature/' + this.state.creature.id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(function(response){
      that.props.history.push('/');
    }).then(function(post){
        console.log(post);
        
    });
  }

  render() {
    return (
      <div>

        <div className="">

               <div className="detail">

                   {this.state.creature && this.state.creature._embedded ?
                       <img src={this.state.creature._embedded['wp:featuredmedia'][0].source_url} className="card-img-top" alt="..." />
                       :
                       ''
                   }

                   <div className="card-body">
                        <h5 className="card-title">{this.state.creature ? this.state.creature.title.rendered: ''}</h5>
                        <p className="card-text">{this.state.creature ? this.state.creature.content.rendered: ''}</p>
                        <Link to={"/creature/edit/" + (this.state.creature ? this.state.creature.id: '')}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                            <button className="btn btn-danger" onClick={e => this.handleDelete(e)}>Remove</button>
                   </div>
               </div>
               

   
       </div>

      </div>

        
    );
  }
}

export default Detail;