import React from "react";
import Modal from "./components/Modal/Modal";
import useModal from "./components/Modal/useModal";

const App = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className="App">
      <h1>Modals in React!</h1>
      <button onClick={openModal}>Open</button>
        {open ? (
          <Modal
            close={closeModal}
            type='alert'
            //subtype='success'
            subtype='warning'
            //render={() => <h1>This is a Modal using Portals!</h1>}
            render={() => null}
          />  
        ) : null}
    </div>
  );
};

    export default App;