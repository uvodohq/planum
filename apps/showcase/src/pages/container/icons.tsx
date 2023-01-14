import { H3, Toaster, styled } from '@uvodohq/planum'
import * as icons from '@uvodohq/planum-icons'
import { IconGrid, IconWrapper } from '../../components/icon-wrapper'

interface Item {
  name: string
  Icon: any
}

const StyledLink = styled('a', {
  textDecoration: 'none',
})

const iconList: Item[] = Object.keys(icons).map((key) => {
  const list = icons as any
  const Icon = list[key]

  return {
    name: Icon.displayName,
    Icon,
  }
})

const duotoneList = [
  'ChartBarIcon',
  'CirclesFourIcon',
  'ClipboardTextIcon',
  'DoorIcon',
  'GearIcon',
  'HouseIcon',
  'PaintBrushBroadIcon',
  'PuzzlePieceIcon',
  'StorefrontIcon',
  'UserIcon',
]

export default function IconsContainer() {
  const content = iconList.map(({ name, Icon }) => (
    <IconWrapper name={name} Icon={Icon} key={name} />
  ))

  const duotoneIcons = duotoneList.map((name) => {
    // @ts-ignore
    const Icon = icons[name]

    return (
      <IconWrapper
        name={name}
        Icon={() => <Icon weight="duotone" />}
        key={name}
      />
    )
  })

  return (
    <div>
      <Toaster />
      <H3 css={{ fw: '500', m: 0 }}>
        Planum provides{' '}
        <span style={{ fontWeight: 700 }}>{iconList.length}</span> commonly used
        interface icons which are based on{' '}
        <StyledLink href="https://phosphoricons.com/" target="_blank">
          phosphor icons
        </StyledLink>
        .
      </H3>
      <H3 css={{ fw: '500', m: 0 }}>
        Before use icons, you need to install{' '}
        <span style={{ fontWeight: 700 }}>@uvodohq/planum-icons</span> package.
      </H3>
      <IconGrid>{content}</IconGrid>
      <H3 css={{ fw: '$semibold', mt: 64 }}>
        {duotoneIcons.length} icons have duotone color
      </H3>
      <IconGrid>{duotoneIcons}</IconGrid>
    </div>
  )
}
