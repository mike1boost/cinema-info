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

  onEdit = () => {
    console.log("edit me");
  } 

render() {
  return (
    <div >
      <header className="App-header">
        <h1 className="App-title">Herolo Cinema</h1>
      </header>      
       <MoviesList movies={this.state.moviesList}/>
    </div>
  );
}
}

export default App;



