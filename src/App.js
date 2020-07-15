import React from 'react';
// import PropTypes from "prop-types";
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true
    , movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
     } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
     this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {
          isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key = {movie.id}
                  id = {movie.id}
                  year = {movie.year}
                  title = {movie.title}
                  summary = {movie.summary}
                  poster = {movie.medium_cover_image}
                  genres = {movie.genres}
                />
              ))}
            </div>
          )
        }
      </section>
    )
  }

// function Food({name, addr, rating}) {
//   console.log(name);
//   return <div>
//     <h1>I like {name}</h1>
//     <h2>I also Like {addr}</h2>
//     <h3>{rating} / 5.0</h3>
//     </div>
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired
//   , addr: PropTypes.string.isRequired
//   , rating: PropTypes.number.isRequired
// }

// const foodILike = [
//   {
//     id: 1
//     , name: "kimbap"
//     , good: "nice"
//     , rating: 4.3
//   }
//   , {
//     id: 2
//     , name: "bibimbap"
//     , good: "great"
//     , rating: 5
//   }
// ]

// const friends = ["dal", "mark", "lynn", "japan guy"]

// function renderFood(dish) {
//   console.log(dish);
//   return <Food key={dish.id} name={dish.name} addr={dish.good} rating={dish.rating}/>
// }

// className App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hi");
//   }

//   state = {
//     count: 0
//   }

//   add = () => {
//     this.setState(current => ({count: current.count + 1}));
//   };

//   minus = () => {
//     this.setState(current => ({count: current.count - 1}));
//   };

//   componentDidMount() {
//     console.log("component rendered");
//   }

//   componentDidUpdate() {
//     console.log("I just updated");
//   }

//   componentWillUnmount() {
//     console.log("Goodbye!");
//   }

//   render() {
//     console.log("i am rendering");
//     return <div>
//       <h1>The Number is {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//       </div>
//   }
// }



  // render() {
  //   const {isLoading, movies} = this.state;
  // return <div>{isLoading ? "Loading..." : movies.map(movie => (
  //   <Movie 
  //     key={movie.id}
  //     id={movie.id} 
  //     title={movie.title} 
  //     year={movie.year} 
  //     summary={movie.summary} 
  //     poster={movie.medium_cover_image} 
  //   />
  // ))}</div>
  // }
}

export default App;
