import { getData } from "@/services/firebase"
import { useState, useRef, useEffect } from "react"
import StyledButton from "@/components/StyledButton/StyledButton"
import Image from "next/image"

const Operatives = (props: any) => {
	const { data } = props

	return (
		<>
			{Object.entries(data).map(([key, val]: any) => (
				<a key={key} href="#" className="group">
					<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
					<img
						src={val.icon}
						alt=""
						className="h-16 w-16 object-cover object-center group-hover:opacity-75 mx-auto"
					/>
					<h3 className="mt-4 text-sm">{val.name}</h3>
					<p className="mt-1 text-lg font-bold font-orbitron">${val.price}</p>
				</a>
			))}
		</>
	)
}

export default Operatives
