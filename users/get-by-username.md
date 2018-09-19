---
title: Get User by Username &bull; Users
description: Get a user's ID by their username on Vare
---
# [&larr;](/users/) Users
{{ page.description }}
## Request format
```request
GET /getuserid/{user.username|The username of the user you'd like to get.}
```

### Example request
```request
GET /getuserid/hpfxd
```

### Example response
```json
{
	"success": true,
	"userid": 2
}
```