import Typography from "@/components/Typography/Typography"
import Icon from "@/components/Icons/Icon"
import { useTranslation } from "react-i18next"
import Modal from "@/components/Modal/Modal"
import { useState, useRef, useEffect } from "react"
import Title from "@/components/Title/Title"

export const Menu = () => {
	const [showModal, setShowModal] = useState<boolean>(false)

	const openModal = () => {
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
	}

	return (
		<>
			<Title text="Menu" titleOffset={60} direction={["down", "left"]}>
				<button className="p-2" onClick={openModal}>
					<Icon
						type="Menu"
						size={30}
						className="text-white transition-all transform duration-100 ease-in hover:scale-125"
					/>
				</button>
			</Title>
			{showModal && (
				<Modal
					onClose={closeModal}
					textHeader="Menu"
					textBody="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio earum, officiis beatae nostrum magni soluta culpa similique, labore quis quisquam repudiandae dolor officia ratione magnam. Ratione deserunt vitae eius ipsam!"
				/>
			)}
		</>
	)
}

export default Menu
