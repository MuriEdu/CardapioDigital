import { useState } from 'react';
import './App.css'
import Card from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { FoodData } from './interfaces/FoodData';
import CreateModal from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return(
    <div className='container'>
      <h1>Digital Menu</h1>
      <div className='card-grid'>
        {data?.map(foodData => 
          <Card 
            title={foodData.title} 
            image={foodData.image} 
            price={foodData.price}
          />
        )}
      </div>
      {isModalOpen && <CreateModal handleOpenModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App
