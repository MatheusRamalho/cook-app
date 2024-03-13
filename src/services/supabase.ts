import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jwxsatugzxsjwpcftwwt.supabase.co'
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3eHNhdHVnenhzandwY2Z0d3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyODM4NTEsImV4cCI6MjAyNTg1OTg1MX0.nS6ccd54PG8heNTvlSk4lmHrbtqXJhhjao92WYe3y1k'

export const supabase = createClient(supabaseUrl, supabaseKey)
