"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
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
