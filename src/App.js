import Navbar from './components/Navbar/index';
import Products from './pages/Products/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
