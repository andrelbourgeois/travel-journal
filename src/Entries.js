import Card from './Card.js'
import data from "./data.js"

function Entries() {
    const trips = data.map
  (item =>
    {
      return (
        <div className='App'>
            <Card 
              key={item.id}
              item={item}
            />
        </div>
      );
    }
  )
}

export default Entries