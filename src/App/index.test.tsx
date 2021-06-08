import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './index'

describe('App', () => {
  test('renders the asks table', () => {
    render(<App />)

    expect(screen.getByText(/asks/i)).toBeInTheDocument()
  })

  test('renders the bids table', () => {
    render(<App />)

    expect(screen.getByText(/bids/i)).toBeInTheDocument()
  })
})
