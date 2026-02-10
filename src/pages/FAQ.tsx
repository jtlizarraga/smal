import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, ShoppingBag, Truck, Ruler } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    icon: React.ReactNode;
}

function FAQItem({ question, answer, icon }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-soft-pink/50 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <div className="flex items-center space-x-6">
                    <div className="p-3 bg-soft-pink text-accent-pink rounded-2xl group-hover:bg-accent-pink group-hover:text-white transition-all">
                        {icon}
                    </div>
                    <span className="text-xl font-black tracking-tight text-deep-brown group-hover:text-accent-pink transition-colors">
                        {question}
                    </span>
                </div>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-accent-pink" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-deep-brown/20" />
                )}
            </button>
            {isOpen && (
                <div className="pb-8 pl-20 pr-12">
                    <p className="text-lg text-deep-brown/60 font-medium leading-relaxed font-sans">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}

export function FAQ() {
    const faqs = [
        {
            icon: <Truck className="h-5 w-5" />,
            question: "¿Cómo funcionan los envíos?",
            answer: "Ofrecemos envíos locales en la ciudad de Mérida, Yucatán, con entrega en 24-48 horas. Para el resto de México, realizamos envíos nacionales vía FedEx o DHL con un tiempo estimado de 3 a 5 días hábiles. El costo se calcula al finalizar tu pedido."
        },
        {
            icon: <Ruler className="h-5 w-5" />,
            question: "¿Cuál es mi talla ideal?",
            answer: "Nuestras prendas están diseñadas para ajustarse cómodamente al cuerpo. Manejamos tallas S (Chica), M (Mediana) y L (Grande). Si tienes dudas entre dos tallas, te recomendamos elegir la más grande para mayor comodidad o consultar nuestra tabla de medidas detallada."
        },
        {
            icon: <ShoppingBag className="h-5 w-5" />,
            question: "¿Puedo realizar cambios o devoluciones?",
            answer: "Sí, aceptamos cambios de talla dentro de los primeros 7 días posteriores a la recepción de tu compra, siempre que la prenda esté en perfecto estado, con etiquetas originales y sin señales de uso. Por higiene, no aceptamos devoluciones en conjuntos de ropa interior o piezas promocionales."
        },
        {
            icon: <Mail className="h-5 w-5" />,
            question: "¿Cómo puedo contactar con soporte?",
            answer: "Estamos aquí para ayudarte. Puedes enviarnos un correo electrónico a hola@sandi-boutique.com o escribirnos directamente por WhatsApp al link que aparece en nuestro pie de página. Respondemos en un horario de 9:00 AM a 6:00 PM (Hora local Mérida)."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-deep-brown py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="text-accent-pink text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Centro de Ayuda</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
                        Preguntas <br />
                        <span className="font-serif italic font-light text-accent-pink/60">Frecuentes</span>
                    </h1>
                    <p className="text-deep-brown/50 font-medium max-w-lg mx-auto leading-relaxed">
                        Todo lo que necesitas saber sobre tus pedidos, tallas y envíos en SMAL Boutique.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-accent-pink/5 border border-soft-pink/20">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>

                {/* Contact Card */}
                <div className="mt-24 bg-soft-pink rounded-[3rem] p-12 text-center border border-white">
                    <h3 className="text-2xl font-black tracking-tight mb-4">¿Aún tienes dudas?</h3>
                    <p className="text-deep-brown/60 font-medium mb-8">Escríbenos y nuestro equipo te atenderá personalmente.</p>
                    <a href="mailto:hola@sandi-boutique.com" className="btn-primary inline-flex items-center space-x-3">
                        <Mail className="h-5 w-5" />
                        <span>Enviar un correo</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
