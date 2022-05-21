//JF.login(success, error) method takes two optional arguments
    //Both arguments should be function 
    //First argument will be called after successful login
    //Second argument will be called if authorization fails
    JF.login(

        function success(){
            JF.getForms(function(response){
                for(var i=0; i<response.length; i++){
                    document.write( "<li> " + response[i].title);
                }
            });
        },

        function error(){
            window.alert("Could not authorize user");
        }
    ); 

    var apiKey = JF.getAPIKey();
console.log(apiKey); //should log currently used API key

JF.initialize( {apiKey: "e439c6fe531b9b37317db2a77689e7b4"} ); 

JF.getForms(function(response){
    /**
     successful response including user forms array
     *
     */
    for(var i=0; i<response.length; i++){
        document.write(response[i].title);
    }
});