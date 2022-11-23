import * as icons from '@uvodohq/planum-icons'
import { IconGrid, IconWrapper } from '../../components/icon-wrapper'

interface Item {
  name: string
  Icon: any
}

const iconList: Item[] = Object.keys(icons).map((key) => {
  const list = icons as any
  const Icon = list[key]

  return {
    name: Icon.displayName,
    Icon,
  }
})

export default function IconsContainer() {
  const content = iconList.map(({ name, Icon }) => (
    <IconWrapper name={name} Icon={Icon} />
  ))

  return <IconGrid>{content}</IconGrid>
}
