// AI_GENERATED_CODE_START
// [AI Generated] Data: 19/03/2024
// Descrição: Customização do footer para Expert AI em português
// Gerado por: Cursor AI
// Versão: React 18.2.0
// AI_GENERATED_CODE_END

import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#d4d4d8"
                        refresh
                    />
                    <div className="flex flex-col items-start max-w-48">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-5 h-5" />
                            <span className="text-xl font-medium">
                                Expert AI
                            </span>
                        </div>
                        <p className="text-base max-w mt-4">
                            Transforme seu negócio com nossas soluções de IA.
                        </p>
                        <Button className="mt-8">
                            <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                                Solicitar Consultoria
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
                        {FOOTER_LINKS?.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-sm font-medium">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 w-full">
                                    {section.links.map((link, index) => (
                                        <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                                            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="w-full">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-between relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} Expert AI - Agentes Inteligentes. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://google.com" target="_blank" rel="noopener noreferrer" className="p-1">
                            <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="https://google.com" target="_blank" rel="noopener noreferrer" className="p-1">
                            <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                        <Link href="https://google.com" target="_blank" rel="noopener noreferrer" className="p-1">
                            <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </Link>
                    </div>
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer
