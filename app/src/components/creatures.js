import React from 'react';
import { Link } from "react-router-dom";

    const Creatures = ({ creatures }) => {

      return (

        <div className="card-columns creatures">
           
            {creatures.map((creature) => (

                <div className="card">

                    {creature._embedded &&
                        <img src={creature._embedded['wp:featuredmedia'][0].source_url} className="card-img-top" alt="..." />
                    }

                    <div className="card-body">
                        <h5 className="card-title">{creature.title.rendered}</h5>
                        <Link to={"/creature/" + (creature ? creature.id: '')}>
                            <button className="btn btn-primary">View</button>
                        </Link>
                    </div>
                </div>
                
            ))}
    
        </div>
      )
    };

    export default Creatures