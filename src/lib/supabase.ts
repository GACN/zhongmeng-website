// Local filesystem storage — no Supabase dependency
// API routes read/write JSON files in src/data/

const noop = {
  storage: { from: () => noop, upload: () => ({ error: null }), getPublicUrl: () => ({ publicUrl: "" }) },
  from: () => noop,
  select: () => noop,
  order: () => noop,
  insert: () => noop,
  update: () => noop,
  delete: () => noop,
  eq: () => noop,
  single: () => ({ data: null, error: null }),
  upsert: () => ({ error: null }),
} as any;

export const supabase = noop;
export const supabaseAdmin = noop;
