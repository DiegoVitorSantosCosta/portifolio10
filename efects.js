class efect{
    constructor(){
       this.begin()

    }
    begin(){
         let element = document.querySelectorAll('.c1')
         let boxs = document.querySelectorAll('.square')
         let boxsLeft = document.querySelectorAll('.left')
         let h1 = document.querySelectorAll('.h1')
         this.logo = document.querySelector('.logoTop')

        //  let carousel = document.querySelector('.carousel')

         this.ExtractExecut(element,'off7','on7');
         this.ExtractExecut(boxs,'off1','on1');
         this.ExtractExecut(boxsLeft,'off2','on2');
         this.ExtractExecut(h1,'off2','on2')


        //  para navbar melhorar o codico dps
        let check = document.querySelector('#check')
        this.ul = document.querySelector('.ulHeader')
        this.sobe()

            addEventListener('click',()=>{

                if(!check.checked){

                  this.sobe()
                }
                else{
                
                    this.desse()
                    
                }
             })
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

    sobe(){
        this.ul.classList.remove('show')
        this.ul.classList.add('hide')
    }
    desse(){
        this.ul.classList.add('show')
        this.ul.classList.remove('hide')
    }
}

window.efects = new efect

