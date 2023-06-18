import { Flex, useModalState } from '@uvodohq/planum'
import { Editor } from '@uvodohq/planum-editor'

export default function ExtraContainer() {
  const modalState = useModalState()
  return (
    <>
      <Flex css={{ gap: 32, py: 64, maxWidth: 608 }}>
        <Editor
          label={'Controlled'}
          aria-label="Description"
          placeholder="Product description (optional)"
          imageModal={modalState}
          // onChange={(value) => console.warn('valueeee', value)}
          imageUpload={(editor) => {
            // editor.chain().focus().to
            const postImage = document.querySelector('.postimage')
            console.warn('postImage', postImage)

            postImage?.setAttribute(
              'src',
              'https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg',
            )

            editor
              .chain()
              .focus()
              .setImage({
                src: 'https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg',
                title: 'sadas',
                style: {
                  width: '100px',
                  height: '200px',
                },
              })
              .run()
            //https://dev.to/brampayrequest/tiptap-image-resize-extension-2328
            //images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
            // console.warn('editor', {
            //   editor,
            // })
          }}
        />
      </Flex>
      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="With Default Value"
          placeholder="Product description (optional)"
          value="I am a default value"
          description="This is a description"
        />
      </Flex>
      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="With Error"
          placeholder="Product description (optional)"
          status="error"
          errorMessage="This field is required"
        />
      </Flex>

      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="Disabled"
          placeholder="Product description (optional)"
          isDisabled
        />
      </Flex>

      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="With Success"
          placeholder="Product description (optional)"
          status="success"
          successMessage="You have successfully submitted this form"
        />
      </Flex>
    </>
  )
}
