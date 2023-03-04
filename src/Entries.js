import Card from './Card.js'
import Card2 from './Card2.js'
import data from "./data.js"

function Entries() {
    const travels = data.map(item => {
      return (
        <Card  
            key={item.id}
            item={item}
        />
      );
    }
  );

  return (
    <div className='Entries'>
      {travels}
    </div>
  )
}


export default Entries;


/*

function Entries() {
      return (
        <Card2/>
      );
}

*/