import Navbar from "./components/Navbar";
import TotalBar from "./components/TotalBar";
import Cart from "./components/Cart";
import Loading from "./components/Loading";
import {useGlobalContext} from "./context/context";

function App() {
  const { isLoading, products, total } = useGlobalContext();
  if(isLoading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    )
  }
  return (
    <>
      <Navbar />
      {products.length > 0 ? 
      <Cart /> : 
      <div className="d-flex justify-content-center my-5">
        <h4>No products in the cart</h4>
      </div>
      }
      {total > 0 && <TotalBar />}
    </>
  );
}

export default App;
