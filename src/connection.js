import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://zwgioqyjpduxlxxbkskc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z2lvcXlqcGR1eGx4eGJrc2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTM1MDEsImV4cCI6MjA2Mzc4OTUwMX0.RofE7hlqO12as3eB5R6uCWWfzgGHE3KsedLMmBCM9D8'

export const supabase = createClient(supabaseUrl, supabaseKey)