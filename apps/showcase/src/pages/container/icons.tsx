import { H3, Toaster } from '@uvodohq/planum'
import * as icons from '@uvodohq/planum-icons'

import { IconGrid, IconWrapper } from '../../components/icon-wrapper'

interface Item {
  name: string
  Icon: any
}

const socialList = ['FacebookIcon', 'GoogleIcon', 'WhatsappIcon']

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
  'CreditCardIcon',
  'TargetIcon',
  'LinkIcon',
  'MoneyIcon',
  'CurrencyDollarIcon',
  'CurrencyCircleDollarIcon',
]

const iconList: Item[] = Object.keys(icons).map((key) => {
  const list = icons as any
  const Icon = list[key]

  return {
    name: Icon.displayName,
    Icon,
  }
})

const phosphorIconList = iconList.filter(
  ({ name }) => !socialList.includes(name),
)

export default function IconsContainer() {
  const content = phosphorIconList.map(({ name, Icon }) => (
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

  const socialIcons = iconList.map(({ name, Icon }) => {
    const isSocial = socialList.includes(name)

    return isSocial && <IconWrapper name={name} Icon={Icon} key={name} />
  })

  return (
    <div>
      <Toaster />
      <H3 css={{ fw: '$semibold' }}>
        @uvodohq/planum-icons contains {iconList.length} icons <br />
      </H3>
      based on <a href="https://phosphoricons.com/">phosphor icons</a>
      <IconGrid>{content}</IconGrid>
      <H3 css={{ fw: '$semibold', mt: 64 }}>
        {duotoneIcons.length} icons have duotone color
      </H3>
      <IconGrid>{duotoneIcons}</IconGrid>
      <H3 css={{ fw: '$semibold', mt: 64 }}>
        {socialList.length} social icons
      </H3>
      <IconGrid>{socialIcons}</IconGrid>
    </div>
  )
}
