import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qfrvcxdqqzktyhwvykuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmcnZjeGRxcXprdHlod3Z5a3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMDI1MjcsImV4cCI6MTk4MzU3ODUyN30.RQRsiwVi2rXYluLUAQoMgkG6NKtLiojhSmZdIbJ4Hm4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function usesupabase () {
  return { supabase }
}
