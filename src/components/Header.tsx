'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  ShoppingCart,
  Menu,
  Phone,
  User,
  Heart,
  MapPin
} from 'lucide-react'

const Header = () => {
  const [cartCount, setCartCount] = useState(0)

  const categories = [
    'Eucalipto',
    'Telha Fibrocimento',
    'Telha Ceramica',
    'Portões',
    'Pinus',
    'Eucalipto Tratado',
    'Forro',
    'Compensado e Madeirite',
    'Portas de Madeira',
    'Batentes de Madeira',
    'Caixa d\'água',
    'Ferragens',
    'Fechaduras, Dobradiças e Puxadores',
    'Outras Telhas e Acessórios'
  ]

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-bento-dark text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>Torne-se um Vendedor!</span>
            <span>Faça login como vendedor</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Linha de apoio (16) 99605-9440</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/2097193524/2563901416.svg"
              alt="Bento Madeiras"
              className="h-12 w-auto"
            />
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-bento-orange"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bottom-1 bg-bento-orange hover:bg-bento-orange/90 text-white px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* User menu */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <User className="h-4 w-4 mr-2" />
                Conecte-se
              </Button>
              <span className="text-gray-400">|</span>
              <Button variant="ghost" size="sm" className="text-gray-600">
                Cadastro
              </Button>
            </div>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="p-2">
              <Heart className="h-5 w-5 text-gray-600" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative p-2 text-gray-600"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-bento-orange text-xs">
                  {cartCount}
                </Badge>
              )}
              <span className="ml-2 hidden md:inline">R$0,00 (0 Unid)</span>
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="py-4">
                  <h3 className="text-lg font-semibold mb-4">Categorias</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className="w-full justify-start text-left h-auto py-3 px-3"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Categories navigation */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Button
              className="bg-bento-orange hover:bg-bento-orange/90 text-white px-6 py-3 rounded-none"
            >
              <Menu className="h-4 w-4 mr-2" />
              Categorias
            </Button>

            <nav className="hidden lg:flex items-center space-x-6 ml-8">
              {categories.slice(0, 6).map((category, index) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="text-gray-700 hover:text-bento-orange py-3 px-3"
                >
                  {category}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header