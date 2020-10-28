import './styles.css'

const faqCont = document.querySelectorAll('.faqcont');
const answer = document.querySelectorAll('.answer');
const checkImage = document.querySelectorAll('.image');


faqCont.forEach(element => {
    element.addEventListener('click', () => {
        faqCont.forEach(e => {
            if (element.classList.contains('bold')){
                e.classList.remove('bold');
                element.classList.remove('bold');
            } else {
                e.classList.remove('bold');
                element.classList.add('bold');
            }
        });
        
        answer.forEach(element2 => { 
            if (element2.parentElement == element.parentElement) {
                element2.classList.toggle('visible');
            } else {
                element2.classList.remove('visible');
            }
        });
        
        checkImage.forEach(element3 => {
            
            if (element3.parentElement.parentElement == element.parentElement){
                if (element3.classList.contains('rotateOpen')){
                    element3.classList.remove('rotateOpen');
                    element3.classList.add('rotateClose');
                } else {
                    element3.classList.add('rotateOpen');
                    element3.classList.remove('rotateClose');
                }
                element3.classList.toggle('rotate');
            } else {
                element3.classList.remove('rotate');
                element3.classList.remove('rotateOpen');
            }
        }); 
    })
});


