"use client";

// AI_GENERATED_CODE_START
// [AI Generated] Data: 19/03/2024
// Descrição: Página de callback redirecionando para Google temporariamente
// Gerado por: Cursor AI
// Versão: Next.js 14.2.6
// AI_GENERATED_CODE_END

import { Suspense, useEffect } from "react";

const CallbackPage = () => {
    useEffect(() => {
        // Redirecionar para Google temporariamente
        window.location.href = "https://google.com";
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Redirecionando...</h1>
                <p className="text-muted-foreground">Aguarde um momento...</p>
            </div>
        </div>
    );
};

export default CallbackPage;
