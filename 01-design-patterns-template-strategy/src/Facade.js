import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';
import CitiesReporter from './CitiesReporter.js';

export default class Facade {

    constructor() {
        this.FormaterTXT = new FormaterTXT()
        this.FormaterHTML = new FormaterHTML()
    }

    defineEstrategia(estrategia) {
        if (estrategia == 'html') {
            try {
                this.CitiesReporter = CitiesReporter.getInstancia({ formaterStrategy: this.FormaterHTML })
            } catch (error) {
                console.error(`Error: ${error.message}`);
                process.exit(1);
            }
        }
        else if (estrategia == 'txt') {
            try {
                this.CitiesReporter = CitiesReporter.getInstancia({ formaterStrategy: this.FormaterTXT })
            } catch (error) {
                console.error(`Error: ${error.message}`);
                process.exit(1);
            }
        }
        else {
            // Implementar erro
        }
    }

    relatorio(fileName) {
        return this.CitiesReporter.report(fileName);
    }
}