const io = require("socket.io")(8800, {
    cors: {
        origin: "https://chat-app-sam.netlify.app"
    }
})

io.on("connection", (socket)=>{

    // console.log("A user has connected!");

    // listen for incoming message from the client side
    socket.on("message", msg=>{
        io.emit("message", msg);
    });


    // disconnect socket when the user disconnect
    socket.on("disconnect", ()=>{
        // console.log("A user has disconnected!")
    })
})