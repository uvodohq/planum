import {
  Box,
  Button,
  Drawer,
  H1,
  H3,
  Paragraph,
  Tooltip,
} from '@uvodohq/planum'

import MenuExamples from '../../components/menu-examples'
import {
  ModalExampleAsBottomSheet,
  ModalExampleCustom,
  ModalExampleCustomFooter,
  ModalExampleDefault,
  ModalExampleOverflow,
  // ModalExampleControlled,
  ModalExampleOverflowSelect,
  ModalExampleSimple,
  ModalExampleUnClosable,
  NestedModalExample,
} from '../../components/modal-examples'

function DrawerExample() {
  const Hamburger = (props) => {
    const isOpen = props['data-open']
    return <button {...props}>{isOpen ? 'close' : 'open'} drawer</button>
  }

  return (
    <Drawer trigger={<Hamburger />}>
      {(props) => (
        <Box
          title="This is a dialog"
          css={{
            width: 240,
          }}>
          <H3 id={props.labelId}>This is a drawer</H3>
          <p id={props.descriptionId}>
            Now that we have got your attention, you can close this.
          </p>
          <button onClick={props.close}>close</button>
        </Box>
      )}
    </Drawer>
  )
}

export default function FormElementsContainer() {
  return (
    <>
      {/* Menu */}
      <H1 css={{ mb: 66, fw: 700 }}>Menu</H1>

      <Box css={{ d: 'flex', gap: 40, mb: 128 }}>
        <MenuExamples />
      </Box>

      {/* Modal */}
      <H1 css={{ mb: 66, fw: 700 }}>Modal</H1>
      <Box
        css={{
          d: 'flex',
          gap: 40,
          mb: 128,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
        <ModalExampleSimple />
        <ModalExampleCustom />
        <ModalExampleDefault />
        <ModalExampleCustomFooter />
        <NestedModalExample />
        <ModalExampleOverflow />
        <ModalExampleUnClosable />
        {/* <ModalExampleControlled /> */}
        <ModalExampleOverflowSelect />
        <ModalExampleAsBottomSheet />
      </Box>

      {/* Modal */}
      <H1 css={{ mb: 66, fw: 700 }}>Drawer</H1>
      <Box css={{ d: 'flex', gap: 40, mb: 128 }}>
        <DrawerExample />
      </Box>

      {/* Tooltip */}
      <H1 css={{ mb: 66, fw: 700 }}>Tooltip</H1>

      <Box
        css={{
          d: 'flex',
          gap: 40,
          mb: 128,
          flexWrap: 'wrap',
          '& > *': { minWidth: 100 },
        }}>
        <Tooltip label="Please contact support" placement="top">
          <Box as="button" css={{ background: '$blue400', px: 14, br: 4 }}>
            Top - button
          </Box>
        </Tooltip>

        <Tooltip label="Please contact support" placement="top" defaultIsOpen>
          <Box as="button" css={{ background: '$blue400', px: 14, br: 4 }}>
            Default is open
          </Box>
        </Tooltip>

        <Tooltip label="Please contact support" placement="top">
          <Paragraph>Planum text</Paragraph>
        </Tooltip>

        <Tooltip label="Please contact support" placement="bottom">
          <Box
            css={{
              background: '$surface300',
              dflex: 'center',
              padding: 8,
            }}>
            Bottom - div
          </Box>
        </Tooltip>

        <Tooltip
          label="Everybody should have come across a scenario where you should restrict the long text for the desired width"
          placement="top">
          <Box
            css={{
              background: '$surface300',
              dflex: 'center',
              padding: 8,
            }}>
            Long text - top
          </Box>
        </Tooltip>

        <Tooltip
          label="Everybody should have come across a scenario where you should restrict the long text for the desired width"
          placement="bottom">
          <Box
            css={{
              background: '$surface300',
              dflex: 'center',
              padding: 8,
            }}>
            Long text - bottom
          </Box>
        </Tooltip>

        <Tooltip label="Please contact support">
          <Button>Planum Button</Button>
        </Tooltip>

        <Tooltip label="This tooltip can't hide" isOpen>
          <Button>Show always</Button>
        </Tooltip>
      </Box>
    </>
  )
}
