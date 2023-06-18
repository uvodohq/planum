import { mergeAttributes, nodeInputRule } from '@tiptap/core'
import Image from '@tiptap/extension-image'
import { ReactNodeViewRenderer } from '@tiptap/react'
import type { Component, FC, ReactElement } from 'react'

import ImageResizeComponent from './image-resize'

export interface ImageOptions {
  inline: boolean
  allowBase64: boolean
  HTMLAttributes: Record<string, any>
  resizeIcon: FC | Component | ReactElement
  useFigure: boolean
}
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    imageResize: {
      setImage: (options: {
        src: string
        alt?: string
        title?: string
        width?: string | number
        height?: string | number
        // isDraggable?: boolean
      }) => ReturnType
    }
  }
}
export const inputRegex = /(!\[(.+|:?)]\((\S+)(?:\s+["'](\S+)["'])?\))$/
export const ImageResize = Image.extend<ImageOptions>({
  name: 'imageResize',
  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
      resizeIcon: <>⊙</>,
      useFigure: false,
    }
  },
  addAttributes() {
    return {
      width: {
        default: '100%',
        renderHTML: (attributes) => {
          return {
            width: attributes.width,
          }
        },
      },
      height: {
        default: 'auto',
        renderHTML: (attributes) => {
          return {
            height: attributes.height,
          }
        },
      },
      src: {
        default: null,
        // parseHTML: (element) => {
        //   return {
        //     src: element.getAttribute('src'),
        //   }
        // },
        renderHTML: (attributes) => {
          console.warn('atrributes', attributes)
          if (!attributes.src) {
            return {}
          }
          return {
            src: attributes.src,
          }
        },
      },
      // isDraggable: {
      //   default: true,
      //   renderHTML: (attributes) => {
      //     return {}
      //   },
      // },
    }
  },
  parseHTML() {
    return [
      {
        tag: 'image-resizer',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'image-resizer',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageResizeComponent)
  },
  addInputRules() {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => {
          const [, , alt, src, title, height, width] = match
          return { src, alt, title, height, width }
        },
      }),
    ]
  },
})
