import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HeaderLayout from '../src/layout/HeaderLayout'
import { BrowserRouter } from 'react-router-dom'

describe('Header test', () => {
  test('Should show title', () => {
    render(
      <BrowserRouter>
        <HeaderLayout />
      </BrowserRouter>,
    )

    expect(screen.getByText(/Gestion Stock/i)).toBeDefined()
  })
})
