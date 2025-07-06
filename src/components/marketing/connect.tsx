// AI_GENERATED_CODE_START
// [AI Generated] Data: 19/03/2024
// Descrição: Customização da seção connect para Expert AI em português
// Gerado por: Cursor AI
// Versão: React 18.2.0
// AI_GENERATED_CODE_END

import Container from "../global/container";
import Images from "../global/images";
import { Particles } from "../ui/particles";
import { SectionBadge } from "../ui/section-bade";

const Connect = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Integrações" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Integração Perfeita com suas Ferramentas
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Suportamos uma ampla gama de integrações para conectar suas ferramentas favoritas com nossa plataforma
                    </p>
                </div>
            </Container>
            <Container>
                <div className="w-full relative mt-12">
                    <Images.connect className="w-full h-auto" />
                    <Particles
                        className="absolute inset-0"
                        quantity={150}
                        ease={80}
                        color="#e4e4e7"
                        refresh
                    />
                </div>
            </Container>
        </div>
    )
};

export default Connect
