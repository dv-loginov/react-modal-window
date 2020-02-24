import React from "react";
import Modal from "./components/Modal/Modal";
import useModal from "./components/Modal/useModal";
import Picture from "./components/Picture/Picture";
import Button from "./components/Button/Button"
const App = () => {
  const { open, openModal, closeModal, id } = useModal();

  return (
    <div className="App">
      <h1>Modals in React!</h1>
      <Button id='question' onClick={openModal}>Question</Button>
      <Button id='success' onClick={openModal}>Success</Button>
      <Button id='error' onClick={openModal}>Error</Button>
      <Button id='info' onClick={openModal}>Info</Button>
      <Button id='warning' onClick={openModal}>Warning</Button> 
        {open ? (
          <Modal
            close={closeModal}
            render={() =>
              <>            
               <Picture 
                  name={id}
                  width={125}
                  height={125}  
                  />
              <h1>Сообщение</h1>
              <h3>еще текст</h3>
              </>
            }
          />  
        ) : null}
    </div>
  );
};

    export default App;