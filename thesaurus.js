const unirest=require('unirest');

var obj={
            found : false,
            type : []
        };

module.exports = function(word, cb, api_key) {

    if( !api_key ) {
        throw new Error('Inappropriate or no API key found');
        cb(obj);
    }

    unirest.get("http://words.bighugelabs.com/api/2/"+api_key+"/"+word.trim()+"/json")
    .header("Accept", "application/json")
    .end(function (res) {
        if(res.status==200)
        {
            obj.found=true;
            var result=JSON.parse(res.body);

            for(var i in result)
            {
                obj.type.push(i);
                obj.type[i]={synonyms:[],antonyms:[]};

                for(var j in result[i])
                {
                    if(j=="syn")
                    {
                        for(var k=0 in result[i][j])
                        {
                            obj.type[i].synonyms.push(result[i][j][k]);
                        }
                    }
                    if(j=="ant")
                    {
                        for(var k=0 in result[i][j])
                        {
                            obj.type[i].antonyms.push(result[i][j][k]);
                        }
                    }
                }
            }
        }
        else
        {
            obj.found=false;
        }

        var temp=[];

        for(var i in obj.type)
        {
            if(obj.type[i] instanceof Object)
            {
                temp[i]=obj.type[i];
            }
        }
        obj.type=temp;
        cb(obj);
    });
};
