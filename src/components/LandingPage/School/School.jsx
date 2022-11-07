// import React, {useState, useEffect} from "react";
// import "./School.css"

// function School() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     fetch("https://virtualschools.herokuapp.com/schools")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div className="contain" id="schools">
//        <ul>
//         {items.map(item => (

//           <li key={item.id}>
//              <img src={item.image_url} className="card-img-top" alt="event"/>  
//             {item.name}          
//           </li>
//         ))}
//       </ul>
//       </div>
//     );
//   }
// }
// export default School

