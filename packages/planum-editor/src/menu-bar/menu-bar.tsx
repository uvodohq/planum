import type { Editor } from '@tiptap/react'
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
  VisuallyHidden,
} from '@uvodohq/planum'
import * as React from 'react'

import {
  ListBulletsIcon,
  PaletteIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBolderIcon,
  TextHOneIcon,
  TextHTwoIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextTIcon,
} from '../icons'
import { ToggleButton } from '../toggle-button'
import LinkButtonWithModal from './link-button-with-modal'
import { ButtonsGroup, MenuBarContainer } from './menu-bar.styles'

export interface MenuBarProps {
  editor: Editor
  isDisabled?: boolean
  isBold: boolean
  isItalic: boolean
  isStrike: boolean
  isTextLeft: boolean
  isTextCenter: boolean
  isTextRight: boolean
  isH1: boolean
  isH2: boolean
  isBulletList: boolean
  isLink: boolean
}

const EditorTooltip = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <Tooltip>
    <TooltipTrigger asChild>{children}</TooltipTrigger>
    <TooltipPopup>{label}</TooltipPopup>
  </Tooltip>
)

// Don't rerender on editor content change when typing
export const MenuBar = React.memo((props: MenuBarProps) => {
  const {
    editor,
    isDisabled,
    isBold,
    isStrike,
    isItalic,
    isTextLeft,
    isTextCenter,
    isTextRight,
    isH1,
    isH2,
    isBulletList,
    isLink,
  } = props

  function focusEditor() {
    if (isDisabled) {
      return editor.chain()
    }

    return editor.chain().focus()
  }

  return (
    <MenuBarContainer>
      <ButtonsGroup>
        {/* Bold  */}
        <EditorTooltip label="Bold">
          <ToggleButton
            isDisabled={isDisabled}
            isSelected={isBold}
            onChange={() => focusEditor().toggleBold().run()}
            aria-label="Bold">
            <TextBolderIcon />
          </ToggleButton>
        </EditorTooltip>

        {/* Italic */}
        <EditorTooltip label="Italic">
          <ToggleButton
            isDisabled={isDisabled}
            isSelected={isItalic}
            onChange={() => focusEditor().toggleItalic().run()}
            aria-label="Italic">
            <TextItalicIcon />
          </ToggleButton>
        </EditorTooltip>

        {/* Strike */}
        <EditorTooltip label="Strike">
          <ToggleButton
            isDisabled={isDisabled}
            isSelected={isStrike}
            onChange={() => focusEditor().toggleStrike().run()}
            aria-label="Strike">
            <TextStrikethroughIcon />
          </ToggleButton>
        </EditorTooltip>

        {/* Color Picker - // TODO: fix focus css */}
        <EditorTooltip label="Color picker">
          <ToggleButton
            as="label"
            aria-label="Color picker"
            isDisabled={isDisabled}>
            <VisuallyHidden>
              <input
                type="color"
                onChange={(event) =>
                  focusEditor().setColor(event.target?.value).run()
                }
                value={editor.getAttributes('textStyle').color || '#060606'}
              />
            </VisuallyHidden>
            <PaletteIcon />
          </ToggleButton>
        </EditorTooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Text Left */}
        <EditorTooltip label="Align left">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().setTextAlign('left').run()}
            isSelected={isTextLeft}
            aria-label="Align left">
            <TextAlignLeftIcon />
          </ToggleButton>
        </EditorTooltip>

        {/* Text Center */}
        <EditorTooltip label="Center">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().setTextAlign('center').run()}
            isSelected={isTextCenter}
            aria-label="Center">
            <TextAlignCenterIcon />
          </ToggleButton>
        </EditorTooltip>

        {/* Text Right */}
        <EditorTooltip label="Align right">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().setTextAlign('right').run()}
            isSelected={isTextRight}
            aria-label="Align right">
            <TextAlignRightIcon />
          </ToggleButton>
        </EditorTooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* H1 */}
        <EditorTooltip label="Heading 1">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().toggleHeading({ level: 1 }).run()}
            isSelected={isH1}
            aria-label="Heading 1">
            <TextHOneIcon />
          </ToggleButton>
        </EditorTooltip>

        {/* H2 */}
        <EditorTooltip label="Heading 2">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().toggleHeading({ level: 2 }).run()}
            isSelected={isH2}
            aria-label="Heading 2">
            <TextHTwoIcon />
          </ToggleButton>
        </EditorTooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Link */}

        <LinkButtonWithModal
          editor={editor}
          isSelected={isLink}
          isDisabled={isDisabled}
        />
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Unodered List */}
        <EditorTooltip label="Unordered list">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().toggleBulletList().run()}
            isSelected={isBulletList}
            aria-label="Unordered list">
            <ListBulletsIcon />
          </ToggleButton>
        </EditorTooltip>
      </ButtonsGroup>

      <ButtonsGroup>
        {/* Clear styles */}
        <EditorTooltip label="Clear format">
          <ToggleButton
            isDisabled={isDisabled}
            onChange={() => focusEditor().unsetAllMarks().run()}
            isSelected={false}
            aria-label="Clear format">
            <TextTIcon />
          </ToggleButton>
        </EditorTooltip>
      </ButtonsGroup>
    </MenuBarContainer>
  )
})

MenuBar.displayName = 'Editor.MenuBar'
