const http= require("http")
const PORT=3000
const host ="127.0.0.1"


const clients = [
    {id : 1 , name:"sana"},
    {id : 2 , name:"wadie"},
    {id : 3 , name:"riadh"},
    {id : 4 ,name:"meycem"},
    {id : 5 , name:"Ghada"},
];
//request get

const server =http.createServer((request, response)=> {
    if (request.method ==="GET" && request.url==="/client"){
        response.writeHead (200,{"content-type":"application/json"});
        response.end(JSON.stringify(clients));
    }

    //request post
    if (request.method ==="POST" && request.url==="/clients"){
    response.writeHead(201, {"content-Type": "application/json"})
    let body=""
    request.on("data", (chunk)=>{
    console.log(chunk, "this is chunk")
    body +=chunk
}).on("end", ()=>{
    clients.push(JSON.parse(body))
    response.end(JSON.stringify(clients))

})
}
// put request
if(request.method==="PUT" && request.url.includes("update"))
response.writeHead(201, {"content-Type": "application/json"})
let params=+request.url.splite("/")[2]
let index=0
for(let i=0; i<clients.length; i++) {
    if (clients[i].id === params) {
      index = i;
      element = clients[i];
    }
}
//request delete
if (request.method==="DELETE" && request.url.includes("delete")){
    response.writeHead(202, {"content-type":"application/json"})
    let deletedId = request.url.split("/")[2]
    console.log(typeof(deletedId))
    let index =0
    for (let i=0; i<clients.length; i++){
        if (clients[i].id ===+deletedId) index=i
    }
    let filtre = clients.splice(index,1)
    response.end(JSON.stringify(clients))
}
});

//
server.listen(PORT,host,()=>{
    console.log(`your server is now listing to http://${host}:${PORT}`)
});