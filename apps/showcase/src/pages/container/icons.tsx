import { icons } from '@uvodohq/planum-icons'
import { IconGrid, IconWrapper } from '../../components/icon-wrapper'

export default function IconsContainer() {
  const content = icons.map(({ name, Icon }) => (
    <IconWrapper name={name} Icon={Icon} />
  ))

  return <IconGrid>{content}</IconGrid>
}
