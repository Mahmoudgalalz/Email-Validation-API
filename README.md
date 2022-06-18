# Email Validation RESTFul API
- This API has Only POST Method
- it's a best practice on API development with ExpressJS
- It's can be used on any project
# Method
POST

> POST ./isValid

**req :body**
String : Email

using ***curl***

    curl -d '{"email":"test@test.com"}' -H "Content-Type: application/json" -X POST http://localhost:3000/isvalid

**res**
Status (200) OK
> isValid: YES
> domain: @gmail or any

Status (500) err

> isValid: NO

# deployment
- require Nodejs ^17
- Express

      npm start

# API road map
- plan to work on many API
- build a NPM package for Auth and Blog api with a mongoDB Schema

# Contributing and collaborating
- I'm looking to Contribute in backend project don't feel shy to chat with me
