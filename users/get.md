---
title: Get &bull; Users
description: Get info about a user on Vare
---
# [&larr;](/users/) Users
{{ page.description }}
## Request format
```request
GET /getuser/{user.id|The ID of the user you'd like to get.}
```

### Example request
```request
GET /getuser/2
```

### Example response
```json
{
	"success": true,
	"username": "hpfxd",
	"created": "2018-07-24 00:00:00",
	"avatar": "https:\/\/cdn.vare.app\/avatars\/c81e728d9d4c2f636f067f89cc14862c.png",
	"settings": {
		"name": "hpfxd",
		"bio": "lol\ndeveloper for @vare\n@pdl <3",
		"location": "United States",
		"website": "https:\/\/hpf.fun"
	},
	"followers": [1],
	"following": [1,3]
}
```