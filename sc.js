var b= [];  
$(document).ready(function (){
    $.ajax({
    	url: "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json",
    	type: "GET",
    	dataType: "json",
    	success: function(datos){

            console.log(datos);  

            $("#sanchez").empty();   
  
                $(datos).each(function(index,element){
                   
                    $("#aqui").append('<option>' + element.departamento + '</option>'); 
                      
                    $( "#aqui" ).click(function() { 
          
                         if(($("#aqui").val() == element.departamento)){
                                $("#sanchez").empty();
                                $(element.ciudades).each(function(index2,element2){
                                $("#sanchez").append('<option>' + element2 + '</option>'); 
                              });
                          
                           }
                       
                    });
                });    
                $("#sanchez").prop('disabled',false);
    	}
    });  
}); 

 
			