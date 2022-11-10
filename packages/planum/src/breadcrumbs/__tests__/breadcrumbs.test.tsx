import { render, screen } from '../../test'
import { BreadcrumbItem, Breadcrumbs } from '..'

describe('Breadcrumbs', async () => {
  it('should render 3 item', () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem>Item 1</BreadcrumbItem>
        <BreadcrumbItem>Item 2</BreadcrumbItem>
        <BreadcrumbItem>Item 3</BreadcrumbItem>
      </Breadcrumbs>,
    )

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByRole('navigation')).toMatchSnapshot()
  })
})
