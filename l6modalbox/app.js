var getbtnmodal = document.getElementById('btn-modal');
var getmodalbox = document.getElementById('loginmodal');
var getbtnclose = document.querySelector('.btn-close');

getbtnmodal.addEventListener('click',function(){
    openmodal();
});

getbtnclose.addEventListener('click',closemodal);
// closemodal() --> repeat running


window.onclick = function(e){
    if(e.target === getmodalbox){
        closemodal();
    }
};


function openmodal(){
    getmodalbox.style.display = 'block';
}

function closemodal(){
    getmodalbox.style.display = 'none';
}