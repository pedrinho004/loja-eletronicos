import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import MainCategories from '@/components/MainCategories'
import CategorySection from '@/components/CategorySection'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

// Dados de exemplo dos produtos
const eucaliptoProducts = [
  {
    id: '1',
    title: 'VIGA 15X5 6M - SALIGNA',
    price: 'R$89,94',
    installments: 'em até 12x R$ 8,61',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/1024075465.webp'
  },
  {
    id: '2',
    title: 'TERA 6M - 11X5 SALIGNA',
    price: 'R$53,94',
    installments: 'em até 12x R$ 5,17',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/1398436598.webp'
  },
  {
    id: '3',
    title: 'RIPA 1,5X5 M - SALIGNA',
    price: 'R$1,69',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/212567266.webp'
  },
  {
    id: '4',
    title: 'CAIBRO 5X5 - 4.5MT - SALIGNA',
    price: 'R$24,95',
    installments: 'em até 5x R$ 5,46',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/346063975.webp'
  }
]

const telhaCoramicaProducts = [
  {
    id: '6',
    title: 'TELHA ROMANA BARROBELLO RESINADA PREMIUM',
    price: 'R$1,79',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/1080559687.webp'
  },
  {
    id: '7',
    title: 'TELHA PORTUGUESA BARROBELLO RESINADA PREMIUM',
    price: 'R$1,79',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/2319606125.webp'
  },
  {
    id: '8',
    title: 'TELHA PAULISTINHA BARROBELLO CERÂMICA',
    price: 'R$2,85',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/1161672925.webp'
  },
  {
    id: '9',
    title: 'TELHA CUMEEIRA BARROBELLO DE CERÂMICA (CAPA)',
    price: 'R$3,79',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/616780089.webp'
  }
]

const portoesProducts = [
  {
    id: '10',
    title: 'PORTÃO BASCULANTE PROMO 3MX2.5M CHAPA 20',
    price: 'R$2.749,00',
    delivery: 'Consulte disponibilidade',
    image: 'https://ext.same-assets.com/2097193524/795093714.webp'
  }
]

const pinusProducts = [
  {
    id: '11',
    title: 'TÁBUA PINUS 30CM - 3MT',
    price: 'R$35,99',
    installments: 'em até 8x R$ 5,03',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/307958698.webp'
  },
  {
    id: '12',
    title: 'TÁBUA PINUS 20CM - 3MT',
    price: 'R$22,95',
    installments: 'em até 5x R$ 5,02',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/2896370724.webp'
  },
  {
    id: '13',
    title: 'TÁBUA PINUS 15CM - 3MT',
    price: 'R$17,21',
    installments: 'em até 3x R$ 6,19',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/2949608630.webp'
  },
  {
    id: '14',
    title: 'SARRAFO PINUS - 5CM X 300 X 2.0',
    price: 'R$5,49',
    installments: 'em até 1x R$ 5,72',
    delivery: 'Chegar entre Quinta e Sábado',
    image: 'https://ext.same-assets.com/2097193524/3035930968.webp'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <MainCategories />

      {/* Seções de categorias com produtos */}
      <CategorySection
        title="EUCALIPTO"
        subtitle="MADEIRA NATURAL"
        bannerImage="https://ext.same-assets.com/2097193524/1098920374.png"
        backgroundColor="#e65b10"
        products={eucaliptoProducts}
      />

      <CategorySection
        title="TELHA CERÂMICA"
        subtitle="QUALIDADE SUPERIOR"
        bannerImage="https://ext.same-assets.com/2097193524/1098920374.png"
        backgroundColor="#d3935b"
        products={telhaCoramicaProducts}
      />

      <CategorySection
        title="PORTÕES"
        subtitle="SEGURANÇA E ESTILO"
        bannerImage="https://ext.same-assets.com/2097193524/1098920374.png"
        backgroundColor="#2e2032"
        products={portoesProducts}
      />

      <CategorySection
        title="MADEIRA DE PINUS"
        subtitle="PROJETOS DIVERSOS"
        bannerImage="https://ext.same-assets.com/2097193524/1098920374.png"
        backgroundColor="#898e8f"
        products={pinusProducts}
      />

      <Footer />
      <ChatWidget />
    </div>
  )
}