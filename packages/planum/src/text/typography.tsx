import { css, styled } from '../theme'

export const commonCss = css({
  fontFamily: '$sans',

  variants: {
    fw: {
      regular: {
        fw: '$regular',
      },
      medium: {
        fw: '$medium',
      },
      semibold: {
        fw: '$semibold',
      },
      bold: {
        fw: '$bold',
      },
    },
  },

  // TODO: reponsive font sizes
  //   "@bp2": {
  //     fontSize: "$lg",
  //     lineHeight: "$sm",
  //   },
})

export const h1Css = css(commonCss, {
  fontSize: '$xl',
  lineHeight: '$xs',
})

export const h2Css = css(commonCss, {
  fontSize: '$lg',
  lineHeight: '$sm',
})

export const h3Css = css(commonCss, {
  fontSize: '$md',
  lineHeight: '$lg',
})

export const titleCss = css(commonCss, {
  fontSize: '$sm',
  lineHeight: '$md',
})

export const subheaderCss = css(commonCss, {
  fontSize: '$base',
  lineHeight: '$xxl',
  fw: '$semibold',
})

export const paragraphCss = css(commonCss, {
  fontSize: '$xs',
  lineHeight: '$xl',
})

export const captionCss = css(commonCss, {
  fontSize: '$min',
  lineHeight: '$xxl',
})

export const overlineCss = css(commonCss, {
  fontSize: '$min',
  lineHeight: '$xxl',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
})

export const H1 = styled('h1', h1Css)
export const H2 = styled('h2', h2Css)
export const H3 = styled('h3', h3Css)
export const Title = styled('div', titleCss)
export const Subheader = styled('div', subheaderCss)
export const Paragraph = styled('p', paragraphCss)
export const Caption = styled('span', captionCss)
export const Overline = styled('span', overlineCss)

// TODO: these semantic texts don't exist yet in Design System
// export const Quote = styled("q", commonCss)
// export const Li = styled("li", commonCss)
// export const Small = styled("small", commonCss)
// export const Deleted = styled("del", commonCss)
// export const H4 = styled("h4", commonCss)
// export const H5 = styled("h5", commonCss)
// export const H6 = styled("h6", commonCss)
// export const Ins = styled("ins", commonCss, { textDecoration: "none" })
// export const Em = styled("em", commonCss, { fontStyle: "italic" })
// export const Strong = styled("strong", commonCss, { fontWeight: "$bold" })
// export const Mark = styled("mark", commonCss, { backgroundColor: "$yellow400" })
// export const Link = styled("a", commonCss)
