const http=require("http")
const server =http.createServer(function(_req,res){
  res.writeHead(200 ,"Content-type:text/html")
res.end("<h1>  será melhor o express?</h1>")
})
const porta = 3456
server.listen(porta , function(){
  console.log("escutando a ${porta}")
})
