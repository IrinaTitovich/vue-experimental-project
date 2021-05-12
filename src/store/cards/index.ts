import { Getters, Mutations, Actions, Module,createMapper } from 'vuex-smart-module'


export interface ICard{
    name:string,
    img:string,
    price:number,
    count:number,
    date?:string
}

class CardsState{
    cards:ICard[]=[
        {
            name:'Egypt',
            img:'https://www.orizonholidays.com/wp-content/uploads/2020/01/EGYPT-H.jpg',
            price:1000,
            count:0
        },
        {
            name:'Thailand',
            img:'https://lp-cms-production.imgix.net/2021-03/GettyRF_178111904.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
            price:2000,
            count:0
        },
        {
            name:'Indonesia',
            img:'https://eco-business.imgix.net/uploads/ebmedia/fileuploads/12183714455_2d7a7924bb_z.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440',
            price:3000,
            count:0
        },
        {
            name:'Cuba',
            img:'https://lp-cms-production.imgix.net/image_browser/yank-tank-cuba-shutterstockRF_458802364.jpg',
            price:4000,
            count:0
        },
        {
            name:'Mexica',
            img:'https://www.islandlifemexico.com/wp-content/uploads/2021/01/Island-Life-Mexico-Yucatan-Best-Blog-11.jpg',
            price:5000,
            count:0
        },
    ]
}
class CardsGetters extends Getters<CardsState>{
    get cards():ICard[]{
        return this.state.cards
    }
    getCard(name:string):ICard|undefined{
        return this.state.cards.find(i=>i.name.toLowerCase()===name)
    }
}
class CardsMutations extends Mutations<CardsState>{
    incrementCount(name:string):void{
        const card = this.state.cards.find(i=>i.name===name)
        if(card){
            card.count=card.count+1
        }  
    }
    decrementCount(name:string):void{
        const card = this.state.cards.find(i=>i.name===name)
        if(card){
            card.count=card.count-1
        }  
    }
    zeroCount(name:string):void{
        const card = this.state.cards.find(i=>i.name===name)
        if(card){
            card.count=0
        } 
    }
    addNewCard(card:ICard):void{
        console.log(card)
        this.state.cards.push(card)
    }

}
class CardsActions extends Actions<
    CardsState,
    CardsGetters,
    CardsMutations,
    CardsActions
>{
    
}

export const cards = new Module({
    state:CardsState,
    getters:CardsGetters,
    mutations:CardsMutations,
    actions: CardsActions
})

export const cardsMapper=createMapper(cards)
