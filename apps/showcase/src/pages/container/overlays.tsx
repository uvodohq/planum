import {
  Box,
  Button,
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeading,
  DialogDescription,
  DialogClose,
  Drawer,
  H1,
  H3,
  Paragraph,
  Tooltip,
  styled,
} from '@uvodohq/planum'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

const mobileBottomSheetMotion = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 200 },
  transition: {
    duration: 0.15,
  },
}

export const StyledMobileBottomSheet = styled(motion.div, {
  height: '100%',
  width: '100%',
  background: '#fff',
  position: 'absolute',
  overflowY: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  overscrollBehavior: 'contain',
})

function UncontrolledDialog() {
  return (
    <div className="App">
      <h1>Dialog</h1>
      <Dialog>
        <DialogTrigger>My trigger</DialogTrigger>
        <DialogPopup style={{ height: 'calc(100% - 64px)', top: 64 }}>
          <StyledMobileBottomSheet {...mobileBottomSheetMotion}>
            <DialogHeading>My dialog heading</DialogHeading>
            <DialogDescription>My dialog description</DialogDescription>
            <DialogClose>Close</DialogClose>
            <NestedModalExample />
          </StyledMobileBottomSheet>
        </DialogPopup>
      </Dialog>
    </div>
  )
}

function ControlledDialog() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true)
    }, 4000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="App">
      <h1>Dialog</h1>
      <p>The dialog will open in 3 seconds...</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPopup className="Dialog">
          <DialogHeading>I opened automatically</DialogHeading>
          <DialogDescription>After 4 seconds</DialogDescription>
          <DialogClose>Close</DialogClose>
        </DialogPopup>
      </Dialog>
    </div>
  )
}

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
        {/* <ControlledDialog /> */}
        <UncontrolledDialog />
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
