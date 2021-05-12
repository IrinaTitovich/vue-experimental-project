import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module'
import {ICard} from '../cards'

class TripsState{
    trips:ICard[]=[]
}
class TripsGetters extends Getters<TripsState>{
    get trips():ICard[]{
        return this.state.trips
    }
    getCard(name:string):ICard|undefined{
        return this.state.trips.find(i=>i.name.toLowerCase()===name)
    }
}
class TripsMutations extends Mutations<TripsState>{
    addTrip(trip:ICard):void{
        const tripClone = Object.assign({},trip)
        this.state.trips.push(tripClone)
    }
}

class TripsActions extends Actions<
    TripsState,
    TripsGetters,
    TripsMutations,
    TripsActions
>{
    
}
export const trips = new Module({
    state:TripsState,
    getters:TripsGetters,
    mutations:TripsMutations,
    actions: TripsActions
})

export const tripMapper= createMapper(trips)