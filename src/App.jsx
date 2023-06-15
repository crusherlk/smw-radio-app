import { Navbar } from "./layouts/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Home />
      </div>
    </>
  );
}

export default App;
