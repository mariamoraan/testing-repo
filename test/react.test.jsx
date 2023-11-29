import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import { Calculator, operations, equalSign } from '../components/Calculator';
import React from 'react'


describe('Calculator', () => {
    afterEach(() => {
        cleanup();
    })
    it('Calculator should be rendered', () => {
        render(<Calculator />)
    })
    it('Should render title correctly', () => {
        render(<Calculator />)
        screen.getByText('Calculator')
    })
    it('Should render numbers', () => {
        render(<Calculator />)
        Array.from(Array(9).keys()).map(number => screen.getByText(number))
    })
    it('Should render 4 rows', () => {
        render(<Calculator />)
        const rows = screen.getAllByRole('row')
        console.log(rows)
        expect(rows.length).toBe(4)
    })
    it('Should render operations', () => {
        render(<Calculator />)
        operations.map(operation => screen.getByText(operation))
    })
    it('Should render equal sign', () => {
        render(<Calculator />)
        screen.getByText(equalSign)
    })
    it('Should show user input after clicking a number', () => {
        render(<Calculator />)
        const one = screen.getByText('1')
        fireEvent.click(one)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('1')
    })
    it('Should show user input after clicking several numbers', () => {
        render(<Calculator />)

        const one = screen.getByText('1')
        fireEvent.click(one)

        const two = screen.getByText('2')
        fireEvent.click(two)

        const three = screen.getByText('3')
        fireEvent.click(three)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('123')
    })
    it('Should show user input after clicking several numbers', () => {
        render(<Calculator />)

        const one = screen.getByText('1')
        fireEvent.click(one)

        const two = screen.getByText('2')
        fireEvent.click(two)

        const plus = screen.getByText('+')
        fireEvent.click(plus)

        const three = screen.getByText('3')
        fireEvent.click(three)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('12+3')
    })
    it('Should calculate based on user info and show the calculation', () => {
        render(<Calculator />)

        const one = screen.getByText('1')
        const plus = screen.getByText('+')
        const equal = screen.getByText(equalSign)
        const input = screen.getByRole('textbox')

        fireEvent.click(one)
        fireEvent.click(plus)
        fireEvent.click(one)
        fireEvent.click(equal)


        expect(input.value).toBe('2')
    })
    it('Should allow concatenated operations if user clicks an operation after clicking equal', () => {
        render(<Calculator />)

        const one = screen.getByText('1')
        const plus = screen.getByText('+')
        const equal = screen.getByText(equalSign)
        const input = screen.getByRole('textbox')

        fireEvent.click(one)
        fireEvent.click(plus)
        fireEvent.click(one)
        fireEvent.click(equal)
        fireEvent.click(plus)
        fireEvent.click(one)
        fireEvent.click(equal)


        expect(input.value).toBe('3')
    })
})