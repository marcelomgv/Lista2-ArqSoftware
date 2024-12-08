import FileReader from './FileReader.js';

export default class CitiesReporter {

  //Instância única de CitiesReporter (Singleton)
  static singletonCitiesReporter = null

  constructor({ formaterStrategy }) {
    if (CitiesReporter.singletonCitiesReporter) {
      return CitiesReporter.singletonCitiesReporter
    }

    this._formaterStrategy = formaterStrategy;
    CitiesReporter.singletonCitiesReporter = this
  }

  //Método misturava responsabilidades de leitura, parsing de JSON e formatação (SRP)
  //Implementação da classe FileReader para leitura e parsring de JSON
  report(filename) {
    const cities = FileReader.readAndParseJSON(filename)
    return this._formaterStrategy.output(cities);
  }

  //Obtenção da instância única do CitiesReporter (Singleton)
  static getInstancia({ formaterStrategy }) {
    if (!CitiesReporter.singletonCitiesReporter) {
      CitiesReporter.singletonCitiesReporter = new CitiesReporter({ formaterStrategy });
    }
    return CitiesReporter.singletonCitiesReporter;
  }
}