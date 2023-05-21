// https://stackoverflow.com/questions/64756805/when-hover-over-img-all-other-images-blur-using-css-nothover
var wrp = document.getElementById('pt');
var img = wrp.getElementsByTagName('div');
for (var i = 0; i < img.length; i++) {
    // img[i].addEventListener("mouseover", function () { setEffect(); });
    img[i].addEventListener("mouseover", function () { setEffect(this); });
    img[i].addEventListener("mouseout", resEffect);
};
function setEffect(el) {
    for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('style', 'filter: blur(15px);');
    };
    el.removeAttribute('style');
}
function resEffect() {
    for (var i = 0; i < img.length; i++) {
        img[i].removeAttribute('style');
    };
}




function setEffect1(block) {
    var k=block
    // console.log(k);
    // console.log(typeof(k));

    
    for (var i = 0; i < img.length; i++) {
        if (img[i].classList.contains(k)) {   
        }
        else{
            img[i].setAttribute('style', 'filter: blur(15px);');
        }
    };
    
    el.removeAttribute('style');
}
const element21 = document.querySelector("#list21");
const element22 = document.querySelector("#list22");
const element23 = document.querySelector("#list23");
const element24 = document.querySelector("#list24");

element21.addEventListener("mouseover", function () { setEffect1("s"); });
element22.addEventListener("mouseover", function () { setEffect1("p"); });   
element23.addEventListener("mouseover", function () { setEffect1("d"); });   
element24.addEventListener("mouseover", function () { setEffect1("f"); });   

element21.addEventListener("mouseout", resEffect);
element22.addEventListener("mouseout", resEffect);
element23.addEventListener("mouseout", resEffect);
element24.addEventListener("mouseout", resEffect);

const elementyesm11 = document.querySelector("#yesm11");
const element11 = document.querySelector("#list11");
const element12 = document.querySelector("#list12");
const element13 = document.querySelector("#list13");
const element14 = document.querySelector("#list14");
const element15 = document.querySelector("#list15");
elementyesm11.addEventListener("mouseover", function () { setEffect1("yesm"); });
element11.addEventListener("mouseover", function () { setEffect1("am"); });
element12.addEventListener("mouseover", function () { setEffect1("aem"); });   
element13.addEventListener("mouseover", function () { setEffect1("trm"); });   
element14.addEventListener("mouseover", function () { setEffect1("ptrm"); });  
element15.addEventListener("mouseover", function () { setEffect1("meta"); });  
elementyesm11.addEventListener("mouseout", resEffect);
element11.addEventListener("mouseout", resEffect);
element12.addEventListener("mouseout", resEffect);
element13.addEventListener("mouseout", resEffect);
element14.addEventListener("mouseout", resEffect); 
element15.addEventListener("mouseout", resEffect); 

const elementnonm31 = document.querySelector("#nonm31");
const element31 = document.querySelector("#list31");
const element32 = document.querySelector("#list32");
const element33 = document.querySelector("#list33");
const element34 = document.querySelector("#list34");
const element35 = document.querySelector("#list35");
elementnonm31.addEventListener("mouseover", function () { setEffect1("nonm"); });
element31.addEventListener("mouseover", function () { setEffect1("rnonm"); });
element32.addEventListener("mouseover", function () { setEffect1("halo"); });   
element33.addEventListener("mouseover", function () { setEffect1("ng"); });   
element34.addEventListener("mouseover", function () { setEffect1("f"); });   
elementnonm31.addEventListener("mouseout", resEffect);
element31.addEventListener("mouseout", resEffect);
element32.addEventListener("mouseout", resEffect);
element33.addEventListener("mouseout", resEffect);
element34.addEventListener("mouseout", resEffect); 
element35.addEventListener("mouseout", resEffect);

const element41 = document.querySelector("#list41");
const element42 = document.querySelector("#list42");
const element43 = document.querySelector("#list43");
element41.addEventListener("mouseover", function () { setEffect1("la"); });
element42.addEventListener("mouseover", function () { setEffect1("ac"); });
element43.addEventListener("mouseover", function () { setEffect1("Unknown"); });
element41.addEventListener("mouseout", resEffect); 
element42.addEventListener("mouseout", resEffect);
element43.addEventListener("mouseout", resEffect);