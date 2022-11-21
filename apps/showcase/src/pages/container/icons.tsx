import { icons } from '@uvodohq/planum-icons'
import { IconsGrid, IconsWrapper } from '../../components/icons'

export default function IconsContainer() {
  const content = icons.map((item) => (
    <IconsWrapper name={item.name} Icon={item.icon} />
  ))

  return <IconsGrid>{content}</IconsGrid>
}
