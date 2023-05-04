import {
  Caption,
  H1,
  H2,
  H3,
  Overline,
  Paragraph,
  Subheader,
  Title,
} from '@uvodohq/planum'

const weights = [
  ['Bold', '$bold'],
  ['Semibold', '$semibold'],
  ['Medium', '$medium'],
  ['Regular', '$regular'],
]

const texts = [
  ['H1', H1],
  ['H2', H2],
  ['H3', H3],
  ['Title', Title],
  ['Subheader', Subheader],
  ['Paragraph', Paragraph],
  ['Caption', Caption],
  ['Overline', Overline],
]

export default function TypographyContainer() {
  return (
    <table>
      {texts.map(([name, Component], i) => {
        return (
          <tr key={i}>
            <Component
              css={{
                color: '#808080',
              }}>
              {name}
            </Component>

            {weights.map(([name, fontWeight]) => {
              return (
                <th key={name}>
                  <Component
                    css={{
                      fontWeight,
                    }}>
                    {name}
                  </Component>
                </th>
              )
            })}
          </tr>
        )
      })}
    </table>
  )
}
