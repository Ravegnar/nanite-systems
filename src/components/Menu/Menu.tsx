import Typography from "@/components/Typography/Typography";
import Icon from "@/components/Icons/Icon";
import { useTranslation } from "react-i18next";
import Modal from '@/components/Modal/Modal'
import { useState, useRef, useEffect } from "react";

export const Menu = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>
        <Icon
          type="Menu"
          size={30}
          className="text-white transition-all transform duration-1000 ease-in mb-1"
        />
      </button>
      {showModal && (
        <Modal
          onClose={closeModal}
          textHeader="Lorem, ipsum dolor!"
          textBody="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio earum, officiis beatae nostrum magni soluta culpa similique, labore quis quisquam repudiandae dolor officia ratione magnam. Ratione deserunt vitae eius ipsam!"
        />
      )}
    </>
  );
};

export default Menu;
