import Header from './Header.js'
import Card from './Card.js'
import './App.css';

function App() {
  const trips = data.map
  (item =>
    {
      return (
        <div className='App'>
            <Header />
            <Card 
              key={item.id}
              item={item}
            />
        </div>
      );
    }
  )
}

export default App;
