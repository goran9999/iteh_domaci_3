import { Navigate, Route, Routes} from 'react-router';
import './App.css';
import BookItemList from './book/BookItemList';
import NavBar from './navbar/NavBar';
import AddBook from './form/AddBook';
import { useSelector } from 'react-redux';


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
        
      </Routes>
      
    
    </div>
  );
}

export default App;
