// Proving import
import { config } from 'dotenv'
config()

import { getDay } from './data';
import { log } from './utils';

const main = async () => {
    for (let year = 2015; year <= 2022; year++) {
        for (let day = 1; day <= 25; day++) {

            const data = await getDay(year)(day)
            if (true) { // TODO: check for filepath which has logic to solve based on data
                log(`No solution found for ${year}/${day}`)
                continue
            }

        }


    }
}
main()