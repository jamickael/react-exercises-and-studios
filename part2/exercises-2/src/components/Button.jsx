import './styles.css';

function Button() {

   function onLearnMore () {
      alert("Just Keep Swimming!")
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;