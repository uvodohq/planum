import type { EditorOptions } from '@tiptap/core'
import type { LabelAriaProps } from '@uvodohq/planum'

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
} & LabelAriaProps &
  Partial<EditorOptions>
