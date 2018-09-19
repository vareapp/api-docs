---
title: Search &bull; Users
description: Search users on Vare
---
# [&larr;](/users/) Users
{{ page.description }}
## Request format
```request
GET /searchuser/{search.query|The query you'd like to use to search for users.}
```

### Example request
```request
GET /searchuser/hpf
```

### Example response
```json
{
	"success": true,
	"results": [
		2
	]
}
```