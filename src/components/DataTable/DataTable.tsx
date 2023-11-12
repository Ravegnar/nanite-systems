import { getData } from "@/services/firebase"
import { useState, useRef, useEffect } from "react"
import StyledButton from "@/components/StyledButton/StyledButton"
import Operatives from "./Operatives"
import Items from "./Items"

interface ISearchSet {
	name?: string
	order: "price" | "name"
	direction: "asc" | "desc"
	page: number
	limitCount: number
	count: number | null
}
const defaultSearchSet: ISearchSet = {
	name: undefined,
	order: "price",
	direction: "asc",
	page: 1,
	limitCount: 6,
	count: null
}
const productList: any = {
	Operatives: Operatives,
	Weapons: Items,
	Equipment: Items,
	Tools: Items
}
const orderBy: { [key in ISearchSet["order"]]: { name: string } } = {
	price: { name: "ceny" },
	name: { name: "názvu" }
}

let currentSearchSet: ISearchSet = { ...defaultSearchSet }
let pagesCount: any

const DataTable = () => {
	const [searchSet, setSearchSet] = useState<ISearchSet>({ ...defaultSearchSet })
	const [data, setData] = useState<any>(null)
	const [loading, setLoading] = useState(false)

	const ActiveComponent = searchSet?.name ? productList[searchSet.name] : null

	const getProducts = async (options: ISearchSet) => {
		currentSearchSet = options
		setLoading(true)
		setSearchSet({ ...currentSearchSet })

		const { result, error, totalPages } = await getData(options)

		if (result) {
			pagesCount = totalPages
			setLoading(false)
			setData(result)
		}
	}

	return (
		<>
			<div className="mx-auto bg-cyan-600 dark:bg-slate-900 max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="flex justify-center">
					{Object.keys(productList).map((type) => {
						const isActive = searchSet.name === type

						return (
							<StyledButton
								key={type}
								name={type}
								size="w-[164px]"
								classses="mx-2"
								onClick={() => (isActive ? null : getProducts({ ...defaultSearchSet, name: type }))}
							/>
						)
					})}
				</div>

				<div className="flex justify-center">
					{currentSearchSet?.name && Object.keys(orderBy).map((order) => {
						const isActive = searchSet.order === order
						const direction = isActive ? (searchSet.direction === "asc" ? "desc" : "asc") : "asc"

						return (
							<StyledButton
								key={order}
								name={order}
								chevron={false}
								size="w-[124px]"
								center
								classses="mx-2"
								onClick={() =>
									getProducts({
										...currentSearchSet,
										order: order as ISearchSet["order"],
										direction: direction,
										page: 1
									})
								}
							/>
						)
					})}
				</div>

				<h2 className="sr-only">Products</h2>
				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4X xl:gap-x-8 mt-8">
					{loading ? <div>Loading</div> : ActiveComponent && <ActiveComponent data={data} />}
				</div>

				<div className="flex justify-center mt-8">
					{currentSearchSet?.name && ["prev", "next"].map((type: any) => {
						const isDisabled: { [key: string]: boolean } = {
							prev: currentSearchSet.page === 1,
							next: currentSearchSet.page === pagesCount
						}

						return (
							<StyledButton
								key={type}
								name={type}
								chevron={false}
								size="w-[124px]"
								center
								isDisabled={isDisabled[type]}
								classses={`${isDisabled[type] ? "invisible" : ""} mx-2`}
								onClick={() =>
									getProducts({
										...currentSearchSet,
										page: currentSearchSet.page + (type === "next" ? +1 : -1)
									})
								}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default DataTable
