class efect{
    constructor(){
       this.begin()

    }
    begin(){
        
         let element = document.querySelectorAll('.c1')
         let boxs = document.querySelectorAll('.square')

        //  let carousel = document.querySelector('.carousel')

         this.ExtractExecut(element,'off1','on1');
         this.ExtractExecut(boxs,'off1','on1');
         
        //  this.addEfect(carousel,'carouselEfectOff')

        //  window.onload = function(){

         
        //         this.removeEfect(carousel,off)
        //         this.addEfect(carousel,on)
        //  }
             
 
         
    }

    // Add Efect
    addEfect(element,efect){

        element.classList.add(efect)
    }
    // Remove Efect
    removeEfect(element,efect){
        element.classList.remove(efect)
    }

    ExtractExecut(element,off,on){
        element.forEach(el => {
             
            this.addEfect(el,off)
           
            window.addEventListener('scroll',()=>{

               if(el.getBoundingClientRect().top < window.innerHeight + 50){

                   this.removeEfect(el,off)
                   this.addEfect(el,on)
               }
           })
            
         });
    }
}

window.efects = new efect