---
title: 'Nodejs Tutorial: Making CORS Middleware'
date: '2020-11-15'
author: 'Vantol Bennett'
tags: ['nodejs', 'javascript']
---
# Titian Look: CORS
If you have been coding for a while in the javascript sphere or any general web based application, CORS or Cross Origin
Resource Share should be familiar to you. If not, CORS Cross-origin resource sharing (CORS) is a mechanism that allows 
restricted resources on a web page to be requested from another domain outside the domain from which the first resource
 was served. Basically if you if two different domain e.g. localhost:5000 api backend and a frontend running on a different 
 server such as localhost:3000 then that front end cannot access the resources the API can used to retrieve or update.
 It is through the use setting the header we can simulate this during development. 
 
In most cases when you build an API it uses some form of Nodejs framework such as Express.js that easily provides foundation for the
backend and through this we can add external modules that can be used to make development easy. One such module is the CORS package
which is easily add by:

## Usage
````
npm install cors
````
### Middleware
``
app.use(cors())
``


Thats it! And we are done but what if you wanted to just do it yourself with external help?

````
function cors (req, res, next) {
    const origin = req.headers.origin
    res.setHeader('Access-Control-Allow-Origin', origin || '*")
    res.setHeader('Access-Control-Allow-Origin', 'POST, GET, PUT, DELETE, OPTIONS, XMODIFY)
     res.setHeader('Access-Control-Allow-Credentials', 'true')
     res.setHeader('Access-Control-Max-Age', '86400')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    next()
    }
````

Then we add that using app.use(middleware.cors). As you can see we set a bunch of CORS headers and browsers are very specific
about these things. For more information on CORS you can check out MDN.