import ClasseFacade from './src/Facade.js'

const [cmd, script, param1] = process.argv,
  filename = './data/cidades-2.json';

const facade = new ClasseFacade()

try {
  facade.defineEstrategia(param1)
  const output = facade.relatorio(filename);
  console.log(output);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}