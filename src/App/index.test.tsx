import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './index'

test('renders asks table', () => {
  render(<App />)
  const asksElem = screen.getByText(/asks/i)
  expect(asksElem).toBeInTheDocument()
})

test('renders bids table', () => {
  render(<App />)
  const bidsElem = screen.getByText(/bids/i)
  expect(bidsElem).toBeInTheDocument()
})
