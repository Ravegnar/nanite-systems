interface IconTypes {
  type: "Book" | "Earth" | "Facebook" | "Twitter" | "Instagram" | "Phone" | "Github" | "Email" | "LinkedIn"
  className?: string
  size?: number
}

const Icon = (props: IconTypes) => {
  const { type, className, size } = props

  let path: JSX.Element = <path></path>;
  let viewBox: string = "0 0 24 24";

  switch (type) {
    case "Book":
      path = <path d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z" />
      break
    case "Earth":
      viewBox = "-63 65 128 128"
      path = <path d="M4.8,189.6c33.5-2,59-30.9,56.8-64.4c-2-33.5-30.9-59-64.4-56.8c-33.5,2-59,30.9-56.8,64.4 C-57.6,166.2-28.7,191.6,4.8,189.6z M-12.6,116.5c-1.7-3.3,3.1-5.1,5.6-7.6c3.1-3.3,9.8-8.7,9-10.7C1.2,96-5.6,90-9.3,91.4 c-0.8,0-5.1,4.8-6.1,5.6c0-1.7-0.3-2.6-0.3-4.2c0-1.1-2.2-2-2-2.8c0.2-1.9,4.8-5.4,5.9-6.8c-0.9-0.6-4-2.8-4.8-2.5 c-2,1.1-4.5,1.9-6.7,2.8c0-0.8-0.2-1.6-0.3-2c4.2-2.2,8.7-3.7,13.4-4.8l4.2,1.6l3.1,3.3l3.1,2.9c0,0,1.9,0.8,2.6,0.8 c0.9-0.2,3.9-4,3.9-4l-1.2-2.9l-0.2-2.6c8.4,0.8,16.1,3.3,23.1,7.6c-1.1,0.2-2.6,0.3-4,0.8c-0.6-0.3-3.9,0.3-3.7,1.7 c0.2,1.1,5.9,5.7,8.4,9.8c2.5,4.2,9.5,6.8,10.7,11.5c1.2,5.4-0.8,12.4,0.2,18.9c0.9,6.4,7.9,13,7.9,13s3.1,0.9,5.6,0.3 c-1.9,9.5-6.1,18.2-12.6,25.6c-7.3,8.2-16.5,14-26.9,16.5c1.2-3.7,3.7-7.3,6.1-9.3c2-1.9,4.5-5.1,5.4-7.6c0.9-2.6,2.2-4.8,3.7-7.3 c1.9-3.3-5.7-7.9-8.2-8.7c-5.6-2-9.8-4.8-14.6-7.9c-3.6-2.2-14.3,2.8-18.3,1.2c-5.4-2-7.3-3.7-12.1-6.8c-5-3.3-3.6-10.2-3.9-15.4 c3.7,0,8.8-1.6,11.5,1.2c0.8,0.9,3.7,4.8,5.4,3.3C-9.2,122.3-12,117.6-12.6,116.5z M-42.4,97.4c0.3,2.6,1.7,4.7,1.7,6.5 c0,7.3-0.6,11.6,4,17.4c1.9,2.2,2.5,5.6,3.3,8.4c0.9,2.6,4,3.9,6.4,5.4c4.5,2.9,8.8,6.7,13.7,9.3c3.1,1.7,5,2.6,4.5,6.4 c-0.6,2.9-0.6,4.8-2,7.6c-0.3,0.9,2.2,5.9,2.9,6.5c2.5,2,4.8,4,7.5,5.9c4,2.9,0,7.3-1.6,11.8c-11.8-0.8-23.1-5.4-32.3-13.4 c-10.7-9.5-17.1-22.7-18-36.8C-53.3,119.5-50.2,107.5-42.4,97.4z"></path>
      break
    case "Facebook":
      viewBox = "0 0 1920 1920"
      path = <path d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058" />
      break
    case "Twitter":
      viewBox = "0 0 32 32"
      path = <path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"/>
      break
    case "Instagram":
      viewBox = "0 0 32 32"
      path = <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
      break
    case "Github":
      viewBox = "0 0 1920 1920"
      path = <path d="M1821.63 637.76c0-130.027-43.627-236.373-116.054-319.68 11.627-30.187 50.347-151.36-11.2-315.307 0 0-94.72-32-310.4 122.134-90.133-26.454-186.773-39.68-282.773-40.107-96 .427-192.64 13.653-282.667 40.107C602.749-29.227 507.923 2.773 507.923 2.773c-61.547 163.947-22.72 285.12-11.094 315.307-72.32 83.307-116.266 189.653-116.266 319.68 0 456.533 263.68 558.72 514.453 588.8 0 0-180.267 111.68-180.267 299.413-64.32 30.507-336.533 123.947-437.333-58.133 0 0-59.627-114.347-173.013-122.773 0 0-110.294-1.494-7.787 72.426 0 0 74.027 36.694 125.44 174.294 0 0 57.173 289.92 489.067 159.68 4.373 2.24 1.6 140.266 1.6 168.533h777.173s1.28-277.013 1.28-365.12c0-216.64-144.64-292.48-185.28-329.28 251.627-29.44 515.733-130.133 515.733-587.84" />
      break;
    case "Phone":
      viewBox = "0 0 32 32"
      path = <path d="M21.999 4h-12c-1.104 0-1.999 0.896-1.999 2v20c0 1.104 0.895 2 1.999 2h12c1.105 0 2.001-0.896 2.001-2v-20c0-1.104-0.896-2-2.001-2zM13 5h5l0.062 1h-5.062v-1zM15.979 26.5c-0.552 0-1-0.447-1-1s0.448-1 1-1c0.553 0 1 0.447 1 1s-0.448 1-1 1zM21.999 23h-12l0.021-16h11.979v16z"></path>
      break;
    case "Email":
      viewBox = "0 0 512 512"
      path = <path d="M0,64v384h512V64H0z M264.132,266.765c-1.996,1.688-4.95,2.657-8.1,2.657c-3.153,0-6.098-0.964-8.083-2.642
      L48,112h416L264.132,266.765z M95.11,194.306l69.518,58.954L48,368V160L95.11,194.306z M199.288,282.652l16.35,13.866
      c10.836,9.215,25.169,14.288,40.361,14.288c15.236,0,29.588-5.071,40.418-14.282l16.321-13.846L432,400H80L199.288,282.652z
       M347.394,253.282L464,160v208L347.394,253.282z"/>
      break
    case "LinkedIn":
      viewBox = "0 0 1920 1920"
      path = <path d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z" />
      break
  }

  return (
    <svg
      fill="currentColor"
      className={className}
      height={size || 36}
      width={size || 36}
      viewBox={viewBox}
    >
      {path}
    </svg>
  )
}

export default Icon
