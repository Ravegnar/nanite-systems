import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import servicesCards from "@/lib/servicesCards"
import Typography from "@/components/Typography/Typography"
import Card from "@/components/Card/Card"
import Count from "@/components/Count/Count"
import Chart from "@/components/Chart/Chart"
import Modal from "@/components/Modal/Modal"
import Loader from "@/components/Loader/Loader"
import StyledButton from "@/components/StyledButton/StyledButton"

import DataTable from "@/components/DataTable/DataTable"

const Services = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [showModal, setShowModal] = useState<boolean>(false)
	const targetRef: any = useRef(null)

	const { t } = useTranslation()

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.unobserve(targetRef.current)
				}
			},
			{
				rootMargin: "0px",
				threshold: 0.5 // minimal percentage of the target's visible area before triggering the callback
			}
		)

		if (targetRef.current) {
			observer.observe(targetRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	const openModal = () => {
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
	}

	return (
		<div className="w-full text-center mx-auto pt-20XXX relative XXX-mt-96">
			<Loader />

			<span className="-mt-24 w-[296px] flex mx-auto p-4">
				<StyledButton name="Show modal" onClick={openModal} />
			</span>
			{showModal && (
				<Modal
					onClose={closeModal}
					textHeader="Lorem, ipsum dolor!"
					textBody="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio earum, officiis beatae nostrum magni soluta culpa similique, labore quis quisquam repudiandae dolor officia ratione magnam. Ratione deserunt vitae eius ipsam!"
				/>
			)}

			<div className="w-[296px] flex flex-col justify-center items-center mt-16 mx-auto p-6 border-4 dark:border-orange-600">
				<StyledButton name="Chevron Right" chevron={false} icon="DarkMode" />
				<StyledButton name="Chevron--Right" chevron={false} icon="Github" />
				<StyledButton name="Chevron Right" icon="Email" revert />
				<StyledButton name="Chevron-Right" chevron={false} index={8} />
				<StyledButton name="Chevron-Right" />
				<StyledButton name="Chevron" chevron={false} center />
			</div>

      <div className="mt-16">
            <DataTable />
      </div>

			<Typography text={t("services.label")} className="mt-10" variant="h3" />
			<div id="title-line" className="w-28 h-1 bg-white mx-auto" />
			<div className="max-w-7xl mx-auto mt-10 px-16 bg-cyan-700 dark:bg-black border-orange-700 pb-48">
				<Typography text={t("services.text")} className="" variant="subtitle1" />
				<div className="grid grid-cols-3 gap-8 mt-10 pt-48">
					{servicesCards.map((card) => (
						<Card key={card.id} id={card.id} name={card.name} text={card.text} icon={card.icon} />
					))}
				</div>
			</div>
			<div ref={targetRef} className="flex justify-center">
				<Count
					start={1963}
					end={2010}
					duration={400}
					text={"Něco"}
					isPlus={true}
					isVisiable={isVisible}
				/>
			</div>
			<div className="h-96 flex justify-center">
				<Chart />
			</div>
			<div className="exp-kurz w-28 h-36 after:content-[''] after:ml-0.5 after:bg-white after:w-20 after:bg-headerBg after:absolute after:h-60 after:text-red-500 hidden">
				asdas
			</div>
			<div className="relative w-96 h-96 bg-orange-600 hidden">
				<svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="a"
							patternUnits="userSpaceOnUse"
							width="8"
							height="8"
							patternTransform="scale(1) rotate(0)"
						>
							<rect x="0" y="0" width="100%" height="100%" fill="hsla(0, 0%, 100%, 0)" />
							<path d="M0 10h20z" strokeWidth={7.5} stroke="hsla(259, 0%, 0%, 0.34)" fill="none" />
						</pattern>
					</defs>
					<rect width="800%" height="800%" transform="translate(-40,-160)" fill="url(#a)" />
				</svg>{" "}
			</div>
		</div>
	)
}

export default Services
