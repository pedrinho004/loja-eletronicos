'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Star, Truck } from 'lucide-react'

interface Product {
  id: string
  title: string
  price: string
  installments?: string
  delivery: string
  image: string
  rating?: number
  isNew?: boolean
}

interface CategorySectionProps {
  title: string
  subtitle: string
  bannerImage: string
  backgroundColor: string
  products: Product[]
  showViewAll?: boolean
}

const CategorySection = ({
  title,
  subtitle,
  bannerImage,
  backgroundColor,
  products,
  showViewAll = true
}: CategorySectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Banner promocional */}
        <div
          className="relative rounded-xl overflow-hidden mb-8 p-8 text-white"
          style={{ backgroundColor }}
        >
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://ext.same-assets.com/2097193524/2563901416.svg"
                  alt="Bento Madeiras"
                  className="h-8 filter brightness-0 invert"
                />
                <div>
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <p className="text-lg opacity-90">{subtitle}</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4">
                OS MELHORES PREÇOS<br />
                É SÓ AQUI NO BENTO
              </p>
              <Button className="bg-white text-bento-dark hover:bg-gray-100 font-semibold">
                CONFIRA TODOS OS PREÇOS
              </Button>
            </div>

            {/* Personagem do banner */}
            <div className="hidden md:block">
              <img
                src={bannerImage}
                alt="Banner"
                className="h-48 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                {/* Imagem do produto */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badge "Novo" se aplicável */}
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-bento-orange text-white">
                      Novo
                    </Badge>
                  )}

                  {/* Botão de favoritar */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </Button>

                  {/* Rating se disponível */}
                  {product.rating && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 px-2 py-1 rounded">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">({product.rating})</span>
                    </div>
                  )}
                </div>

                {/* Informações do produto */}
                <div className="p-4">
                  <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="space-y-1">
                    <p className="text-xl font-bold text-bento-orange">
                      {product.price}
                    </p>

                    {product.installments && (
                      <p className="text-sm text-gray-600">
                        {product.installments}
                      </p>
                    )}

                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Truck className="h-3 w-3" />
                      <span>{product.delivery}</span>
                    </div>
                  </div>

                  {/* Botão de comprar */}
                  <Button
                    className="w-full mt-3 bg-bento-orange hover:bg-bento-orange/90 text-white"
                    size="sm"
                  >
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botão "Ver todos" */}
        {showViewAll && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-bento-orange text-bento-orange hover:bg-bento-orange hover:text-white"
            >
              Ver todos os produtos de {title}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default CategorySection