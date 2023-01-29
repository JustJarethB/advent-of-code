import { resolve } from 'path'
import { readFileSync, existsSync, } from 'fs'
import { writeFile, mkdir } from 'fs/promises'
import { log } from './utils';
export const getDay = (year = (new Date()).getFullYear()) => async (day: number) => {
    log(`Asked for ${year} day ${day}`)
    const root = resolve(`./cache/${year}`)
    const file = (`${day}.txt`);
    const path = resolve(root, file)
    log(path)

    if (existsSync(path)) return readFileSync(path).toString()
    log("Requesting from server - no cache")
    const URL = `https://adventofcode.com/${year}/day/${day}/input`;
    const headers = { 'cookie': `session=${process.env.SESSION_TOKEN}` };
    log(headers)
    const response = await (await fetch(URL, { headers, })).text()
    saveFile(root, file, response)
    return response;
}
const saveFile = async (root: string, file: string, data: string) => {
    log(`Saving response to file ${file}`)
    await mkdir(root, { recursive: true })
    await writeFile(resolve(root, file), data)
}