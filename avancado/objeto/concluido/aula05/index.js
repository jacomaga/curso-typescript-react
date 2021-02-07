const objA = {chaveA:'A'}
const objB = {chaveA:'B'}
const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)