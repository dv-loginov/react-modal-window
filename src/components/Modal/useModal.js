import { useState } from "react";

    const useModal = () => {
        const [open, onOpenModal] = useState(false);
        const [close, onCloseModal] = useState(false);
        const [id, onId]=useState(null)

        const openModal = (e) => {
            onOpenModal(true)
            onId(e.target.id);
        };

        const closeModal = () => {
            onCloseModal(true);
            onOpenModal(false);
            onId(null);
        };

        return { open, close, openModal, closeModal, id};
    };

    export default useModal;