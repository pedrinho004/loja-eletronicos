'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, X, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSendMessage = () => {
    if (message.trim()) {
      // Aqui seria implementada a lógica de envio de mensagem
      console.log('Mensagem enviada:', message)
      setMessage('')
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat expandido */}
      {isOpen && (
        <Card className="w-80 h-96 mb-4 shadow-2xl animate-in slide-in-from-bottom-4">
          <CardHeader className="bg-bento-orange text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Chat Online</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:bg-orange-600 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm opacity-90">
              Olá! Como podemos ajudar você?
            </p>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Área de mensagens */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
              <div className="space-y-3">
                {/* Mensagem de boas-vindas */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-800">
                    Bem-vindo à Bento Madeiras! Estamos aqui para ajudar com seus projetos em madeira.
                    Como podemos auxiliá-lo hoje?
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">
                    Atendente • Agora
                  </span>
                </div>

                {/* Opções rápidas */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-medium">Opções rápidas:</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto py-2"
                  >
                    💰 Consultar preços
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto py-2"
                  >
                    🚚 Informações sobre entrega
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto py-2"
                  >
                    📋 Dúvidas sobre produtos
                  </Button>
                </div>
              </div>
            </div>

            {/* Campo de input */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-bento-orange hover:bg-bento-orange/90 px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Botão flutuante */}
      <Button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-bento-orange hover:bg-bento-orange/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        size="lg"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>
    </div>
  )
}

export default ChatWidget