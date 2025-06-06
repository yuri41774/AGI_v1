// Inicialização única do Supabase para todo o projeto
if (!window.supabaseClient) {
    window.supabaseClient = initSupabase();
}
