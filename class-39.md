# Readings: Access Control (ACL)

## When is Basic Authorization used vs. Bearer Authorization?

*
The Basic and Digest authentication schemes are dedicated to the authentication using a username and a secret (see RFC7616 and RFC7617). The Bearer authentication scheme is dedicated to the authentication using a token and is described by the RFC6750*

## What does the JSON Web Token package do?

*
JSON Web Token (JWT) is a JSON encoded representation of a claim(s) that can be transferred between two parties. The claim is digitally signed by the issuer of the token, and the party receiving this token can later use this digital signature to prove the ownership on the claim*

## What considerations should we make when creating and storing a SECRET?

**
8 Best Practices for Container Secrets :**

- Differentiate Between Secrets and Identifiers. ...
- Establish a Circle of Trust. ...
- Gain Visibility into the Chain of Trust. ...
- Encrypt Data Using a KMS. ...
- Rotate Secrets Frequently. ...
- Automate Password Creation. ...
- Store Secrets Responsibly. ...
- Detect Unauthorized Access.


## 

- **encryption**
*Encryption is the process that scrambles readable text so it can only be read by the person who has the secret code, or decryption key. It helps provide data security for sensitive information.*

- **token** *
Access tokens are the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user's data. Access tokens must be kept confidential in transit and in storage*

- **bearer** *
Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. ... The client must send this token in the Authorization header when making requests to protected resources: Authorization: Bearer `<token>`*

- **secret** *
 A generic term for any secret value that an attacker could use to impersonate the subscriber in an authentication protocol*

 - **JSON Web Token** *JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed*


 ## RBAC 

 *RBAC is the idea of assigning system access to users based on their role in an organization. It's important to remember that not every employee needs a starring role*


 ### Benefits of RBAC?

*With the proper implementation of RBAC, the assignment of access rights becomes systematic and repeatable. Further, it is much easier to audit user rights, and to correct any issues identified.*

*RBAC may sound intimidating, but it can in reality be easy to implement, and will make the ongoing management of access rights much easier and more secure.*

### RBAC vs. ABAC vs. ACL

**Access control lists (ACL)** — *An ACL is a means of defining access rights by a given user or user group, to a specific object, such as a document.  As a simple example, an ACL could be used to allow users from one department to make changes to a document, while only allowing users from other departments to read the document.*

 **Attribute-based access control (ABAC)** — *ABAC, sometimes known as policy-based access control, can use a variety of attributes, including user department, time of day, location of access, type of access required, etc. to determine whether a user’s access request should be granted.* 


 ### RBAC implementation 

*Hopefully I have convinced you to take a closer look at RBAC. If so, consider the following simplified five-step approach to getting it implemented:*


**1. Inventory your systems
**

*Figure out what resources you have for which you need to control access, if you don't already have them listed. Examples would include an email system, customer database, contact management system, major folders on a file server, etc. *


**2. Analyze your workforce and create roles
** 

*You need to group your workforce members into roles with common access needs.  Avoid the temptation to have too many roles defined. Keep them as simple and stratified as possible.*


**3. Assign people to roles**

*Now that you have a list of roles and their access rights, figure out which role(s) each employee belongs in, and set their access accordingly. *


**4. Never make one-off changes
**

*Resist any temptation to make a one-off change for an employee with unusual needs. If you begin doing this, your RBAC system will quickly begin to unravel. Change the roles as required or add new ones when really necessary.*

**5. Audit**

*Periodically review your roles, the employees assigned to them, and the access permitted for each. If you discover, for example, that a role has unnecessary access to a particular system, change the role and adjust the access level for all employees in that role. *