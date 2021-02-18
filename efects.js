class efect{
    constructor(){
       this.begin()

    }
    begin(){
        
         let element = document.querySelectorAll('.c1')
         let boxs = document.querySelectorAll('.square')
         let boxsLeft = document.querySelectorAll('.left')
         let h1 = document.querySelectorAll('.h1')

        //  let carousel = document.querySelector('.carousel')

         this.ExtractExecut(element,'off1','on1');
         this.ExtractExecut(boxs,'off1','on1');
         this.ExtractExecut(boxsLeft,'off2','on2');
         this.ExtractExecut(h1,'off2','on2')
         
        
             
 
         
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