'use strict';
let data=document.getElementById("name")
data.addEventListener('click',()=> data.style.visibility='hidden' )
document.onkeydown = function iziz(iz)
    {
        if (iz.keyCode == '32') {
            data.style.display='none';
        }
    };

