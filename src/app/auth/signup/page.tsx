// AI_GENERATED_CODE_START
// [AI Generated] Data: 19/03/2024
// Descrição: Página de cadastro simplificada que redireciona para Google
// Gerado por: Cursor AI
// Versão: Next.js 14.2.6
// AI_GENERATED_CODE_END

import { Suspense, useEffect } from "react";

const SignUpPage = () => {
    useEffect(() => {
        // Redirecionar para Google após 2 segundos
        const timer = setTimeout(() => {
            window.location.href = "https://google.com";
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center size-full">
            <div className="max-w-xs mx-auto size-full flex flex-col items-center mt-[270px]">
                <Suspense>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Redirecionando...</h1>
                        <p className="text-muted-foreground">
                            Você será redirecionado para o Google em alguns segundos.
                        </p>
                    </div>
                </Suspense>
            </div>
        </div>
    )
};

export default SignUpPage
