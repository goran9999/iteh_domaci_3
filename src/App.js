import { Navigate, Route, Routes} from 'react-router';
import './App.css';
import BookItemList from './book/BookItemList';
import NavBar from './navbar/NavBar';
import AddBook from './form/AddBook';
const DUMMY_BOOKS=[
  {
    title:'Harry Potter and Prisoner of Askaban',
    description:'Third book of Harry Potter',
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81EbEWM54ML.jpg"
  },
  {
    title:'Harry Potter and Chamber of secrets',
    description:'Second book of Harry Potter',
    imageUrl:"https://cdn.hmv.com/r/w-640/hmv/files/ee/ee0a6931-ce04-4bde-857b-f6e8f5fadc27.jpg"
  },
  {
    title:'Harry Potter and Sorcerer\'s stone',
    description:'First book of Harry Potter',
    imageUrl:"https://i5.walmartimages.com/asr/b6ab96db-027d-44b4-9d55-4a0207d71148.bcb30969d95f6f4c265af10831f0f2d6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  },
  {
    title:'Harry Potter and Half Blood Prince',
    description:'Fifth book of Harry Potter',
    imageUrl:"https://i5.walmartimages.com/asr/b6ab96db-027d-44b4-9d55-4a0207d71148.bcb30969d95f6f4c265af10831f0f2d6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  },

]

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route exact path="/" element={ <Navigate to="/all-books"/>}>
      </Route>
      <Route path='/all-books' element={<BookItemList books={DUMMY_BOOKS}/>}/>
      <Route path="/add-book" element={<AddBook/>}/>
        
      </Routes>
      
    
    </div>
  );
}

export default App;
