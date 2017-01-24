var tmi = require('tmi.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "nuub_bot",
        password: "oauth:ukcymqhukytpyzi493cv8ji5k9eygn"
    },
    channels: ["nuubeeee"]

};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){
    if(message === "!twitter"){
        client.action("nuubeeee", "Twitter account: twitter.com/blah.com");
    }
    if(messsage === '!build'){
        client.action("nuubeeee", "Build can be found here: whateverurl.com");
    }
    //client.action("nuubeeee", user['display-name'] + " you are the biggest noob ever!");
});

client.on('connected', function(address, port){
    //console.log("Address: " +   address + " Port: " + port);
    client.action("nuubeeee", "Hello I'm a dummy bot for practice. Nuub on!");
});