// bu fayl supabasega ulanish uchun kerak

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://novfwqetjdxgknkmqrzp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdmZ3cWV0amR4Z2tua21xcnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjE3NzYsImV4cCI6MjA2MjE5Nzc3Nn0.cYheBIzBAd5AqVbGLF88sxTOmJd3sIBJ5EuNhfeG9h8"
);
