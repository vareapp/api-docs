---
title: Get &bull; Posts
description: Get the content of a post on Vare
---
# [&larr;](/posts/) Posts
{{ page.description }}
## Request format
```request
GET /posts/{post.id|The ID of the post you want to get.}
```
### Example request
```request
GET /posts/4
```
### Example response
```json
{
	"success": true,
	"response": {
		"postedby": 2,
		"created": "2018-07-24 19:28:23",
		"content": "hi!"
	}
}
```