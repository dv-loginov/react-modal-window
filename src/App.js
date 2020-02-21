import React from "react";
import Modal from "./components/Modal/Modal";
import useModal from "./components/Modal/useModal";
import Picture from "./components/Picture/Picture";

const App = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className="App">
      <h1>Modals in React!</h1>
      <button onClick={openModal}>Open</button>
        {open ? (
          <Modal
            close={closeModal}
            render={() =>
              <>            
               <Picture name={'test'}/>
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