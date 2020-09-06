var b= [];  
$(document).ready(function (){
    $.ajax({
    	url: "https://www.datos.gov.co/resource/xdk5-pm3f.json",
    	type: "GET",
    	dataType: "json",
    	success: function(datos){
            var a =[];
             
            
         $(datos).each(function(index,element){

              if(a[element.c_digo_dane_del_departamento] == null){
                var dep = new Object();
                dep.nombre=element.departamento;
                dep.municipio=[];
                dep.municipio.push(element.municipio);
                a[element.c_digo_dane_del_departamento]=dep;
              }else {
                a[element.c_digo_dane_del_departamento].municipio.push(element.municipio);
              }
            
            });
         console.log(a);
         $(a).each(function(index,element){
             if(a[index] != null){
                b.push(a[index]);
               
               }
            });
         b.sort(function (a, b) {
                  if (a.nombre > b.nombre) {
                    return 1;
                  }
                  if (a.nombre < b.nombre) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                });

         $(b).each(function(index,element){
             $("#aqui").append('<option>' + b[index].nombre + '</option>'); 
            });
         
    	}
    });
    $( "#aqui" ).click(function() {
         $("#sanchez").empty();
         
         $(b).each(function(index,element){  

                if($("#aqui").val() == element.nombre){

                     $(element.municipio.sort()).each(function(index,element){
                           $("#sanchez").append('<option>' + element + '</option>'); 
                      });
                }
            });
         $("#sanchez").prop('disabled',false);   
    });
}); 

 
			