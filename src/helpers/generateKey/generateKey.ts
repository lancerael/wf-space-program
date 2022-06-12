const LETTERS = 'abcdefghijklm0123456'

export const generateKey = (length = 15): string => Array(length).fill('').map(() => {
  const jsRandom = Math.floor((Math.random() * 10) + 1)
  const trulyRandom = +`${+new Date()}`[`${+new Date()}`.length-1]
  return LETTERS[jsRandom+trulyRandom]
}).join('')