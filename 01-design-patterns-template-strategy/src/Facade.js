import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';
import CitiesReporter from './CitiesReporter.js';

export default class Facade{
    
    constructor(){
        this.FormaterTXT = new FormaterTXT()
        this.FormaterHTML = new FormaterHTML()
        this.fileName = '../data/cidades-2.json'
    }

    defineEstrategia(estrategia){
        if(estrategia == 'html'){
            this.CitiesReporter = new CitiesReporter({formaterStrategy: this.FormaterHTML})
        }
        else if(estrategia == 'txt'){
            this.CitiesReporter = new CitiesReporter({formaterStrategy: this.FormaterTXT})
        }
        else{
            // Implementar erro
        }
    }

    relatorio(){
        return this.CitiesReporter.report(this.fileName);
    }




}