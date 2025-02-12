import { useTranslation } from "react-i18next"
import Typography from "@/components/Typography/Typography"

const ContactForm = () => {
	const { t } = useTranslation()

	//<form action="/send-data-here" method="post" className="flex flex-col">

	return (
		<form className="w-full h-full flex flex-col justify-center p-8">
			<Typography text={t("contacts.title")} className="dark:text-orange-600-XXX" variant="h3" />
			<input
				className="p-3 bg-zinc-900 border-0 border-b border-gray-600 mt-8"
				type="text"
				placeholder="Name"
				id="name"
				name="name"
			/>
			<input
				className="p-3 bg-zinc-900 border-0 border-b border-gray-600 mt-6"
				type="text"
				placeholder="Phone"
				id="name"
				name="name"
			/>
			<input
				className="p-3 bg-zinc-900 border-0 border-b border-gray-600 mt-6"
				type="text"
				placeholder="Email"
				id="email"
				name="email"
			/>
			<textarea
				className="p-3 h-28 max-h-36 bg-zinc-900 border-0 border-b border-gray-600 mt-6 overflow-hidden"
				placeholder="Message"
				id="text"
				name="text"
			/>
			<button className="p-3 bg-cyan-500 dark:bg-orange-600 text-black font-bold mt-8" type="submit">
				Send message
			</button>
			<button
				className="striped flex items-center justify-center border-4 border-cyan-500 dark:border-orange-600 hover:bg-cyan-500 dark:hover:bg-orange-600 hover:animate-pulse transform duration-300 ease-in-out p-3 mt-3"
				type="submit"
			>
				Send message
			</button>
		</form>
	)
}

export default ContactForm
