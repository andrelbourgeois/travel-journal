import Card from './Card.js'
import data from "./data.js"

function Entries() {
    const trips = data.map(item => {
      return (
        <Card 
            key={item.id}
            item={item}
        />
      );
    }
  );
}

export default Entries;