import { useState } from 'react';
import * as C from './global.styles';
import { PhotoItem } from './components/PhotoItem';
import { Modal } from './components/Modal';
import { photoList } from './data/photoList';

const App = () => {
  const[showModal, setShowModal] = useState(false);
  const[imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <C.Container>
      <h1>Fotos diversas</h1>

      <C.Section>
      {photoList.map((item) => (
        <PhotoItem 
          key={item.id}
          photo={item}
          onClick={() => openModal(item.id)}
        />
      ))}
      </C.Section>   

      {showModal &&
      <Modal image={imageOfModal} closeModal={closeModal} />
      }   
    </C.Container>
  );
}

export default App;
