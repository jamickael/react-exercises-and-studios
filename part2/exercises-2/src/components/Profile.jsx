import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

let listItem = oceans.map(ocean => 
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <h1>{ocean.name}</h1>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <ol>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ol>
      <Button />
   </div>
)

function Profile()
{
   return(
      <>
         <ul>
            {listItem}
         </ul>
      </>  
   );
}

export default Profile;