import React from "react";
import Modal from "./components/Modal/Modal";
import useModal from "./components/Modal/useModal";
import Picture from "./components/Picture/Picture";

const App = () => {
  const { open, openModal, closeModal, id } = useModal();

  return (
    <div className="App">
      <h1>Modals in React!</h1>
      <button id='question' onClick={openModal}>Question</button>
      <button id='success' onClick={openModal}>Success</button>
      <button id='error' onClick={openModal}>Error</button>
      <button id='info' onClick={openModal}>Info</button>
      <button id='warning' onClick={openModal}>Warning</button> 
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