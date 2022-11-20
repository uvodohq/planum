import { Input } from '@uvodohq/planum'
import {
  ArrowRightIcon,
  PlusIcon,
  TrashIcon,
  FacebookCircleIcon,
} from '@uvodohq/planum-icons'

export default function DemoApp() {
  return (
    <div>
      {/* <Button>BUTTON ME</Button> */}
      {/* <Tooltip label="Hello world!">Hover me!</Tooltip> */}
      <Input />
      <ArrowRightIcon size={100} />
      <PlusIcon />
      <TrashIcon />
      <FacebookCircleIcon />
      {/* <Alert message="Hello" /> */}
    </div>
  )
}
