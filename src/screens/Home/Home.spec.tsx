import { render, screen } from '@testing-library/react'

import { Home } from '..'

describe('App root', () => {
  it('should render', () => {
    render(<Home />)

    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
})
