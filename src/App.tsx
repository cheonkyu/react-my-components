import './App.css';
import Navigation from './components/Navigation';
function App() {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div className="App">
      <Navigation 
        menuItems={menuItems} 
        hoverColor="text-blue-500" 
        focusColor="text-blue-700" 
      />
    </div>
  );
}

export default App;
