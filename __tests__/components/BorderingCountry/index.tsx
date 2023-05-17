import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import BorderingCountry from '@/components/BorderingCountry'

const country: IBorderingCountry = {
  name: {
    common: 'Ireland',
    official: 'Republic of Ireland',
  },
  population: '5.033.000',
  flag: {
    alt: 'Ireland',
    url: 'https://flagcdn.com/ie.svg',
  },
}

describe('BorderingCountry', () => {
  it('matches the snapshot', () => {
    const { container } = render(<BorderingCountry {...country} />)
    expect(container).toMatchSnapshot()
  })
  it('renders an image', () => {
    render(<BorderingCountry {...country} />)

    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', country.name.common)
    expect(img).toHaveAttribute('src', country.flag.url)
  })
})
