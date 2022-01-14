import { Navigate, Route, Routes} from 'react-router';
import './App.css';
import BookItemList from './components/book/BookItemList';
import NavBar from './components/navbar/NavBar';
import AddBook from './components/form/AddBook';
import { useSelector } from 'react-redux';
import ReadingList from './components/reading/ReadingList';


function App() {

  const books=useSelector(state=>state.books);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route exact path="/" element={ <Navigate to="/all-books"/>}>
      </Route>
      <Route path='/all-books' element={<BookItemList books={books}/>}/>
      <Route path="/add-book" element={<AddBook/>}/>
      <Route path="currently-reading" element={<ReadingList/>}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
