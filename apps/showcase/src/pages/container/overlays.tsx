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
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverHeading,
  PopoverPopup,
  PopoverTrigger,
  TooltipTrigger,
  TooltipPopup,
  css,
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
import { CloseIcon, DotsThreeIcon } from '@uvodohq/planum-icons'

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
    <Dialog>
      <DialogTrigger>Dialog trigger</DialogTrigger>
      <DialogPopup style={{ height: 'calc(100% - 64px)', top: 64 }}>
        <StyledMobileBottomSheet {...mobileBottomSheetMotion}>
          <DialogHeading>My dialog heading</DialogHeading>
          <DialogDescription>My dialog description</DialogDescription>
          <DialogClose>Close</DialogClose>
          <NestedModalExample />
          <MenuExamples />
        </StyledMobileBottomSheet>
      </DialogPopup>
    </Dialog>
  )
}

function UncontrolledPopover() {
  return (
    <Popover placement="right-end">
      <PopoverTrigger>
        <DotsThreeIcon />
      </PopoverTrigger>
      <PopoverPopup>
        <Box css={{ boxShadow: '$lg', bg: '#fff', p: 24 }}>
          <PopoverHeading>My dialog heading</PopoverHeading>
          <PopoverDescription>My dialog description</PopoverDescription>

          <NestedModalExample />
          <MenuExamples />

          <PopoverClose>
            <CloseIcon />
          </PopoverClose>
        </Box>
      </PopoverPopup>
    </Popover>
  )
}

function ControlledDialog() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <p>
        <button onClick={() => setOpen(true)}> open dialog </button>
      </p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPopup>
          <Box css={{ bg: '#fff', w: 200, h: 200 }}>
            <DialogHeading>controlled dialog</DialogHeading>
            <DialogDescription>
              this dialog controled by state
            </DialogDescription>
            <DialogClose>Close</DialogClose>
          </Box>
        </DialogPopup>
      </Dialog>
    </div>
  )
}

function DrawerExample() {
  const Hamburger = (props: any) => {
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

      {/* Dialog */}
      <H1 css={{ mb: 66, fw: 700 }}>Dialog</H1>
      <Box css={{ d: 'flex', gap: 40, mb: 128 }}>
        <DrawerExample />
        <ControlledDialog />
        <UncontrolledDialog />
      </Box>

      {/* Popover */}
      <H1 css={{ mb: 66, fw: 700 }}>Popover</H1>
      <Box css={{ d: 'flex', gap: 40, mb: 128 }}>
        <UncontrolledPopover />
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
        <Tooltip placement="top">
          <TooltipTrigger
            className={css({ background: '$blue400', px: 14, br: 4 })()}>
            Top - button
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip placement="top" defaultIsOpen>
          <TooltipTrigger
            className={css({ background: '$blue400', px: 14, br: 4 })()}>
            Default is open
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip placement="top">
          <TooltipTrigger>
            <Paragraph>Planum text</Paragraph>
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip placement="bottom">
          <TooltipTrigger>
            <Box
              css={{
                background: '$surface300',
                dflex: 'center',
                padding: 8,
              }}>
              Bottom - div
            </Box>
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip placement="top">
          <TooltipTrigger>
            <Box
              css={{
                background: '$surface300',
                dflex: 'center',
                padding: 8,
              }}>
              Long text - top
            </Box>
          </TooltipTrigger>
          <TooltipPopup>
            Everybody should have come across a scenario where you should
            restrict the long text for the desired width
          </TooltipPopup>
        </Tooltip>

        <Tooltip placement="bottom">
          <TooltipTrigger>
            <Box
              css={{
                background: '$surface300',
                dflex: 'center',
                padding: 8,
              }}>
              Long text - bottom
            </Box>
          </TooltipTrigger>
          <TooltipPopup>
            Everybody should have come across a scenario where you should
            restrict the long text for the desired width
          </TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Button>Planum Button</Button>
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip open>
          <TooltipTrigger>
            <Button>Show always</Button>
          </TooltipTrigger>
          <TooltipPopup>This tooltip can't hide</TooltipPopup>
        </Tooltip>
      </Box>
    </>
  )
}
