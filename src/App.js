import * as React from 'react';
import './App.css';
import {getMovies} from './server-api'
import MoviesList from './view/moviesList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      moviesList:[]
    };
  }
  
  componentDidMount(){    
    getMovies() 
      .then((moviesList)=>{
        this.setState({moviesList})
      });       
  }

  componentDidUpdate(){
    console.log(this.state.moviesList) 
  }

  onEdit = (movieId, movie) => {
    const moviesListUpdated = this.state.moviesList.map((movie_, index) => {
      if (movieId === movie_.id) {
        return movie;
      } else {
        return movie_;
      }
    });
    
    this.setState(state => {
      return {
        moviesList:moviesListUpdated
      };
    });
  }
  
  updateField=(field, value)=>{
    this.setState((prevState)=>{
        return{
            selectedMovie:{
                ...prevState.selectedMovie,
                [field] : value
            }
        }
    })
}

render() {
  return (
    <div >
      <header className="App-header">
        <h1 className="App-title">Herolo Cinema</h1>
      </header>      
       <MoviesList movies={this.state.moviesList} onEdit={this.onEdit}/>
    </div>
  );
}
}

export default App;



