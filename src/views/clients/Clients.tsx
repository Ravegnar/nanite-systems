import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import Typography from "@/components/Typography/Typography"
import logoList from "@/lib/logoList"
import LogosList from "@/components/LogosList/LogosList"
import ILogos from "@/types/Logos@types"
import { Autoplay } from "swiper"

const Clients = () => {
	const { t } = useTranslation()

	return (
		<div id="clients" className="w-full text-center mx-auto pt-20">
			<Typography text={t("clients.label")} className="" variant="h3" />
			<div id="title-line" className="w-28 h-1 bg-white mx-auto" />
			<div className="max-w-7xl mx-auto mt-10">
				<Swiper
					breakpoints={{
						10: {
							slidesPerView: 2
						},
						500: {
							slidesPerView: 3
						},
						900: {
							slidesPerView: 4
						},
						1400: {
							slidesPerView: 5
						}
					}}
					slidesPerView={3}
					spaceBetween={3}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false
					}}
					modules={[Autoplay]}
					className="cursor-pointer"
				>
					{logoList.map((logo: ILogos) => (
						<SwiperSlide key={logo.key}>
							<LogosList {...logo} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<p>my skill</p>
			<p>resume</p>
			<p>my portfolio</p>
		</div>
	)
}

export default Clients
