import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import Welcome from "./component/Welcome";
import books from "./data/horror.json";
import BookList from "./component/BookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome
        name="The best online book-shop"
        subtitle="Connecting Communities through Books"
        slogan="Immerse Yourself in the World of Books."
      />
      <BookList books={books} />

      <MyFooter />
    </div>
  );
}

export default App;
