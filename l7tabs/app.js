var gettablinks = document.getElementsByClassName('tablinks');//Html Collection
var gettabpanes = document.getElementsByClassName('tabpane');

var getbtncloses =document.querySelectorAll('.btn-close'); //NodeList

//2
var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){
    
    // console.log(evn.target);
    // <button type="button" class="tablinks" onclick="gettab(event,'home')">Home</button>

    // for(var x=0; x < gettabpanes.length; x++){
    //     gettabpanes[x].style.display = 'none';
    // }

    //2
    tabpanes.forEach(function(tabpane){
        tabpane.style.display = 'none';
    });
    
    //4
    for(var x=0; x < gettablinks.length; x++){
        gettablinks[x].className = gettablinks[x].className.replace(' active','');

        //5
        getbtncloses[x].addEventListener('click',function(){
            this.parentElement.style.display = 'none';
        })
    }

    //1
    document.getElementById(linkid).style.display = 'block';


    //3
    // evn.target.className = "tablinks active";
    // evn.target.className += " active";
    // evn.target.className = evn.target.className.replace('tablinks','tablinks active');
    // evn.target.classList.add('active');

    // console.log(evn.target);
    // console.log(evn.currentTarget);
    evn.currentTarget.className += ' active';

}

//6
document.getElementById('autoclick').click(); //active 
