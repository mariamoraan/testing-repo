const canReconfigure = (from, to) => {
    if(!from || !to) throw new Error();

    const paramsAreStrings = typeof from === 'string' && typeof to === 'string'
    if(!paramsAreStrings) throw new Error("from must be a string");

    const isSameLength = from.length === to.length
    if(!isSameLength) return false;
    
    const hasSameNumberOfUniqueCharacters = new Set(from).size === new Set(to).size
    if(!hasSameNumberOfUniqueCharacters) return false

    const transformations = {}
    for (let i = 0; i < from.length ; i++) {
        const fromLetter = from[i]
        const toLetter = to[i]

        const storedLetter = transformations[fromLetter]
        if(storedLetter && storedLetter !== toLetter) return false
        transformations[fromLetter] = toLetter
    }
    return true
}

describe('canReconfigure', () => {
    it('canReconfigure must be a function', () => {
        expect(typeof canReconfigure).toBe('function')
    })
    it('should throw an error first param is missing', () => {
        expect(() => canReconfigure()).toThrow()
    })
    it('should throw an error first param is not a string', () => {
        expect(() => canReconfigure(8)).toThrow()
    })
    it('should throw an error second param is not a string', () => {
        expect(() => canReconfigure('a', 4)).toThrow()
    })
    it('should return a boolean', () => {
        expect(typeof canReconfigure('a', 'b')).toBe('boolean')
    })
    it('should return false if provided strings have different length', () => {
        expect(canReconfigure('aa', 'b')).toBeFalsy();
    })
    it('should return false if strings provided have different number of uniques characters', () => {
        expect(canReconfigure('abc', 'ddd')).toBeFalsy();
    })
    it('should return false if strings provided have different order of transformation', () => {
        expect(canReconfigure('XBOX', 'XXBO')).toBeFalsy();
    })
})