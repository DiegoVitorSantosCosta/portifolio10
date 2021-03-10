class efect{
    constructor(){
       this.begin()

    }
    begin(){
         let element = document.querySelectorAll('.c1')
         let boxs = document.querySelectorAll('.square')
         let boxsLeft = document.querySelectorAll('.left')
         let h1 = document.querySelectorAll('.h1')
         let wpp = document.querySelector('.wpp')
         this.logo = document.querySelector('.logoTop')

        this.wppEfect(wpp)

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
    wppEfect(el){
        setInterval(() => {
            this.addEfect(el,'wp')
        }, 1000 * 2);

        // setTimeout(() => {
        //     this.addEfect(el,'wp')
        // },1000 * 2);
      
    }
   
}

class Slider{
    constructor(){

        
        this.sliders = document.querySelectorAll("[data-js='carousel__item']")
        this.index = 0
        
        this.begin()

        }
      click(click){

        click.addEventListener('click',()=>{
      

            if(click.classList == 'next'){

            if(this.sliders.length -1 === this.index ){
                this.index = 0
               
            }else{
                this.index ++
               
            }

              }
              else{

                if(this.index === 0 ){
                    
                    this.index = this.sliders.length -1
                   
                }else{
                    this.index --
                   
                }

              }
            this.extractAddEfect(this.sliders,'carousel__item--visible')
           
                this.sliders[this.index].classList.add('carousel__item--visible')
    })
      
      }

  begin(){
  

    let preview = document.querySelector('.preview')
    let next = document.querySelector('.next')

    this.click(preview)
    this.click(next)

 
}  
extractAddEfect(elements,efect){
    elements.forEach(element=>{
        element.classList.remove(efect)
    })

}

}
window.slider = new Slider()

window.efects = new efect

