"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const options = ['length', 'mass', 'capacity', 'area', 'volume'];
const script = readline_sync_1.default.keyInSelect(options, 'Qual conversão você deseja realizar?');
require(`./${options[script]}`);
