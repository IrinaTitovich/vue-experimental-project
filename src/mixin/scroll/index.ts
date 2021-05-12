export default{
    methods:{
        onScrollEnd(){
            console.log('scrollEnd')
        },
    onScroll(element:HTMLElement){
      const modalContent:HTMLElement=element
      if(modalContent.clientHeight+modalContent.scrollTop>=modalContent.scrollHeight){
          this.onScrollEnd()

      }
    }
  }
}