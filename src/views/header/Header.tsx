import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { hydrateRoot } from "react-dom/client"

//const root = hydrateRoot(domNode, reactNode);

const Header = () => {
	const canvas: any = useRef(null)
	const bgImg: any = useRef(null)

	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max)
	}

	useEffect(() => {
		const bgImgSizes = bgImg.current.getBoundingClientRect()
		const ctx = canvas.current.getContext("2d")
		const colors = [
			"blue",
			"red",
			"white",
			"green",
			"yellow",
			"blue",
			"red",
			"white",
			"green",
			"yellow",
			"blue",
			"red",
			"white",
			"green",
			"yellow",
			"black"
		]

		const sqCountW = 15
		const sqSize = bgImgSizes.width / sqCountW
		const sqCountH: any = Math.ceil(bgImgSizes.height / sqSize) + 1

		canvas.current.setAttribute("width", bgImgSizes.width + "px")
		canvas.current.setAttribute("height", bgImgSizes.height + "px")

		for (let i = 0; i < sqCountH; i++) {
			for (let index = 0; index < sqCountW; index++) {
				ctx.fillStyle = colors[getRandomInt(5)]
				//ctx.fillRect(index * sqSize, 100*i, sqSize, sqSize);
			}
		}
	}, [canvas])

	return (
		<header className="w-full text-center">
			<div
				ref={bgImg}
				className="relative w-full h-screen zoom-out-top-left bg-headerBg dark:bg-headerBgDark bg-cover bg-top transform duration-300 ease-in-out"
			>
				<div id="XXX-NS" className="font-bold font-orbitron text-5xl h-full pt-[55vh]">
					Nanite Systems
					<br />
					<span id="XXX-NS" className="text-cyan-500 dark:text-orange-600">
						Corporation
					</span>
				</div>
				<div className="absolute max-w-7xl flex hiddenXX -bottom-64 left-1/2 -translate-x-1/2 h-96 w-full bg-cyan-700 dark:bg-slate-900 mx-auto"></div>
			</div>
			<canvas ref={canvas} width="1px" height="1px" className="absolute top-0 contents"></canvas>
		</header>
	)
}

export default Header
