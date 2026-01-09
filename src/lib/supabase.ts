import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Article {
  id: string
  title: string
  content: string
  created_at: string
  owner: string
  editors: string
}

// CRUD functions
export const articleApi = {
  // Create
  async create(article: Omit<Article, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('articles')
      .insert([article])
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Read all
  async getAll() {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Read one
  async getById(id: string) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  // Update
  async update(id: string, updates: Partial<Omit<Article, 'id' | 'created_at'>>) {
    const { data, error } = await supabase
      .from('articles')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete
  async delete(id: string) {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}