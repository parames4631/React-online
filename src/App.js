import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
function App() {
  return (
    <>
      <Logo />
      <Header />
      <Footer title="TNI" website="www.google.com" address="Bangkok" 
      postcode={10220} isOpen></Footer>
    </>
  );
}

export default App;
