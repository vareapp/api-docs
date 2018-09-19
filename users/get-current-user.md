---
title: Get Current User  &bull; Users
description: Get info about the current user on Vare
---
# [&larr;](/users/) Users
{{ page.description }}
## Request format
```request
GET /getcurrentuser
```

### Example request
```request
GET /getcurrentuser
```

### Example response
```json
{
	"success": true,
	"response": {
		"username": "hpfxd",
		"email": "me@hpf.fun",
		"created": "2018-07-24 00:00:00",
		"avatar": "https:\/\/cdn.vare.app\/avatars\/c81e728d9d4c2f636f067f89cc14862c.png",
		"settings": {
			"name": "hpfxd",
			"bio": "lol\ndeveloper for @vare\n@pdl <3",
			"location": "United States",
			"website": "https:\/\/hpf.fun"
		}
	}
}
```