const applyRoutes = (app) =>{
    app.get('/', (req, res)=>{
        res.send(`API is running fine`);
    });
    //create user 
    app.post('/user', (req, res)=>{
        res.send(`user is created`);
    });
    //login API
    app.post('/login', (req, res)=>{
        res.send(`user successfull login`);
    });
    // channel
    app.post('/channel', (req, res)=>{
        res.send(`channel`);
    });
    //search-user
    app.get('/search-user', (req, res)=>{
        res.send(`search user`);
    });
    // chaanel-list
    app.get('/channel-list', (req, res)=>{
        res.send(`channel list`);
    });
    //send-messages
    app.post('/message', (req, res)=>{
        res.send(`messages`);
    })
}
export default applyRoutes;