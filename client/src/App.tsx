import Header from "./components/Header/Header";
import ProductsComponent from "./components/MainContent/MainContent";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./styles/index.scss";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="page-wrapper">
        <Sidebar />
        <ProductsComponent />
      </div>
    </div>
  );
}

export default App;
