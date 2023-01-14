import type { Editor as TipTapEditor } from '@tiptap/core'
import { Color } from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
//
import { css, Field, mergeProps, useField, usePress } from '@uvodohq/planum'
//
import type { RefObject } from 'react'
import { forwardRef, useEffect, useImperativeHandle } from 'react'

import { editorClass, EditorContainer, placeholderClass } from './editor.styles'
import type { EditorProps } from './editor.type'
import type { MenuBarProps } from './menu-bar/menu-bar'
import { MenuBar } from './menu-bar/menu-bar'
import { useEditor } from './use-editor'

const EditorContentStyle = {
  '& *': { margin: 0, boxSizing: 'border-box' },
}

// TODO: fix hover on label
// resolve peer deps error by removing starterkit
export const Editor = forwardRef<RefObject<TipTapEditor | null>, EditorProps>(
  (props, ref) => {
    const {
      placeholder,
      label,
      onChange,
      value,
      autoFocus,
      onBlur,
      //
      description,
      errorMessage,
      successMessage,
      status,
      isDisabled,
      ...rest
      //
    } = props

    const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
      useField(props)

    const editor = useEditor(
      {
        editorProps: {
          attributes: {
            class: editorClass({
              status,
              isDisabled,
            }).className,
            disabled: String(isDisabled),
            tabindex: String(isDisabled ? -1 : 0),
            ...fieldProps,
          },
        },
        extensions: [
          StarterKit.configure({
            heading: {
              levels: [1, 2],
            },
          }),
          Placeholder.configure({
            placeholder: placeholder ?? 'Description',
            emptyEditorClass: placeholderClass().className,
          }),
          TextStyle,
          Color,
          Link.configure({
            openOnClick: false,
          }),
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
        ],

        content: value,
        onUpdate: ({ editor }) => {
          // remove default empty <p> tag -https://github.com/ueberdosis/tiptap/issues/154
          const content = !editor.isEmpty ? editor.getHTML() : null
          onChange?.(content)
        },
        ...rest,
        onBlur,
      },
      [], // must be empty, otherwise it will trigger flashed editor rerenders, use,editor.props
    )

    function focusEditor() {
      if (!isDisabled) {
        editor?.commands.focus('end')
      }
    }

    const { pressProps } = usePress({
      isDisabled,
      onPress: () => {
        focusEditor()
      },
    })

    // autoFocus attribute like in <input>
    useEffect(() => {
      if (autoFocus) {
        focusEditor()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor])

    // update status without destroying, rerender editor
    useEffect(() => {
      editor.setOptions({
        editorProps: {
          attributes: {
            class: editorClass({
              status,
              isDisabled,
            }).className,
            disabled: String(isDisabled),
            tabindex: String(isDisabled ? -1 : 0),
          },
        },
      })
    }, [status, isDisabled, editor])

    useEffect(() => {
      editor.commands.setContent(value as string)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    // TODO: fix react hook form focus case on error,
    useImperativeHandle(ref, () => ({
      focus: focusEditor,
      current: editor,
    }))

    //
    if (!editor) {
      return null
    }

    const menuBarProps: MenuBarProps = {
      editor,
      isDisabled,
      isBold: editor.isActive('bold'),
      isItalic: editor.isActive('italic'),
      isStrike: editor.isActive('strike'),
      isTextLeft: editor.isActive({ textAlign: 'left' }),
      isTextCenter: editor.isActive({ textAlign: 'center' }),
      isTextRight: editor.isActive({ textAlign: 'right' }),
      isH1: editor.isActive('heading', { level: 1 }),
      isH2: editor.isActive('heading', { level: 2 }),
      isBulletList: editor.isActive('bulletList'),
      isLink: editor.isActive('link'),
    }

    return (
      <Field
        {...{
          label,
          description,
          errorMessage,
          successMessage,
          status,

          labelProps: mergeProps(labelProps, pressProps),
          descriptionProps,
          errorMessageProps,
        }}>
        <EditorContainer>
          <MenuBar {...menuBarProps} />
          <EditorContent
            editor={editor}
            className={css(EditorContentStyle)()}
          />
        </EditorContainer>
      </Field>
    )
  },
)

Editor.displayName = 'Editor'
