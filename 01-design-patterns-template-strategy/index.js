
import ClasseFacade from './src/Facade.js'

const [cmd, script, param1] = process.argv
console.log(param1)
const facade = new ClasseFacade()

facade.defineEstrategia(param1)
output = facade.relatorio()

console.log(output);






