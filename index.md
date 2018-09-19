---
title: Home
description: We provide an easy-to-use JSON API for developers to interact with Vare.
---

# Vare API
{{ page.description }}

## API Structure
### Base URL
`https://vare.app/api/`
### Authentication
To use most API endpoints, you will need to authenticate yourself.
You can do this by providing the `token` cookie with the contents being the token you'd like to authenticate with.
### Response codes
- 200 OK  
As the name implies, when the server responds with 200 OK, everything is okay and the request completed successfully.
- 400 Bad Request  
Response code 400 is returned when the request recieved is invalid.
- 401 Unauthorized  
If the server responds with 401, it means that you are not logged in.  
- 403 Forbidden  
When the server responds with 403, it means that you are logged in, but do not have required permissions to do the specified action.
- 404 Not Found  
Response code 404 is returned when the request is valid, but the requested resource is not able to be found.
- 422 Unprocessable Entity  
Response code 422 is returned when the server cannot process the given request.
- 503 Service Unavailable  
If the response code 503 is returned, it means that the requested service is not available.

## Links
- [Posts](/posts/)
- [Users](/users/)