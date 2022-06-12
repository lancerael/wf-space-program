import { generateKey } from './generateKey'


describe('generateKey', () => {

  it('generates a random Key with default chars', () => {
    const key1 = generateKey()
    const key2 = generateKey()
    expect(key1.length).toBe(15)
    expect(key2.length).toBe(15)
    expect(key1).not.toEqual(key2)
  })

  it('generates a random Key with 20 chars', () => {
    const key1 = generateKey(20)
    const key2 = generateKey(20)
    expect(key1.length).toBe(20)
    expect(key2.length).toBe(20)
    expect(key1).not.toEqual(key2)
  })

})