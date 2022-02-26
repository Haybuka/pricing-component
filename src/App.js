import Card from './Card';
import './App.css';

function App() {
  const pricing = [
    {
      type : 'Basic',
      amount : 19.99,
      details : [
        {storage : '50 GB' },
        {users : 2},
        {send : "3 GB"}
      ]
    },
    {
      type : 'Professional',
      amount : 24.99,
      details : [
        {storage : '1 TB' },
        {users : 5},
        {send : "10 GB"}
      ]
    },
    {
      type : 'Master',
      amount : 39.99,
      details : [
        {storage : '2 TB' },
        {users : 10},
        {send : "20 GB"}
      ]
    }
  ]
  return (
    <main className="App lg:h-screen lg:w-screen">
        <section className='my-10'>
           <h1 className='text-center text-2xl font-bold text-secondary-400'>Our Pricing</h1>
           <div className='flex justify-center items-center my-4 text-secondary-400'>
              <p>Annually</p>
              <label className='switch mx-6'>
                <input type="checkbox" autoFocus/>
                <span className='bg-secondary-500'></span>
              </label>
              <p>Monthly</p>
           </div>
        </section>
        <div className='flex-col flex justify-center items-center lg:flex-row'>
            {pricing.map(price => (
              <Card {...price}/>
            ))}
        </div> 
    </main>
  );
}

export default App;
