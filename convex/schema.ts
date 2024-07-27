import { v } from 'convex/values';
import { defineSchema, defineTable } from 'convex/server';

export default defineSchema({
  notifications: defineTable({
    isRead: v.boolean(),
    text: v.string(),
  }),
});
