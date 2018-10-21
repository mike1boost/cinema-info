import * as React from 'react';
import Btnn from '../buttons/Edit'

class moviesList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      moviesList:[],
    };
  }
  
  onEdit = () => {
    console.log("edit me");
  } 

  List = () => (
  <div className="container">
	<Btnn />
  <ul className="row cards">
  {
    this.props.movies.map((movie, index) => <li className="card col-sm-6 col-lg-4" key={index}>
      <div className="card-in">
        <img  src= {require('../images/cinema.jpeg')}  alt="cinema"></img>
        <h2 className="card-title">{movie.Title}</h2>
        <div className="card-details">
          <div className="card-data">
            <div>year:{movie.Year}</div>
            <div className="card-meta">Published: June 18th, 2015</div>
            <div>
                <button type="button">Delete</button> 
            
                <button data-toggle="modal" data-target="#sendModal" id="send-open" className="floating-send scroll-fadeout" aria-label="edit movie" >	
                    Edit
                </button> 
            </div>
          </div>  
        </div>
      </div>
    </li>
    )}
	</ul>
</div>
);






    render() {
        return(
         <div>
             {this.List()}
         </div>
        ); 
    
    }

}


export default moviesList;




//      this.props.movies.map((movie, index) => <li className="card col-sm-6 col-lg-4" key={index}>
    //     <div className="card-in">
    //         <img  src= {require('../images/cinema.jpeg')}  alt="cinema"></img>
    //         <div className="card-details">
    //         <h2 className="card-title same-height">{movie.Title}</h2>
    //         <div>year:{movie.Year}</div>
    //         <div className="card-meta">Published: June 18th, 2015</div>
    //         <div>
    //             <button type="button">Delete</button> 
            
    //             <button data-toggle="modal" data-target="#sendModal" id="send-open" className="floating-send scroll-fadeout" aria-label="edit movie" onClick={this.onEdit}>	
    //                 Edit
    //             </button> 
    //         </div>  
    //         </div>
    //     </div>
    //     </li>
    