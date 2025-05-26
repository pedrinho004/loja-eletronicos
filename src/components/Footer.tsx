'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const paymentMethods = [
    'https://ext.same-assets.com/2097193524/3783633550.svg',
    'https://ext.same-assets.com/2097193524/548389142.svg',
    'https://ext.same-assets.com/2097193524/260646423.svg',
    'https://ext.same-assets.com/2097193524/4061061103.svg',
    'https://ext.same-assets.com/2097193524/2320907649.svg'
  ]

  return (
    <footer className="bg-bento-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="https://ext.same-assets.com/2097193524/2563901416.svg"
                alt="Bento Madeiras"
                className="h-12 w-auto filter brightness-0 invert mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Bento Madeiras é referência em qualidade. Variedades em madeiras,
                portas, janelas, batentes e muito mais. Faça o seu pedido agora mesmo.
              </p>
            </div>

            {/* Formas de pagamento */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Formas de Pagamento</h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, index) => (
                  <div key={method} className="bg-white rounded p-2">
                    <img
                      src={method}
                      alt={`Método de pagamento ${index + 1}`}
                      className="h-6 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Informações de contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-bento-orange mt-0.5" />
                <div>
                  <p className="text-sm font-medium">(16) 99605-9440</p>
                  <p className="text-xs text-gray-400">Linha de apoio</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-bento-orange mt-0.5" />
                <div>
                  <p className="text-sm">contato@bentomadeiras.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-bento-orange mt-0.5" />
                <div>
                  <p className="text-sm">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-bento-orange mt-0.5" />
                <div>
                  <p className="text-sm">Seg a Sex: 8h às 18h</p>
                  <p className="text-sm">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto">
                  Sobre Nós
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto">
                  Política de Privacidade
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto">
                  Termos de Uso
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto">
                  Trocas e Devoluções
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto">
                  Entrega e Frete
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-300 hover:text-white p-0 h-auto">
                  Central de Ajuda
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha separadora */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Bento Madeiras. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para construir sonhos</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer