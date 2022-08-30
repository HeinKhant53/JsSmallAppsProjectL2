var getimgs = document.querySelectorAll('.img');
// console.log(getimgs); 
// NodeList (9)

var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');
// console.log(btnclose) 
{/* <span class="btn-close">×</span> */}

for(var x=0; x<getimgs.length; x++){
    getimgs[x].addEventListener('click',function(){
        shownow(this);
    })
}
function shownow(img){
    // console.log(img);
    // console.log(img.src);
    // console.log(img.alt);

    getmodal.style.display = "block";
    getmodalimg.src= img.src;
    getcaption.textContent = img.alt
}


// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = 'none';
// })

getbtnclose.onclick =function(){
    getmodal.style.display = 'none';
};

document.addEventListener('click',function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = 'none';
    }
})