import { render, screen } from '@testing-library/react'
import Title from '../Title'

test('Test if the element is a header and show correct title', () => {
    render(<Title title={'Store Parts'}/>)
    const headingElement = screen.getByRole('heading', {name: 'Store Parts'})
    expect(headingElement).toBeInTheDocument()
})

// test('Test if the element is a header and show correct title', () => {
//     render(<Title title={'Store Parts'}/>)
//     const headingElements = screen.getAllByRole('heading')
//     expect(headingElements.length).toBe()
// })