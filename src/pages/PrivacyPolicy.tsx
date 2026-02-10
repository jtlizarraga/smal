export function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-gray-700">
            <h1 className="text-3xl font-bold text-smal-pink-600 mb-6">Aviso de Privacidad</h1>

            <div className="bg-white shadow rounded-lg p-8 space-y-6">
                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Responsable de tus datos</h2>
                    <p>
                        SMAL Boutique Deportiva es responsable del tratamiento de los datos personales que nos proporciones.
                        Nos comprometemos a proteger tu información y usarla únicamente para los fines aquí descritos.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Datos que recabamos</h2>
                    <p>
                        Si te pones en contacto con nosotros a través de WhatsApp o formularios, podemos recabar datos como:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4">
                        <li>Nombre y Apellido</li>
                        <li>Número de teléfono (WhatsApp)</li>
                        <li>Correo electrónico (opcional)</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500 italic">No recabamos datos bancarios ni sensibles a través de este sitio web. Todas las transacciones se acuerdan externamente.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Finalidad del uso de datos</h2>
                    <p>
                        Utilizamos tu información exclusivamente para:
                    </p>
                    <ul className="list-disc list-inside mt-2 ml-4">
                        <li>Brindarte información y cotizaciones de nuestros productos.</li>
                        <li>Coordinar entregas de pedidos.</li>
                        <li>Responder a tus dudas o comentarios.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Tus derechos</h2>
                    <p>
                        Tienes derecho a acceder, rectificar, cancelar u oponerte al uso de tus datos personales (Derechos ARCO).
                        Para ejercer estos derechos, por favor contáctanos directamente a través de nuestro WhatsApp oficial.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Cambios al aviso</h2>
                    <p>
                        Este aviso de privacidad puede sufrir modificaciones. Cualquier cambio será publicado en esta misma página.
                    </p>
                    <p className="mt-4 text-sm text-gray-400">Última actualización: 10 de Febrero de 2026</p>
                </section>
            </div>
        </div>
    );
}
