import * as React from 'react';
import DeleteModal from '../Modal/Delete'
import EditModal from '../Modal/Edit'

class moviesList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedMovie: {
          Title:"", 
          Year:"",
          id:""
      }
    }
  }
  
  onSelectMovie = (e) => {
    const index = e.target.value;
    const selectedMovie = this.props.movies[index];    
    this.setState({selectedMovie})
  }

  componentDidUpdate(){
    // console.log(this.state.selectedMovie) 
  }

  

  

  List = () => (
  <div className="container">
	<EditModal  onEdit={this.props.onEdit} selectedMovie={this.state.selectedMovie} />
  <DeleteModal onDelete={this.props.onDelete} selectedMovie={this.state.selectedMovie} />
  <ul className="row cards">
  {
    this.props.movies.map((movie, index) => <li className="card col-sm-6 col-lg-4" key={index}>
      <div className="card-in">
        <img  src= {require('../images/cinema.jpeg')}  alt="cinema"></img>
        <h2 className="card-title">{movie.Title}</h2>
        <div className="card-details">
          <div className="card-data">
            <div>year:{movie.Year}</div>
            <div>year:{index}</div>
            <div className="card-meta">Published: June 18th, 2015</div>
            <div>
                
                <button data-toggle="modal" data-target="#deleteModal" id="send-open" value={index} className="floating-send scroll-fadeout" aria-label="edit movie" onClick={this.onSelectMovie} >	
                    Delete
                </button>
                <button data-toggle="modal" data-target="#editModal" id="send-open" value={index} className="floating-send scroll-fadeout" aria-label="edit movie" onClick={this.onSelectMovie} >	
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




