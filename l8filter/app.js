var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// console.log(getli); //Html Collection
var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');


//1
getinput.addEventListener('keyup',filter);
//1
function filter(){
    // console.log(this.value);

    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);

    for(var x=0; x < getli.length; x++){
        // console.log(getli[x]);

        // console.log(getli[x].textContent);
        // console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());
        // console.log(getli[x].querySelectorAll('a')[0].innerText.toLowerCase());
        // console.log(getli[x].querySelector('a').innerText.toLowerCase());

        var getavalue = getli[x].children[0].innerHTML.toLowerCase();

        //index start 0
        if(getavalue.indexOf(inputfilter) > -1 ){
            getli[x].style.display = '';
        }else{
            getli[x].style.display = 'none';
        }
    }
}

//2
getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',sortingzam1);
getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);


//2 Method 1
function sortingazm1(){
    var lis = [];

    for(var x=0; x<getli.length; x++){
        // console.log(getli[x]);
        // console.log(getli[x].textContent);

        lis.push(getli[x].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.sort().reverse());

    var azlis = lis.sort();

    getul.innerHTML = '';

    azlis.forEach(function(azli){
        // console.log(azli);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        
        newlink.href = `javascript:void(0);`;

        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        
        getul.appendChild(newli);
    });

}

function sortingzam1(){
    var lis = [];
    
    for(var x=0; x<getli.length; x++){
        // console.log(getli[x].textContent);

        lis.push(getli[x].textContent);
    }

    var zalis = lis.sort().reverse();

    getul.innerHTML = '';

    zalis.forEach(function(zali){
        // console.log(zali);

        const newlink = document.createElement('a');
        newlink.href = `javascript:void(0);`;

        newlink.appendChild(document.createTextNode(zali));

        const newli = document.createElement('li');
        newli.appendChild(newlink);

        getul.append(newli);
    });
}

//Method 2

function sortingazm2(){

    console.log('hi');

    var shouldswitch = true;
    var switching = true;

    do{
        switching = false;

        var i = 0;
        for( i; i < getli.length-1; i++){
            //getli.length-1 --> getli[i+1] ka last index ma 21 ma ya aung
            shouldswitch = false;

            if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){
            // parentElement.insertBefore(new,current) & parentNode.insertBefore(new,current)

            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);

            switching = true;
        }

    }while(switching)
}


function sortingzam2(){
    var shouldswitch = true;
    var switching = true;

    while(switching){
        switching = false;

        var i = 0;
        for( i; i < getli.length-1; i++){
            shouldswitch = false;

            if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){

            getli[i].parentNode.insertBefore(getli[i+1],getli[i]);
            switching = true;
        }
    }
}





// console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());


// if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
//     console.log('true');
// }else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
//     console.log('equal');
// }else{
//     console.log('false');
// }

