var toggle = document.getElementById('checked');
var basic = document.querySelector('.price-1');
var professional = document.querySelector('.price-2');
var master = document.querySelector('.price-3');



toggle.addEventListener("click",function(){

   if(basic.innerHTML === "$19.99"  && professional.innerHTML === "$24.99" && master.innerHTML === "$39.99"){
        
        basic.textContent = "$199.99";
        professional.textContent = "$249.99";
        master.textContent = "$399.99";
   }else{
    basic.textContent = "$19.99";
    professional.textContent = "$24.99";
    master.textContent = "$39.99";
   }

})