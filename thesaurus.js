const unirest=require('unirest');

var obj={
            found : false,
            type : "",
            synonyms : [],
            antonyms : []
        };

module.exports=function(word,cb){
    
    unirest.get("http://words.bighugelabs.com/api/2/179b92829817af021068cae049a071ea/"+word+"/json")
    .header("Accept", "application/json")
    .end(function (res) {

      if(res.status==200)
      {
        obj.found=true;
        var result=JSON.parse(res.body);
        for(var i in result)
        {
            obj.type=i;
            for(var j in result[i])
            {
                if(j=="syn")
                {
                    for(var k=0 in result[i][j])
                    {   
                        obj.synonyms.push(result[i][j][k]);
                    }
                }
                if(j=="ant")
                {
                    for(var k=0 in result[i][j])
                    {
                        obj.antonyms.push(result[i][j][k]);
                    }
                }
            }
        }
        
      }
      else
      {
       obj.found=false;
      }

      cb(obj);

    });
};