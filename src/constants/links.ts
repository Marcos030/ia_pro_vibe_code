import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/projetos",
        label: "Projetos",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: LineChartIcon
    },
    {
        href: "/dashboard/agentes",
        label: "Agentes IA",
        icon: MessageSquareTextIcon
    },
    {
        href: "/dashboard/performance",
        label: "Performance",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Faturamento",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Configurações",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Serviços",
        links: [
            { name: "Consultoria", href: "https://google.com" },
            { name: "Implementação", href: "https://google.com" },
            { name: "Soluções Enterprise", href: "https://google.com" },
            { name: "Suporte", href: "https://google.com" },
            { name: "Treinamentos", href: "https://google.com" },
        ],
    },
    {
        title: "Recursos",
        links: [
            { name: "Blog", href: "https://google.com" },
            { name: "Cases de Sucesso", href: "https://google.com" },
            { name: "Documentação", href: "https://google.com" },
            { name: "Webinars", href: "https://google.com" },
            { name: "FAQ", href: "https://google.com" },
        ],
    },
    {
        title: "Empresa",
        links: [
            { name: "Sobre Nós", href: "https://google.com" },
            { name: "Equipe", href: "https://google.com" },
            { name: "Carreiras", href: "https://google.com" },
            { name: "Contato", href: "https://google.com" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacidade", href: "https://google.com" },
            { name: "Termos de Uso", href: "https://google.com" },
            { name: "Cookies", href: "https://google.com" },
            { name: "LGPD", href: "https://google.com" },
        ],
    },
];
