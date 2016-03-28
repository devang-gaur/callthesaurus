# callthesaurus

    A simple package aimed at exploring the thesaurus of a word.  
    Why the name "callthesaurus" ? Well, the package exposes a callback function to facilitate the manipulation of the  javascript object which bears the response of the function call. So, callback + thesaurus = callthesaurus .  

#NPM

    npm install callthesaurus  


####Getting started

    The package uses the api: http://words.bighugelabs.com/api.php  
    You're required to get an API KEY for your own app.

####Example

    var thesaurus=require('callthesaurus');

	var myFun = function(obj){  
        console.log(obj);  
    }
	
    thesaurus("cold", myFun, API_KEY);  

######Output:

    {  
        found : true,  
        type :  [
            adjective:{
                synonyms:['slate','frigid',.....],
                antonyms:['hot']
            },  
            noun:{
                synonyms:['common cold','coldness','low temperature'.....],
                antonyms:[hotness]
            }  
        ]  
    }
