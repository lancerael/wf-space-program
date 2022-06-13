const LETTERS = 'abcdefghijklm0123456'
const TIMESTAMP_INDEX = 12

export const generateKey = (length = 15): string => Array(length).fill('').map(() => {
  const jsRandom = Math.floor((Math.random() * 10) + 1)
  const trulyRandom = +`${+new Date()}`[TIMESTAMP_INDEX]
  return LETTERS[jsRandom+trulyRandom]
}).join('')
