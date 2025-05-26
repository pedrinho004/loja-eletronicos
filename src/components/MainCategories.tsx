'use client'

import { Card, CardContent } from '@/components/ui/card'

interface Category {
  name: string
  image: string
  href: string
}

const MainCategories = () => {
  const categories: Category[] = [
    {
      name: 'Caixa d\'água',
      image: 'https://ext.same-assets.com/2097193524/1027338873.jpeg',
      href: '/categoria/caixa-d-agua'
    },
    {
      name: 'Batentes de Madeira',
      image: 'https://ext.same-assets.com/2097193524/1027338873.jpeg',
      href: '/categoria/batentes-madeira'
    },
    {
      name: 'Ferragens',
      image: 'https://ext.same-assets.com/2097193524/1027338873.jpeg',
      href: '/categoria/ferragens'
    },
    {
      name: 'Portas de Madeira',
      image: 'https://ext.same-assets.com/2097193524/1027338873.jpeg',
      href: '/categoria/portas-de-madeira'
    },
    {
      name: 'Portões',
      image: 'https://ext.same-assets.com/2097193524/1027338873.jpeg',
      href: '/categoria/serralheria-sanchez'
    }
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Grid de categorias principais */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0"
            >
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-bento-orange transition-colors">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainCategories