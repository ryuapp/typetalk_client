import { TypetalkClient } from "../bot.ts";

const client = new TypetalkClient(
  Deno.env.get("TYPETALK_TOKEN")!,
  Deno.env.get("TYPETALK_TOPIC_ID")!,
);
console.log(await client.getMessageList());
