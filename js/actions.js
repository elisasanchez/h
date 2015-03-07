var fn = {
    ready: function(){
       Docu.addEventListener('deviceready',fn.init,false); /*Indica que ya se cargaron todas la librerias*/
    }, 
    
    init: function(){
        var x = false;
        if(!x)
            window.location.href = "#registro";
        $('#registro a:eq(1)').tap(fn.registrar); /*debe desapareser los elementos*/
    }
    registrar: function() {
        var nom = $('#registro input:eq(0)').val(); /*regresa el valor del indice 0*/
        var mail = $('#registro input:eq(1)').val();
        var tel = $('#registro input:eq(2)').val();
        
        if(nom != '' && mail != '' && tel != '')
            alert(nom + ' - ' + mail + ' - ' + tel);
        else   
            navigator.notification.alert('Todos los campos requeridos ');
    
    
    }
};
$(fn.ready);
/*$(fn.init);*/

/* window.addEventListener("load",fn.init,false); */
/* $(document).ready(fn.init); */

/*
var nobj = $('div[rel=ayuda]');
nobj.ready(fn.init);*/

/*
function nombre() {
    return obj;
}

var nobj = nombre();
nobj.ready();
*/


