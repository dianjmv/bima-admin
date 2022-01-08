import { createClient } from '@supabase/supabase-js';

export class SupabaseClient {
  supabaseUrl: string;
  supabaseAnonKey: string;
  constructor() {
    this.supabaseUrl = process?.env?.NEXT_PUBLIC_SUPABASE_URL ?? '';
    this.supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
  }
  client() {
    return createClient(this.supabaseUrl, this.supabaseAnonKey);
  }
}
