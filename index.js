var MongoClient=require('mongodb').MongoClient;
var URL="mongodb+srv://ZahedMongo:0D8putbAgHJfJtr1@cluster0.agrwzim.mongodb.net/?retryWrites=true&w=majority"
// var config={useUndifiedTopology:true};



MongoClient.connect(URL,function(error,MyMongoClient){
    if(error){
        console.log("Connection Fail!");
    }
    else{
        console.log("Connection Success!");
        // InserData(MyMongoClient);
        // DeleteOneItem(MyMongoClient);
        // DeleteAllItem(MyMongoClient);
        // FindOneDataWithoutConditions(MyMongoClient);
        // FindWithOneConditions(MyMongoClient);

        // FindAllData(MyMongoClient);

        // FindAllDataByProjection(MyMongoClient);
        // FindAllDataByQuery(MyMongoClient);
        // FindAllDataByLimit(MyMongoClient);
        // FindAllDataBySort(MyMongoClient);
        // UpdateMyData(MyMongoClient);
        // CreateMyCollection(MyMongoClient);
        DeleteMyCollection(MyMongoClient);


    }
});


// Data Insert Functions

function InserData(MyMongoClient){
      var Mydatabase=  MyMongoClient.db("school");
     var MyCollections= Mydatabase.collection('students')

    var Mydata={name:"Nazmul",Roll:"754",department:"CSE",institute:"DU"}
    MyCollections.insertOne(Mydata,function(error){
            if(error){
                console.log("Data Insert Fail");
            }
            else{
             console.log("Data Insert Success!");
            }

    })

}

// Delete Data function delete one item

function DeleteOneItem(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');
    var DeleteItem={Roll:"75"}

    MyCollections.deleteOne(DeleteItem,function(error){

        if(error){
            console.log("Data cant Delete!")
        }
        else{
            console.log("Data Deleted!");
        }
    });
}

// Delete All data


function DeleteAllItem(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');

    MyCollections.deleteMany(function(error,Resultobj){
        if(error){
            console.log("Something is error");
        }
        else{
            console.log(Resultobj);
        }
    })
}

// Data Find Method

// findOne()
// find()=> mane all


// Find without one conditions
// function FindOneDataWithoutConditions(MyMongoClient){
//     var Mydatabase=MyMongoClient.db("school");
//     var MyCollections=Mydatabase.collection('students');

//     var findobj={}
//     MyCollections.findOne(findobj,function(error,result){

//         console.log(result);
//     })
// }

// find with one conditions
function FindWithOneConditions(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');

    var findobj={"Roll":"324"}
    MyCollections.findOne(findobj,function(error,result){

        console.log(result);
    })
}



function FindAllData(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');
    MyCollections.find().toArray(function(error,result){  //array akare data pawa
        console.log(result);
    })
}

// Projection Method specific Column or data ke select kora

function FindAllDataByProjection(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');
    var Itemobj={}
    // var ItemProjection={projection:{Roll:1}}
     var ItemProjection={projection:{name:1,department:1}}

    MyCollections.find(Itemobj,ItemProjection).toArray(function(error,result){
        console.log(result);
    })
}

// Find With Query

function FindAllDataByQuery(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');
    // var Itemobj={}
    // var ItemProjection={projection:{Roll:1}}
     var Query={name:"Rakib Hasan",institute:"DIU",department:"EEE"}

    MyCollections.find(Query).toArray(function(error,result){
        console.log(result);
    })
}

// Limited data select

function FindAllDataByLimit(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');
    

    MyCollections.find().limit(15).toArray(function(error,result){
        console.log(result);
    })
}

// Find() with sort

function FindAllDataBySort(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');
    
    var SortPattern={department:-1}

    MyCollections.find().sort(SortPattern).toArray(function(error,result){
        console.log(result);
    })
}

// Update value

function UpdateMyData(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    var MyCollections=Mydatabase.collection('students');
    
    var MyQuery={Roll:"6"};
    var MyNewValues={$set:{name:"Asifur Rahman",department:"HomeEconomics"}}

    MyCollections.updateOne(MyQuery,MyNewValues,function(error,result){
        console.log(result);
    })
   

  
}

// create new table/collections

function CreateMyCollection(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");
    Mydatabase.createCollection("teachers",function(error,result){
        console.log(result);
    });
}

// Delete Collections



function DeleteMyCollection(MyMongoClient){
    var Mydatabase=MyMongoClient.db("school");

    Mydatabase.dropCollection("teachers",function(error,result){
        console.log(result);
    });
}