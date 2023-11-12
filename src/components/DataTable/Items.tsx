import { getData } from "@/services/firebase"
import { useState, useRef, useEffect } from "react"
import StyledButton from "@/components/StyledButton/StyledButton"
import Image from "next/image"

const Items = (props: any) => {
	const { data } = props

	return (
		<>
			{data.map((n: any) => (
				<a key={n.id} href="#" className="group">
					<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
					<h3 className="mt-4 text-sm">{n.name}</h3>
					<p className="mt-1 text-lg font-bold font-orbitron">${n.price}</p>
				</a>
			))}
		</>
	)
}

export default Items