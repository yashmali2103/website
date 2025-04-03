// Import the Supabase client library
import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables (Vercel exposes these via process.env)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;  // Using anon key for example
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Destructure the form fields from the request body
  const { name, phone, email, company, message } = req.body;

  // Insert the data into the "inquiries" table
  const { data, error } = await supabase
    .from('inquiries')
    .insert([{ name, phone, email, company, message }]);

  if (error) {
    console.error('Insert error:', error);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Submission successful', data });
}
