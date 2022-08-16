import Footer from './pages/Footer/index';

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
      <nav>Navbar</nav>
      <main>Main Content</main>
      <Footer />
    </div>
  );
}

export default App;
