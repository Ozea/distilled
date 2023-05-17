import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Card from '@/components/Card'

describe('BorderingCountry', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Card />)
    expect(container).toMatchSnapshot()
  })
  it('should have correct original classname', () => {
    const { container } = render(<Card />)
    const div = container.getElementsByTagName('div')

    expect(div.item(0)?.className).toBe('card')
  })
  it('should have correct classnames', () => {
    const { container } = render(<Card className="test" />)
    const div = container.getElementsByTagName('div')

    expect(div.item(0)?.className).toBe('card test')
  })
  it('should render children correctly', () => {
    const headingText = 'Hello from Card child'
    const { container } = render(
      <Card>
        <h1>{headingText}</h1>
      </Card>
    )

    const div = container.getElementsByTagName('div')
    const heading = screen.getByRole('heading')

    expect(div.item(0)?.childElementCount).toBe(1)
    expect(heading).toHaveTextContent(headingText)
  })
})
