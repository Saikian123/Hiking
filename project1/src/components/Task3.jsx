
import './Task3.css'
const Task3 = () => {
    // Hardcoded array of items
    const items = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
      { id: 4, name: 'Date' },
      { id: 5, name: 'Elderberry' },
      { id: 6, name: 'Fig' },
      { id: 7, name: 'Grape' },
      { id: 8, name: 'Honeydew' },
      { id: 9, name: 'Indian Fig' },
      { id: 10, name: 'Jackfruit' },
      { id: 11, name: 'Kiwi' },
      { id: 12, name: 'Lemon' },
      { id: 13, name: 'Mango' },
      { id: 14, name: 'Nectarine' },
      { id: 15, name: 'Orange' },
      { id: 16, name: 'Papaya' },
      { id: 17, name: 'Quince' },
      { id: 18, name: 'Raspberry' },
      { id: 19, name: 'Strawberry' },
      { id: 20, name: 'Tangerine' },
      { id: 21, name: 'Ugli Fruit' },
      { id: 22, name: 'Vanilla Bean' },
      { id: 23, name: 'Watermelon' },
      { id: 24, name: 'Xigua' },
      { id: 25, name: 'Yellow Passion Fruit' },
      { id: 26, name: 'Zucchini' },
      { id: 27, name: 'Blueberry' },
      { id: 28, name: 'Cantaloupe' },
      { id: 29, name: 'Dragonfruit' },
      { id: 30, name: 'Eggfruit' },
      { id: 31, name: 'Feijoa' },
      { id: 32, name: 'Gooseberry' },
      { id: 33, name: 'Huckleberry' },
      { id: 34, name: 'Imbu' },
      { id: 35, name: 'Jambul' },
      { id: 36, name: 'Kumquat' },
      { id: 37, name: 'Lime' },
      { id: 38, name: 'Mulberry' },
      { id: 39, name: 'Nance' },
      { id: 40, name: 'Olive' },
      { id: 41, name: 'Pineapple' },
      { id: 42, name: 'Quandong' },
      { id: 43, name: 'Rambutan' },
      { id: 44, name: 'Soursop' },
      { id: 45, name: 'Tomato' },
      { id: 46, name: 'Uva' },
      { id: 47, name: 'Voavanga' },
      { id: 48, name: 'Wolfberry' },
      { id: 49, name: 'Ximenia' },
      { id: 50, name: 'Yamamomo' },
      { id: 51, name: 'Zapote' },
      { id: 52, name: 'Apricot' },
      { id: 53, name: 'Blackberry' },
      { id: 54, name: 'Coconut' },
      { id: 55, name: 'Damson' },
      { id: 56, name: 'Ethiopian Banana' },
      { id: 57, name: 'Finger Lime' },
      { id: 58, name: 'Guava' },
      { id: 59, name: 'Horned Melon' },
      { id: 60, name: 'Ilama' },
      { id: 61, name: 'Jujube' },
      { id: 62, name: 'Kiwano' },
      { id: 63, name: 'Lychee' },
      { id: 64, name: 'Mandarin' },
      { id: 65, name: 'Noni' },
      { id: 66, name: 'Pomegranate' },
      { id: 67, name: 'Rose Apple' },
      { id: 68, name: 'Surinam Cherry' },
      { id: 69, name: 'Tamarind' },
      { id: 70, name: 'Umbu' },
      { id: 71, name: 'Voa Vanga' },
      { id: 72, name: 'White Sapote' },
      { id: 73, name: 'Xango' },
      { id: 74, name: 'Yumberry' },
      { id: 75, name: 'Zabaglione Grape' },
      { id: 76, name: 'Acerola' },
      { id: 77, name: 'Breadfruit' },
      { id: 78, name: 'Cupuacu' },
      { id: 79, name: 'Durian' },
      { id: 80, name: 'Elderberry' },
      { id: 81, name: 'Fig' },
      { id: 82, name: 'Gac' },
      { id: 83, name: 'Highbush Blueberry' },
      { id: 84, name: 'Ita Palm' },
      { id: 85, name: 'Jabuticaba' },
      { id: 86, name: 'Kabosu' },
      { id: 87, name: 'Longan' },
      { id: 88, name: 'Mammee Apple' },
      { id: 89, name: 'Nectarlight' },
      { id: 90, name: 'Oca' },
      { id: 91, name: 'Peach' },
      { id: 92, name: 'Plum' },
      { id: 93, name: 'Salak' },
      { id: 94, name: 'Tamarillo' },
      { id: 95, name: 'Ulluco' },
      { id: 96, name: 'Vanilla Pod' },
      { id: 97, name: 'Wax Jambu' },
      { id: 98, name: 'Xerophytic Pear' },
      { id: 99, name: 'Yangmei' },
      { id: 100, name: 'Zebra Melon' }
  ];
  
  
  
  //   return (
  //     <div className="task3container">
  //       <h1>Item List</h1>
  //       <ul className="list">
  //         {items.map((item) => (
  //           <li key={item.id} className="listItem">
  //             {item.name}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };

return(
  <ul>
    {
      items.map((item)=>{
        <li key={item.idss}>{item.name}</li>
      })
    }
  </ul>
)
}
  
  
  
  export default Task3;


//   import Task3 from "./components/Task3";

// function App(){
// return(
//   <>
//   <Task3/>;
//   </>
// )
// }
// export default App;
  