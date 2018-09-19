---
title: Delete &bull; Posts
description: Delete a post on Vare
---
# [&larr;](/posts/) Posts
{{ page.description }}
## Request format
```request
DELETE /posts/{post.id|The ID of the post you want to delete.}
```
### Example request
```request
DELETE /posts/4
```
### Example response
```json
{
	"success": true
}
```