// AI_GENERATED_CODE_START
// [AI Generated] Data: 19/03/2024
// Descrição: Atualização dos planos para serviços de consultoria de IA da Expert AI
// Gerado por: Cursor AI
// Versão: TypeScript 4.9.5
// AI_GENERATED_CODE_END

type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "consultoria",
        title: "Consultoria Básica",
        desc: "Diagnóstico inicial e roadmap para implementação de IA no seu negócio",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Agendar Consultoria",
        features: [
            "Análise inicial do seu negócio",
            "Identificação de oportunidades de IA",
            "Roadmap de implementação",
            "1 sessão de consultoria (1h)",
            "Relatório executivo",
            "Recomendações iniciais"
        ],
        link: "/contact"
    },
    {
        id: "implementacao",
        title: "Implementação Completa",
        desc: "Desenvolvimento e implementação de agentes inteligentes personalizados",
        monthlyPrice: 2500,
        yearlyPrice: 25000,
        badge: "Mais Popular",
        buttonText: "Solicitar Orçamento",
        features: [
            "Diagnóstico completo do negócio",
            "Desenvolvimento de agentes IA customizados",
            "Integração com sistemas existentes",
            "Treinamento da equipe",
            "Suporte técnico por 6 meses",
            "Monitoramento e otimização",
            "Documentação completa",
            "Sessões de acompanhamento"
        ],
        link: "/contact"
    },
    {
        id: "enterprise",
        title: "Solução Enterprise",
        desc: "Soluções corporativas completas com suporte dedicado e escalabilidade",
        monthlyPrice: 5000,
        yearlyPrice: 50000,
        badge: "Enterprise",
        buttonText: "Falar com Especialista",
        features: [
            "Consultoria estratégica completa",
            "Múltiplos agentes IA integrados",
            "Gerente de conta dedicado",
            "Suporte 24/7 prioritário",
            "Escalabilidade garantida",
            "Compliance e segurança avançados",
            "Atualizações e melhorias contínuas",
            "ROI garantido"
        ],
        link: "/contact"
    }
];
