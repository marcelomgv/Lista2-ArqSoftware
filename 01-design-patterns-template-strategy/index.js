import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';

const [cmd, script, param1] = process.argv,
  filename = './data/cidades-2.json';

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT()
};

try {
  let reporter = CitiesReporter.getInstancia({
    formaterStrategy: formaterStrategies[param1]
  }),
    output = reporter.report(filename);

  console.log(output);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}