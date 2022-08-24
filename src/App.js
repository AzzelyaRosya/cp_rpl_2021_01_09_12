import Navbar from "./components/Navbar/index";
import Home from "./pages/Homepages/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Navbar />
      <Home />
      {/* <main>Main Content</main> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
