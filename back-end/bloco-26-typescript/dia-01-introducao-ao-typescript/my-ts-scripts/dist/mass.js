"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = {
    kg: 1000,
    hg: 100,
    dag: 10,
    g: 1,
    dg: 0.1,
    cg: 0.01,
    mg: 0.001,
};
function convert(value, baseUnit, conversionUnit) {
    return value * (units[baseUnit] / units[conversionUnit]);
}
;
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const options = Object.keys(units);
    const baseUnitInput = readline_sync_1.default.keyInSelect(options, 'Escolha uma unidade base: ');
    const baseUnit = options[baseUnitInput];
    const conversionUnitInput = readline_sync_1.default.keyInSelect(options, 'Escolha uma unidade de conversão: ');
    const conversionUnit = options[conversionUnitInput];
    const convertedValue = convert(value, baseUnit, conversionUnit);
    return `${value}${baseUnit} é igual a ${convertedValue}${conversionUnit}`;
}
exports.exec = exec;
