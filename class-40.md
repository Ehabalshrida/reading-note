# Readings: Authorization/Authentication 

## What header(s) are used in authentication and authorization

 *authentication method that should be used to gain access to a resource. They must specify which authentication scheme is used, so that the client that wishes to authorize knows how to provide the credentials*

## What is safe to put into a JWT

*
JWS payload (set of claims): contains verifiable security statements, such as the identity of the user and the permissions they are allowed. JWS signature: used to validate that the token is trustworthy and has not been tampered with. When you use a JWT, you must check its signature before storing and using it*


## How are JWTs validated


- Retrieve and parse your Okta JSON Web Keys (JWK), which should be - checked periodically and cached by your application.
- Decode the access token, which is in JSON Web Token format.
- Verify the signature used to sign the access token


## RBAC :ROLE-BASED ACCESS CONTROL

*Role-based access control (RBAC) restricts network access based on a person's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that employees have to the network*


## User Roles

*
User Roles are permission sets that control access to areas and features within the Professional Archive Platform. Each User account requires a Role assignment.*


## JWT

*JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed*





## Which 3 things had you heard about previously and now have better clarity on?

- JWT
- ACL 
- Basic authintecation 


## Which 3 things are you hoping to learn more about in the upcoming lecture/demo? 

- Cookies
- EDA
- AWS
