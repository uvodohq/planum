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
  Paragraph,
} from '@uvodohq/planum'

import SelectComponent from './select/select-example'

const StyledNativeButton = styled('button', {
  bg: '$blue300',
  p: 8,
  whiteSpace: 'nowrap',
  br: 8,
  fontSize: 16,
  border: 'none',
  cursor: 'pointer',
})

export function ModalExampleSimple() {
  return (
    <Modal trigger={<StyledNativeButton>Simple modal</StyledNativeButton>}>
      <Box
        css={{
          boxSizing: 'border-box',
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
    <Modal
      trigger={<StyledNativeButton>Custom width modal</StyledNativeButton>}>
      <Box css={{ bg: '#fff', size: '100%', maxWidth: 1000, p: 32 }}>
        <pre style={{ fontSize: 16 }}>{body}</pre>
      </Box>
    </Modal>
  )
}

export function ModalExampleDefault() {
  return (
    <Modal
      trigger={<StyledNativeButton>Default modal</StyledNativeButton>}
      openOnMobileAs="drawer">
      <ModalContent
        title="This is a dialog"
        description="This is a dialog description"></ModalContent>
    </Modal>
  )
}

export function ModalExampleCustomFooter() {
  return (
    <Modal trigger={<StyledNativeButton>custom footer</StyledNativeButton>}>
      <ModalContent
        title="Custom footer action buttons"
        renderFooter={(props) => (
          <Box css={{ px: 32, pt: 32 }}>
            <Button variant="secondaryDanger">Remove</Button>
            <Button onClick={props.closeModal}>Custom close</Button>
          </Box>
        )}></ModalContent>
    </Modal>
  )
}

export function ModalExampleUnClosable() {
  return (
    <Modal
      closable={false}
      trigger={<StyledNativeButton>unclosable modal</StyledNativeButton>}>
      <ModalContent title="This is an unclosable dialog">
        <Paragraph style={{ margin: 0, fontSize: 16, lineHeight: 'inherit' }}>
          You cant close me, when click outside me. or press ESC key. usefull
          for unsaved forms in modals
        </Paragraph>
      </ModalContent>
    </Modal>
  )
}

export function ModalExampleOverflow() {
  return (
    <Modal
      trigger={<StyledNativeButton>overflow scroll modal</StyledNativeButton>}>
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
    <Modal trigger={<StyledNativeButton>nested modal</StyledNativeButton>}>
      <ModalContent title="This is a dialog 1">
        <Stack y="$24">
          <Paragraph style={{ margin: 0 }}>
            Try to open second modal, to test nested modals.
          </Paragraph>

          <Modal
            trigger={<StyledNativeButton>open 2nd modal</StyledNativeButton>}>
            <ModalContent title="This is a dialog 2">
              <Stack y="$24">
                <Paragraph style={{ margin: 0 }}>
                  you are in 2nd modal, test ESC key to close it.
                </Paragraph>
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

      <StyledNativeButton onClick={state.openModal}>
        open modal with button outside of modal
      </StyledNativeButton>
    </Flex>
  )
}

export function ModalExampleOverflowSelect() {
  const ref = React.useRef(null)

  return (
    <Modal
      initialFocus={ref}
      trigger={
        <StyledNativeButton>
          overflow scroll with select popups
        </StyledNativeButton>
      }>
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
      trigger={<StyledNativeButton>open as bottom sheet </StyledNativeButton>}
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
