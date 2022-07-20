import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../Header'

const mockedOnChange = jest.fn()
const mockedHandleQuery = jest.fn()

const props = {
    title: '',
    types: [],
    type: 'Monitor',
    onChangeDropDown: { mockedOnChange },
    search: '12435',
    onChangeInput: { mockedHandleQuery },
    listSort: {},
    sorted: ''
}

describe('Input', () => {
    it('Should render input element', async () => {
        render(
            <Header
                props={props}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Search item/i)
        expect(inputElement).toBeInTheDocument()
    })

    it('Should be able to type in input', async () => {
        render(
            <Header
                props={props}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Search item/i)
        fireEvent.change(inputElement, { target: { value: props.search } })
        expect(inputElement.value).toBe(props.search)
    })
})