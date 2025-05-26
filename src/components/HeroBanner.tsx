'use client'

import { Button } from '@/components/ui/button'

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-bento-orange to-orange-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Realizamos serviços em madeira & Cidades
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Bento Madeiras é referência em qualidade
            </p>
            <p className="text-lg mb-8 opacity-80">
              Variedades em madeiras, portas, janelas, batentes e muito mais
            </p>
            <Button
              size="lg"
              className="bg-white text-bento-orange hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
            >
              Faça seu pedido agora mesmo
            </Button>
          </div>

          {/* Imagem ilustrativa */}
          <div className="hidden lg:block flex-1">
            <div className="relative">
              <img
                src="https://ext.same-assets.com/2097193524/1098920374.png"
                alt="Serviços em madeira"
                className="w-full max-w-md ml-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent"></div>
    </section>
  )
}

export default HeroBanner