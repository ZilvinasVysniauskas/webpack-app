import { wizzard } from "./wizzard";
import {barbarian} from './barbarian'

function getClasses() {
    console.log(wizzard);
    console.log(barbarian);
}

const obj = { a: 'letter a', b: 'letter b'}
const objB = { ...obj, a: 'A', c: "C"}

console.log(objB)

export default getClasses