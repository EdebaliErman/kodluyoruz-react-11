
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Container from './conponents/Container';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
