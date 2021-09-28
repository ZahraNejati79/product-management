import "./App.css";
import ProductManagement from "./Components/ProductManagement/ProductManagement";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Product management</h1>
        <ProductManagement />
      </div>
    </div>
  );
};

export default App;
