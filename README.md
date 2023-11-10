# typetalk_client

Typetalk API client for Deno🦕

## How to use

```typescript
import { TypetalkClient } from "https://deno.land/x/typetalk_client/bot.ts";

const client = new TypetalkClient(
  Deno.env.get("TYPETALK_TOKEN"),
  Deno.env.get("TYPETALK_TOPIC_ID"),
);
client.getMessageList();
```

## Roadmap

First, implement Typetalk API for a bot.\
Next, implement all the APIs.
