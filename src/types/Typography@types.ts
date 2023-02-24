interface ITypographyProps {
  text?: string | null
  parserHtml?: string
  uppercase?: boolean
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'body1'
    | 'body2'
    | 'span'
    | 'strong'
    | 'custom'
  background?: string
  className?: string
  fitContent?: boolean
}

export default ITypographyProps

//XXX