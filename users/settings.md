---
title: Settings &bull; Users
description: Change settings for the current user on Vare
---
# [&larr;](/users/) Users
{{ page.description }}
## Request format
```request
PATCH /settings
```

### Example request
```request
PATCH /settings
```
```json
{
	"location": "Earth",
	"birthday": "January 1st, 1970"
}
```

### Example response
```json
{
	"success": true,
	"changed": [
		"location",
		"birthday"
	]
}
```