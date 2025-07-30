const express = require('express');
require('dotenv').config({path:'env.env'});

const app = express();
const proxy = require('http-proxy-middleware');
const apiProxyTarget = process.env.API_PROXY_TARGET;

app.use(express.static('public'));

if (apiProxyTarget) {
    app.use('/graphql', proxy.createProxyMiddleware({target: apiProxyTarget}));
}

app.listen(3000,  () => {
    console.log('App started on port 3000');
});
