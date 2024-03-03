import { useState, useRef, useEffect } from "react"
import { useRive, Layout, Fit, Alignment, useStateMachineInput, EventType, RiveEventType } from "@rive-app/react-canvas";

export const RiveDemo = () => {
  const { rive, RiveComponent } = useRive({
    src: "Archer.riv",
    artboard: "Archer",
    stateMachines: "Archer",
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, Cover, FitWidth
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });
  
  const shoot = useStateMachineInput(
	rive,
	"Archer",
	'Shoot'
)
	const run = useStateMachineInput(
	rive,
	"Archer",
	'Run'
	)

  return (<>
   	<RiveComponent />
	<button type="button" className="px-2" onClick={() => run && (run.value = !run.value)}>Run</button>
	<button type="button" className="px-2" onClick={() => shoot && shoot.fire()}>Shoot</button>
   </>)
  
};


interface IButtonLinkProps {
	name?: string
	index?: number
	onClick?: any
	linerPosition?: any
}

const Loader = ({}: IButtonLinkProps) => {
	const [start, setStart] = useState<boolean>(false)

	const buttonRef: any = useRef(null)
	const c: any = useRef(null)

	const setElement = (element: any, types: string, values: string, timeout: number = 0) => {
		let typesData: string[] = types.split(",")
		let valuesData: string[] = values.split(",")

		if (element.current) {
			element = element.current
		}

		setTimeout(() => {
			typesData.map((type: string, index) => {
				element.style[type] = valuesData[index]
			})
		}, timeout)
	}

	useEffect(() => {
		if (!start) {
			return
		}

		setTimeout(() => {
			buttonRef.current.classList.replace("bg-opacity-40", "bg-opacity-0")
		}, 600)
	}, [start])

	useEffect(() => {
		if (!c.current) {
			return
		}

		const ctx = c.current.getContext("2d")
		ctx.beginPath()
		ctx.arc(150, 75, 50, 0, 0.4 * Math.PI)
		ctx.stroke()
	}, [c])

	return (
		<>
			<div className="relative w-auto container mx-auto -mt-[100px] mb-36 h-[520px]">
				<RiveDemo />
			</div>

			<div className="relative w-96 h-96 bg-green-900xx mx-auto XXX hidden">
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[0deg]"></div>
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[90deg]"></div>
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[45deg]"></div>
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[135deg]"></div>
			</div>
			<div className="relative w-96 h-96 bg-green-900xx mx-auto hidden">
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[67.5deg]"></div>
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[22.5deg]"></div>
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[-22.5deg]"></div>
				<div className="absolute w-[34%] h-1/2x h-[90%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-teal-500 mx-auto rotate-[-67.5deg]"></div>
			</div>

			<div className="w-full flexxx justify-center -mt-[11rem]xxx bg-black p-8 hidden">
				<div className="w-96 h-96 border-y-8 rounded-full animate-spinxx">s</div>
			</div>
			<div className="quarter hidden"></div>
			<div className="w-full flex justify-center -mt-[11rem] bg-black p-8 hidden">
				<div className="w-96 h-96 module">s</div>
			</div>
			<canvas
				id="myCanvas"
				ref={c}
				className="border-l border-orange-600 hidden"
				width="300"
				height="150"
			></canvas>
		</>
	)
}

export default Loader
