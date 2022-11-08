import type { Editor } from '@tiptap/react'
import { useState } from 'react'
import { Box, Dialog, InputUrl, Modal, Tooltip, useModalState } from 'src'

import { LinkIcon } from '../icons'
import { ToggleButton } from '../toggle-button'
import { DialogFooter } from './dialog-footer'

interface Props {
  editor: Editor
  isSelected: boolean
  isDisabled?: boolean
}

const LinkButtonWithModal = ({ editor, isSelected, isDisabled }: Props) => {
  const modal = useModalState()
  const [url, setUrl] = useState('')
  const isEditLink = !!editor.getAttributes('link').href

  editor.getAttributes('link')

  function openModal() {
    const previousUrl = editor.getAttributes('link').href
    setUrl(previousUrl)

    modal.openModal()
  }

  function removeLink() {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
  }

  function saveLink(e?: any) {
    e?.preventDefault()

    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      removeLink()
    }

    // update link
    if (url.trim()) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    }

    modal.closeModal()
  }

  return (
    <>
      <Tooltip label="Link" placement="top">
        <ToggleButton
          isDisabled={isDisabled}
          onChange={openModal}
          isSelected={isSelected}
          aria-label="Set Link">
          <LinkIcon />
        </ToggleButton>
      </Tooltip>

      <Modal state={modal}>
        <Dialog
          title={isEditLink ? 'Edit link' : 'Add link'}
          renderFooter={() => (
            <DialogFooter
              onCancel={modal.closeModal}
              onSubmit={saveLink}
              isEditLink={isEditLink}
              onRemoveLink={() => {
                removeLink()
                modal.closeModal()
              }}
            />
          )}>
          <Box as="form" css={{ py: 16 }} onSubmit={saveLink}>
            <InputUrl
              label="Link URL"
              placeholder="https://"
              value={url}
              onChange={(value) => setUrl(value)}
            />
          </Box>
        </Dialog>
      </Modal>
    </>
  )
}

export default LinkButtonWithModal
