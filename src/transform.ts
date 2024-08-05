import * as fs from "node:fs";
import * as path from "node:path";
import * as swc from "@swc/core";
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const INPUT_FILE_PATH = path.resolve(__dirname, './input.ts')
const OUPUT_FILE_PATH = path.resolve(__dirname, './output.js')

const output = await swc.transformFile(INPUT_FILE_PATH)

fs.writeFileSync(OUPUT_FILE_PATH, output.code)