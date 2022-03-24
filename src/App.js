import { useEffect, useState } from 'react';
import './App.css';
import Element from './components/Element/Element';
import Modal from 'react-modal';
import Header from './components/Header/Header';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function App() {
  const [ele, Setele] = useState([]);
  const [cart, Setc] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const a = p => {
    const b = [...cart, p];
    Setc(b);
  }
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then(data => Setele(data))
  }, []);




  return (
    <div>
      <Header cl={cart} op={openModal}></Header>
      <div className="crd">
        {
          ele.map(e => <Element el={e} key={e.id} fc={a}></Element>)
        }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div>
         {
           cart.map(i=> <h1>{i.name}</h1>)
         }
       </div>
      </Modal>
    </div>
  );
}

export default App;
