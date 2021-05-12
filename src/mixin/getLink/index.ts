export const getLink = {
    methods:{
        getLink(name:string, parentName:string):string{
            return `/${parentName}/`+name.toLowerCase()
        }
    }
}