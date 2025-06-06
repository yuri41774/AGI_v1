// Configuração centralizada do Supabase
const SUPABASE_CONFIG = {
    URL: 'https://bilhtpgelctnybjemzeg.supabase.co',
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpbGh0cGdlbGN0bnliamVtemVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzgzOTYsImV4cCI6MjA2Mzg1NDM5Nn0.yybV4HP0d9KAJGxMq7y8N_AHKgqPHNXoqu0oH_Waoh4'
};

function initSupabase() {
    if (typeof window.supabase === 'undefined') {
        console.error('Erro: Biblioteca Supabase não carregada');
        return null;
    }
    return window.supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
}
