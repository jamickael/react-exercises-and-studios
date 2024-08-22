import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
import HobbyLinks from './components/Hobbylinks.jsx';

function App() {
  return (
    <div className="App">
      <ChoresList />
      <div class ="similarComponents">
        <MovieList />
        <BookList />
        <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
