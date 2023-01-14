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

const StyledH1 = styled(H1, {
  m: 0,
  mb: 66,
  fw: 700,
})

function UncontrolledDialog() {
  return (
    <Dialog>
      <DialogTrigger>My trigger</DialogTrigger>
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
      <PopoverTrigger className={css({ display: 'inline-flex' })()}>
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true)
    }, 4000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div>
      <Paragraph css={{ m: 0 }}>The dialog will open in 4 seconds...</Paragraph>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPopup>
          <Box css={{ bg: '#fff', w: 200, h: 200 }}>
            <DialogHeading>I opened automatically</DialogHeading>
            <DialogDescription>After 4 seconds</DialogDescription>
            <DialogClose>Close</DialogClose>
          </Box>
        </DialogPopup>
      </Dialog>
    </div>
  )
}

const StyledDrawerButton = styled('button', {
  background: 'green',
  border: '1px solid transparent',
  fontSize: '$16',
  p: '$8',
  br: 4,
  color: '#fff',
  cursor: 'pointer',

  '&:focus': {
    borderColor: '$green',
    outline: '2px solid green',
    outlineOffset: '3px',
  },
})

function DrawerExample() {
  const Hamburger = (props: any) => {
    const isOpen = props['data-open']
    return (
      <StyledDrawerButton {...props}>
        {isOpen ? 'close' : 'open'} drawer
      </StyledDrawerButton>
    )
  }

  return (
    <Drawer trigger={<Hamburger />}>
      {(props) => (
        <Box
          title="This is a dialog"
          css={{
            width: 240,
            p: '$24',
          }}>
          <H3 id={props.labelId}>This is a drawer</H3>
          <p id={props.descriptionId}>
            Now that we have got your attention, you can close this.
          </p>
          <StyledDrawerButton onClick={props.close}>close</StyledDrawerButton>
        </Box>
      )}
    </Drawer>
  )
}

export default function FormElementsContainer() {
  return (
    <>
      {/* Menu */}
      <StyledH1>Menu</StyledH1>

      <Box css={{ d: 'flex', gap: 40, mb: 128 }}>
        <MenuExamples />
      </Box>

      {/* Modal */}
      <StyledH1>Modal</StyledH1>
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
      <StyledH1>Dialog</StyledH1>
      <Box css={{ d: 'flex', alignItems: 'center', gap: 40, mb: 128 }}>
        <DrawerExample />
        <ControlledDialog />
        <UncontrolledDialog />
      </Box>

      {/* Popover */}
      <StyledH1>Popover</StyledH1>
      <Box css={{ d: 'flex', gap: 40, mb: 128 }}>
        <UncontrolledPopover />
      </Box>

      {/* Tooltip */}
      <StyledH1>Tooltip</StyledH1>

      <Box
        css={{
          d: 'flex',
          boxSizing: 'border-box',
          gap: 40,
          mb: 128,
          flexWrap: 'wrap',
          '& > *': { minWidth: 100 },
        }}>
        <Tooltip placement="top">
          <TooltipTrigger
            className={css({
              background: '$blue400 !important',
              px: '14px !important',
              br: 4,
            })()}>
            Top - button
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip placement="top" defaultIsOpen>
          <TooltipTrigger
            className={css({
              background: '$blue400 !important',
              px: '14px !important',
              br: 4,
            })()}>
            Default is open
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip placement="top">
          <TooltipTrigger>
            <Paragraph css={{ m: 0 }}>Planum text</Paragraph>
          </TooltipTrigger>
          <TooltipPopup>Please contact support</TooltipPopup>
        </Tooltip>

        <Tooltip placement="bottom">
          <TooltipTrigger>
            <Box
              css={{
                background: '$surface300 !important',
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
                background: '$surface300 !important',
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
                background: '$surface300 !important',
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
