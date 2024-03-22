import './App.css';
import product from './product';
// import Card from './Components/Card';
import Checkpoint from './Component/Card';


function App() {
  const firstName = prompt('Enter your First Name');
  return (

    <div className='card'>
      <Checkpoint/>

      <div className='card'>
          <h2 className='first'>Hello {firstName ? firstName : 'there'}!!!</h2>
          {firstName && <img src={product.image} alt="Product" />}
      </div>

    </div>


  );
}
export default App;