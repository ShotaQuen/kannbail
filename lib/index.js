"use strict"
const chalk = require('chalk')
 const art = [
  "██╗██╗  ██╗░█████╗░███╗░░██╗███╗░░██╗",
  "██║██║ ██╔╝██╔══██╗████╗░██║████╗░██║",
  "██║█████═╝ ███████║██╔██╗██║██╔██╗██║",
  "██║██╔═██╗ ██╔══██║██║╚████║██║╚████║",
  "██║██║░╚██╗██║░░██║██║░╚███║██║░╚███║",
  "╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚══╝"
];

// Warna gradient: biru tua -> biru muda -> putih
const colors = [
  '#000080', // Navy (biru tua)
  '#1E90FF', // DodgerBlue
  '#87CEFA', // LightSkyBlue
  '#ADD8E6', // LightBlue
  '#E6F2FF', // Biru sangat muda
  '#FFFFFF'  // Putih
];

let output2 = "";
const maxPos = art.length + art[0].length - 2;

for (let y = 0; y < art.length; y++) {
  for (let x = 0; x < art[y].length; x++) {
    const pos = (x + y) / maxPos; // 0-1
    
    // Pilih warna berdasarkan posisi
    let color;
    if (pos < 0.33) {
      // Fase biru tua -> biru medium
      const phase = pos / 0.33;
      color = interpolateColor(hexToRgb(colors[0]), hexToRgb(colors[1]), phase);
    } else if (pos < 0.66) {
      // Fase biru medium -> biru muda
      const phase = (pos - 0.33) / 0.33;
      color = interpolateColor(hexToRgb(colors[1]), hexToRgb(colors[3]), phase);
    } else {
      // Fase biru muda -> putih
      const phase = (pos - 0.66) / 0.34;
      color = interpolateColor(hexToRgb(colors[3]), hexToRgb(colors[5]), phase);
    }
    
    output2 += chalk.hex(color)(art[y][x]);
  }
  output2 += "\n";
}

// Helper functions
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function interpolateColor(start, end, factor) {
  const r = Math.round(start.r + (end.r - start.r) * factor);
  const g = Math.round(start.g + (end.g - start.g) * factor);
  const b = Math.round(start.b + (end.b - start.b) * factor);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
console.log(output2)
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k
var desc = Object.getOwnPropertyDescriptor(m, k)
if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
desc = { enumerable: true, get: function() { return m[k] } }
}
Object.defineProperty(o, k2, desc)
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k
o[k2] = m[k]
}))
var __exportStar = (this && this.__exportStar) || function(m, exports) {
for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p)
}
var __importDefault = (this && this.__importDefault) || function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod }
}
Object.defineProperty(exports, "__esModule", { value: true })
exports.proto = exports.makeWASocket = void 0
const WAProto_1 = require("../WAProto")
Object.defineProperty(exports, "proto", { enumerable: true, get: function () { return WAProto_1.proto } })
const Socket_1 = __importDefault(require("./Socket"))
exports.makeWASocket = Socket_1.default
__exportStar(require("../WAProto"), exports)
__exportStar(require("./Utils"), exports)
__exportStar(require("./Types"), exports)
__exportStar(require("./Store"), exports)
__exportStar(require("./Defaults"), exports)
__exportStar(require("./WABinary"), exports)
__exportStar(require("./WAM"), exports)
__exportStar(require("./WAUSync"), exports)
exports.default = Socket_1.default
