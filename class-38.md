# Readings: Bearer Authorization

## What can you do with an authorization code?


*
An authorization code is an alphanumeric password that authorizes its user to purchase, sell or transfer items, or to enter information into a security-protected space*


## What can you do with an access token?

*
Access tokens are the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user's data. Access tokens must be kept confidential in transit and in storage*


## What’s a benefit of using OAuth instead of your own basic authentication?


*It enables apps to obtain limited access (scopes) to a user's data without giving away a user's password. It decouples authentication from authorization and supports multiple use cases addressing different device capabilities. It supports server-to-server apps, browser-based apps, mobile/native apps, and consoles/TVs*

## Client ID

*
At registration the client application is assigned a client ID and a client secret (password) by the authorization server. The client ID and secret is unique to the client application on that authorization server. ... This redirect URI is used when a resource owner grants authorization to the client application*

## Authentication Endpoint

*
An authorization endpoint is an HTTP endpoint that micropub and IndieAuth clients can use to identify a user or obtain an authorization code (which is then later exchanged for an access token) to be able to post to their website*

## Access Token Endpoint

*
Access tokens are the thing that applications use to make API requests on behalf of a user. ... The token endpoint is where apps make a request to get an access token for a user. This section describes how to verify token requests and how to return the appropriate response and errors*


## API Endpoint

*
Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service*

## Authorization Code

*
The authorization code is a temporary code that the client will exchange for an access token. The code itself is obtained from the authorization server where the user gets a chance to see what the information the client is requesting, and approve or deny the request*

## Access Token
*
Access tokens are the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user's data. Access tokens must be kept confidential in transit and in storage*


## JWT

**JSON Web Token (JWT)** *is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.*

*Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.*


### When should you use JSON Web Tokens?

*Here are some scenarios where JSON Web Tokens are useful:*

* **Authorization:** *This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.*

* **Information Exchange:** *JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.*


### What is the JSON Web Token structure?

- Header:

*The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.*
- Payload

*The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data*
- Signature

*To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.*

### How do JSON Web Tokens work?

*In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required*