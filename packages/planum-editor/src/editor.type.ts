import type { EditorOptions } from '@tiptap/core'
import type { Editor } from '@tiptap/react'
import type { LabelAriaProps, ModalState } from '@uvodohq/planum'

export type EditorProps = {
  placeholder?: string
  onChange?: (value?: string | null) => void
  onBlur?: () => void
  value?: string
  defaultValue?: string
  autoFocus?: boolean

  // TODO: use shared
  label?: string
  description?: React.ReactNode
  errorMessage?: string
  successMessage?: string
  status?: 'success' | 'normal' | 'error'
  isDisabled?: boolean

  // image
  imageModal: ModalState
  imageUpload: (editor: Editor) => void
} & LabelAriaProps &
  Partial<EditorOptions>
