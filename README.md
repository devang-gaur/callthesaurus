# callthesaurus
A module aimed at exploring the thesaurus of a word.  
Why the name "callthesaurus" ? Well, the package exposes a callback function to facilitate the manipulation of the  javascript object which bears the response of the function call. So, callback + thesaurus = callthesaurus .  

#NPM

    npm install callthesaurus  


#Example

var thesaurus=require('callthesaurus');

thesaurus("cold",function(obj){  
    console.log(obj);  
});  

####Output:

{  
    found : true,  
    type :  
    [adjective:{synonyms:['slate','frigid',.....],antonyms:['hot']},  
        noun:{synonyms:['common cold','coldness','low temperature'.....],antonyms:[hotness]}  
    ]  
}
