import {cards} from '../cards'
import {trips} from '../trips'
import { Module} from 'vuex-smart-module'

export const root = new Module({
    modules: {
        cards,trips
    }
})