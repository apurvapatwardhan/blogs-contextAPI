import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import "./App.css"

export default function App() {
  
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
