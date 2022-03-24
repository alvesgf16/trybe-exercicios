"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
function convert(value, fromUnit, toUnit) {
    const exponent = (toUnit - fromUnit);
    return value * (10 ** exponent);
}
;
function exec(units) {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const fromUnit = readline_sync_1.default.keyInSelect(units, 'Escolha uma unidade base: ');
    const toUnit = readline_sync_1.default.keyInSelect(units, 'Escolha uma unidade de conversão: ');
    const convertedValue = convert(value, fromUnit, toUnit);
    console.log(`${value}${units[fromUnit]} é igual a ${convertedValue}${units[toUnit]}`);
}
exports.exec = exec;
exports.default = { exec };
