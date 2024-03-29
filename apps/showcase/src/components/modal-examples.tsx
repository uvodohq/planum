import * as React from 'react'

import {
  Button,
  Input,
  Box,
  Flex,
  Stack,
  ModalContent,
  Modal,
  useModalState,
  styled,
} from '@uvodohq/planum'

import SelectComponent from './select/select-example'

const NativeButton = styled('button', {
  bg: '$blue300',
  p: 8,
  whiteSpace: 'nowrap',
  br: 8,
})

export function ModalExampleSimple() {
  return (
    <Modal trigger={<NativeButton>Simple modal</NativeButton>}>
      <Box
        css={{
          bg: '#fff',
          size: '100%',
          p: 32,
          '@laptop': {
            maxWidth: 200,
          },
        }}>
        Simple modal not have header, body, footer
      </Box>
    </Modal>
  )
}

export function ModalExampleCustom() {
  const body = `
       css={{ 
          bg: '#fff', 
          size: '100%', 
          maxWidth: 1000,
          p: 32 
      }}
  `
  return (
    <Modal trigger={<NativeButton>Custom width modal</NativeButton>}>
      <Box css={{ bg: '#fff', size: '100%', maxWidth: 1000, p: 32 }}>
        <pre>{body}</pre>
      </Box>
    </Modal>
  )
}

export function ModalExampleDefault() {
  return (
    <Modal
      trigger={<NativeButton>Default modal</NativeButton>}
      openOnMobileAs="drawer">
      <ModalContent
        title="This is a dialog"
        description="This is a dialog description">
        <Input />
      </ModalContent>
    </Modal>
  )
}

export function ModalExampleCustomFooter() {
  return (
    <Modal trigger={<NativeButton>custom footer</NativeButton>}>
      <ModalContent
        title="Custom footer action buttons"
        renderFooter={(props) => (
          <Box css={{ px: 32, pt: 32 }}>
            <Button variant="secondaryDanger">Remove</Button>
            <Button onClick={props.closeModal}>Custom close</Button>
          </Box>
        )}>
        <Input />
        {/* <p id={props.descriptionId}>Modal description</p> */}
      </ModalContent>
    </Modal>
  )
}

export function ModalExampleUnClosable() {
  return (
    <Modal
      closable={false}
      trigger={<NativeButton>unclosable modal</NativeButton>}>
      <ModalContent title="This is an unclosable dialog">
        <p
        // id={props.descriptionId}
        >
          You cant close me, when click outside me. or press ESC key. usefull
          for unsaved forms in modals
        </p>
      </ModalContent>
    </Modal>
  )
}

export function ModalExampleOverflow() {
  return (
    <Modal trigger={<NativeButton>overflow scroll modal</NativeButton>}>
      <ModalContent
        title="This is a dialog"
        description="Long content should be wrapped in a scrolled content."
        renderFooter={(props) => (
          <Box css={{ px: 32, pt: 32 }}>
            <Button variant="secondaryDanger">Save</Button>
            <Button onClick={props.closeModal}>Custom close</Button>
          </Box>
        )}>
        <Box css={{ h: 1000, bg: '$surface200' }}></Box>
        end of content
      </ModalContent>
    </Modal>
  )
}

export function NestedModalExample() {
  return (
    <Modal trigger={<NativeButton>nested modal</NativeButton>}>
      <ModalContent title="This is a dialog 1">
        <Stack y="$24">
          <p
          // id={props.descriptionId}
          >
            Try to open second modal, to test nested modals.
          </p>

          <Modal trigger={<NativeButton>open 2nd modal</NativeButton>}>
            <ModalContent title="This is a dialog 2">
              <Stack y="$24">
                <p
                // id={props.descriptionId}
                >
                  you are in 2nd modal, test ESC key to close it.
                </p>
                {/* <NativeButton onClick={props.close}>close 2nd</NativeButton> */}
              </Stack>
            </ModalContent>
          </Modal>
        </Stack>
      </ModalContent>
    </Modal>
  )
}

export function ModalExampleControlled() {
  const state = useModalState({
    defaultIsOpen: true,
  })

  return (
    <Flex css={{ bg: '$success100', gap: 22, p: 22 }}>
      <Modal onClose={() => alert('closed')} state={state}>
        <ModalContent
          title="Controlled Modal"
          description="This modal state controled by useModalState hook, and  
          defaultIsOpen: true"></ModalContent>
      </Modal>

      <button onClick={state.openModal}>
        open modal with button outside of modal
      </button>
    </Flex>
  )
}

export function ModalExampleOverflowSelect() {
  const ref = React.useRef(null)

  return (
    <Modal
      initialFocus={ref}
      trigger={<NativeButton>overflow scroll with select popups</NativeButton>}>
      <ModalContent
        title="This is a dialog"
        description="Long content should be wrapped in a scrolled content."
        renderFooter={(props) => (
          <Box css={{ px: 32, pt: 32 }}>
            <Button variant="secondaryDanger">Save</Button>
            <Button onClick={props.closeModal}>Custom close</Button>
          </Box>
        )}>
        <Box css={{ h: 400, p: 32 }}>
          <SelectComponent defaultValue={14} />
        </Box>
        <Input ref={ref} />
        tab to focus select. try open select, scroll to see popup. press ESC key
        to close select. then modal.
        <Box css={{ h: 400, p: 32 }}>
          <SelectComponent defaultValue={14} />
        </Box>
        end of content
      </ModalContent>
    </Modal>
  )
}

export function ModalExampleAsBottomSheet() {
  return (
    <Modal
      trigger={<NativeButton>open as bottom sheet </NativeButton>}
      openOnMobileAs="bottomsheet">
      <Box
        css={{
          bg: 'pink',
          size: '100%',
          p: 32,
          height: 300,
        }}>
        will be shown as bottom sheet on mobile
      </Box>
    </Modal>
  )
}
