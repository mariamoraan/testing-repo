const fizzbuzz = (number) => {
    if(typeof number !== 'number') throw new Error("Parameter provided must be a number");
    if(isNaN(number)) throw new Error("Parameter provided must be a number");

    const multiples = {3: 'fizz', 5: 'buzz'};
    let output = '';

    Object.entries(multiples)
    .forEach(([multiplier, word]) => {
        if(number % multiplier === 0) output += word
    })

    return output === '' ? number : output;
}

describe('Fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function')
    })
    it('should throw error if not number is received as a param', () => {
        expect(() => fizzbuzz()).toThrow()
    })
    it('should throw an specific error if not number is received as a param', () => {
        expect(() => fizzbuzz()).toThrow("Parameter provided must be a number")
    })
    it('should throw an specific error if NaN is received as a param', () => {
        expect(() => fizzbuzz(NaN)).toThrow("Parameter provided must be a number")
    })
    it('should return 1 if number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })
    it('should return 2 if number provided is 2', () => {
        expect(fizzbuzz(2)).toBe(2)
    })
    it('should return fizz if number provided is 3', () => {
        expect(fizzbuzz(3)).toBe('fizz')
    })
    it('should return fizz if number provided is multiple of 3', () => {
        expect(fizzbuzz(3)).toBe('fizz')
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
        expect(fizzbuzz(12)).toBe('fizz')
    })
    it('should return buzz if number provided is 5', () => {
        expect(fizzbuzz(5)).toBe('buzz')
    })
    it('should return buzz if number provided is multiple of 5', () => {
        expect(fizzbuzz(10)).toBe('buzz')
        expect(fizzbuzz(20)).toBe('buzz')
        expect(fizzbuzz(25)).toBe('buzz')
    })
    it('should return fizzbuzz if number provided is multiple of 3 & 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
        expect(fizzbuzz(30)).toBe('fizzbuzz')
        expect(fizzbuzz(45)).toBe('fizzbuzz')
    })
})