import { useTranslation } from 'react-i18next'
import followUsList from '@/lib/followUsList'
import IFollowUsList from '@/types/FollowUsList@types'
import Typography from '@/components/Typography/Typography'
import Icon from '@/components/Icons/Icon'
import appConfig from '@/config/app.config'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<div id="footer" className="w-full -mt-10">
			<div className="max-w-7xl mx-auto">

				<div id='contact-titles' className="flex">
					<div className="max-w-4xl w-full flex">
						<Typography text={t('contacts.info')} className="text-cyan-500 dark:text-orange-600" variant='h3' />
					</div>
				</div>

				<div className="flex flex-col mt-6">
					<div className="flex max-w-4xl">
						<div className="w-1/2 flex">
							<Icon type="Marker" size={34} className="text-cyan-500 dark:text-orange-600 mt-1 mr-2" />
							<div className="flex flex-col">
								<p className='h-6 flex items-center mt-2'>Velké Hamry 615</p>
								<p className='h-6 flex items-center mt-2'>46845</p>
								<p className='h-6 flex items-center mt-2'>Czech republic</p>
							</div>
						</div>
						<div className="w-1/2 flex flex-col">

							<div className="h-6 flex mr-2 mt-2">
								<div className="group flex items-center">
									<a href={`tel:${appConfig.phone}`}>
										<Icon type="Phone" size={32} className="text-cyan-500 dark:text-orange-600 group-hover:animate-pulse group-hover:scale-125 transform duration-200 ease-in-out mr-2" />
									</a>
									<a
										href={`tel:${(appConfig.phone).replaceAll(" ","")}`}
										className="border-b-2 border-transparent group-hover:border-orange-600 group-hover:border-b-2 px-1"
									>
										{appConfig.phone}
									</a>
								</div>
							</div>

							<div className="h-6 flex items-center mt-2">
								<div className="group flex items-center">
									<a href={`mailto:${appConfig.email}`}>
										<Icon type="Email" size={24} className="text-cyan-500 dark:text-orange-600 group-hover:animate-pulse group-hover:scale-125 transform duration-200 ease-in-out mr-4" />
									</a>
									<a
										href={`mailto:${appConfig.email}`}
										className="border-b-2 border-transparent group-hover:border-orange-600 group-hover:border-b-2 px-1"
									>
										{appConfig.email}
									</a>
								</div>
							</div>

							<div className="h-6 flex items-center mt-2">
								<div className="group flex items-center">
									<a
										href={"https://www." + appConfig.web}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon type="Earth" size={26} className="text-cyan-500 dark:text-orange-600 group-hover:animate-pulse group-hover:scale-125 transform duration-200 ease-in-out mr-[14px]" />
									</a>
									<a
										href={"https://www." + appConfig.web}
										target="_blank"
										rel="noopener noreferrer"
										className="border-b-2 border-transparent group-hover:border-orange-600 group-hover:border-b-2 px-1"
									>
										{appConfig.web}
									</a>
								</div>
							</div>

						</div>
					</div>
					<Typography text={"Follow us"} className="text-center text-cyan-500 dark:text-orange-600 mt-14" variant='h3' />
					<div className="flex gap-2 items-center mx-auto mt-8">
						{followUsList.map((followUs: IFollowUsList) => (
							<a
								key={followUs.type}
								href={followUs.href}
								target="_blank"
								rel="noopener noreferrer"
								className="
									group w-11 h-11 flex items-center justify-center border-4 scale-90 border-cyan-500 rotate-45 mx-2
									hover:bg-cyan-500 hover:scale-110 hover:animate-pulse transform duration-300 ease-in-out
									dark:hover:bg-orange-600 dark:border-orange-600
								"
							>
								<Icon type={followUs.type} size={followUs.size} className="-rotate-45 scale-[0.8] group-hover:scale-[1.2] group-hover:text-black" />
							</a>
						))}
					</div>
				</div>
				<div className="flex justify-center text-center border-t-2 border-zinc-600 py-5 mx-2 mt-10">
					<Typography text={"Copyright ©2023 Design and created by"} variant='subtitle1' />
					<a
						href={"https://www." + appConfig.web}
						target="_blank"
						rel="noopener noreferrer"
						className=""
					>
						<Typography text={"Lukáš Navrátil"} variant='subtitle1' className='text-cyan-500 dark:text-orange-600 hover:text-cyan-700 dark:hover:text-orange-700 hover:underline pl-1' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer