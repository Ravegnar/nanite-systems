import ITypographyProps from "@/types/Typography@types"

const Typography = (props: ITypographyProps) => {
	const {
		text,
		uppercase = false,
		variant = "body1",
		background = "",
		className = "",
		fitContent = false
	} = props

	const isUppercase = uppercase ? "uppercase" : "normal-case"
	const isFitContent = fitContent ? "mx-auto w-fitContent" : ""

	// font types
	const h1 = "text-5xl laptop:text-6xl desktop:text-8xl font-light"
	const h2 = "text-4xl laptop:text-5xl desktop:text-6xl font-light"
	const h3 = "text-3xl laptop:text-4xl desktop:text-5xl font-normal"
	const h4 = "text-2xl laptop:text-3xl desktop:text-4xl font-normal"
	const h5 = "text-lg laptop:text-2xl desktop:text-3xl font-normal"
	const h6 = "text-md desktop:text-xl font-medium"
	const subtitle1 = "text-sm tablet:text-base font-normal" // TODO: Responsive
	const subtitle2 = "text-sm font-normal" // TODO: Responsive
	const subtitle3 = "text-xs" // TODO: Responsive
	const body1 = "text-sm desktop:text-base font-normal"
	const body2 = "text-sm font-normal" // TODO: Responsive
	const span = "italic font-serif text-sm" // TODO: Responsive
	const strong = "text-md font-bold" // TODO Responsive
	const custom = ""

	const getVariant = (): string => {
		switch (variant) {
			case "h1":
				return h1
			case "h2":
				return h2
			case "h3":
				return h3
			case "h4":
				return h4
			case "h5":
				return h5
			case "h6":
				return h6
			case "subtitle1":
				return subtitle1
			case "subtitle2":
				return subtitle2
			case "subtitle3":
				return subtitle3
			case "body1":
				return body1
			case "body2":
				return body2
			case "span":
				return span
			case "strong":
				return strong
			case "custom":
				return custom
		}
	}

	return (
		<div
			className={`
        ${getVariant()}
        ${isUppercase}
        ${background}
        ${className}
        ${isFitContent}
      `}
		>
			{text}
		</div>
	)
}

export default Typography
