---
title: Avatar &bull; Settings &bull; Users
description: Change the current user's avatar on Vare
---
# [&larr;](/users/) Users
{{ page.description }}
## Request format
```request
POST /settings/avatar
```

### Example request
```request
POST /settings/avatar
```
```
-----------------------------1356152663607499813539845943
Content-Disposition: form-data; name="avatar"; filename="gmagik.gif"
Content-Type: image/gif

{avatar.data}
-----------------------------1356152663607499813539845943--
```

### Example response
```json
{
	"success": true
}
```