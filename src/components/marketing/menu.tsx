"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { CalendarRangeIcon, CircleHelp, HashIcon, Newspaper, UsersIcon, BrainCircuitIcon, RocketIcon, ShieldCheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Icons from "../global/icons";

interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="https://google.com" target="_blank" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            Como Funciona
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Serviços
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="https://google.com"
                                        target="_blank"
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <Icons.icon className="w-6 h-6" />
                                        <div className="my-2 text-lg font-normal">
                                            Expert AI
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Sua parceira em transformação digital com IA
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="Consultoria Estratégica" href="https://google.com" icon={<BrainCircuitIcon className="w-5 h-5" />}>
                                Diagnóstico completo e roadmap de implementação de IA.
                            </Item>
                            <Item title="Implementação de Agentes" href="https://google.com" icon={<RocketIcon className="w-5 h-5" />}>
                                Desenvolvimento de agentes inteligentes customizados.
                            </Item>
                            <Item title="Soluções Enterprise" href="https://google.com" icon={<ShieldCheckIcon className="w-5 h-5" />}>
                                Soluções corporativas com suporte dedicado.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="https://google.com" target="_blank" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            Preços
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="https://google.com" target="_blank" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            Integrações
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Recursos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
                            <Item title="Blog" href="https://google.com" icon={<Newspaper className="w-5 h-5" />}>
                                Artigos sobre IA e transformação digital.
                            </Item>
                            <Item title="Cases de Sucesso" href="https://google.com" icon={<UsersIcon className="w-5 h-5" />}>
                                Conheça nossos projetos realizados.
                            </Item>
                            <Item title="Suporte" href="https://google.com" icon={<CircleHelp className="w-5 h-5" />}>
                                Suporte técnico especializado.
                            </Item>
                            <Item title="Webinars" href="https://google.com" icon={<CalendarRangeIcon className="w-5 h-5" />}>
                                Eventos e treinamentos sobre IA.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

Item.displayName = "Item";

export default Menu
