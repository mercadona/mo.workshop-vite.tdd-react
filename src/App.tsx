import products from "./products.json";
import Display from "./components/Display";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";

const NO_ERROR = false;

const App = () => {
  const error = NO_ERROR;

  return (
    <div className="app">
      <Display />
      <div className="controls">
        <div className="products">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
        <Sidebar />
      </div>
      {error && <div className="error">Error</div>}
    </div>
  );
};

export default App;
