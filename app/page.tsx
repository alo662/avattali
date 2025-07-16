"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import AutoScroll from "embla-carousel-auto-scroll"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { MapPin, Facebook, Instagram, MessageCircle, Star, Shield, Leaf, Factory, Truck, ChevronLeft, ChevronRight, ArrowUp } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

interface Product {
  id: number
  title: string
  description: string
  details: string
  image: string
}

export default function AvattaliPage() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const galleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-Y7jFli01lSorZhpxSaC7ZnjejSIM3g.png", // Imagen 17 - Frutas y verduras en redes
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-hwi6aNUEjxCGneoxfYXPOKbOCCYKfp.png", // Imagen 13 - Red tubular con productos
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-1Ila0DVwkwKFEa8qzzjphE5NnA2Vlk.png", // Imagen 14 - Stand con rollos de red
    // "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-5wWZ4oDSNmhgxUZYN7mQreJERa56NN.png", // Imagen 15 - Empacadora
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9UNISHJS8yf8liFoFieQqWBcmxCGmr.png", // Nueva enmalladora
  ]

  const nextProduct = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentProductIndex((prev) => {
        const nextIndex = prev + 4
        return nextIndex >= products.length ? 0 : nextIndex
      })
      setIsFading(false)
    }, 300)
  }

  const prevProduct = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentProductIndex((prev) => {
        const prevIndex = prev - 4
        return prevIndex < 0 ? Math.max(0, products.length - 4) : prevIndex
      })
      setIsFading(false)
    }, 300)
  }

  const products: Product[] = [
    {
      id: 1,
      title: "Máquina Automática VAC 929 C-Pack",
      description: "Es un equipo diseñado para el empaque automatizado de frutas en malla tejida, con cierre por fleje cobrizado y etiqueta corbata.",
      details: `Características:
• Sistema de cerrado: utiliza fleje metálico cobrizado.
• Etiqueta corbata: ideal para agregar marca o información del producto.
• Material de empaque: malla tejida tubular.
• Funcionamiento automático, eficiente para líneas de empaque de gran volumen.
• Construcción robusta para trabajo continuo.
• Fácil mantenimiento y operación.

Productos que puede empacar:
• Limón
• Manzana
• Cebolla
• Naranja
• Papa
y otros productos similares en forma y tamaño.

Ventajas:
• Empaque atractivo y ventilado.
• Permite visualizar el producto.
• Ahorro en mano de obra.
• Ideal para supermercados y exportación.`,
      image: "/avattali-img/MAQ.VAC 929.jpg",
    },
    {
      id: 2,
      title: "Red tejida para enmallar fruta",
      description: "Práctica, resistente y versátil. Ideal para proteger y presentar frutas frescas de forma atractiva y funcional.",
      details: `Beneficios:
✅ Alta ventilación
✅ Variedad de colores
✅ Apta para empaques manuales o automáticos

🧠 Optimiza tu empaque y mejora la presentación de tus productos.`,
      image: "/avattali-img/RED TEJIDA TUBULAR.jpg",
    },
    {
      id: 3,
      title: "Red tejida para paletizar",
      description: "Diseñada para brindar estabilidad, ventilación y seguridad en el transporte y almacenamiento de productos en tarimas.",
      details: `Características principales:
• Alta resistencia a la tensión.
• Permite la circulación de aire (ideal para productos frescos o que necesitan refrigeración).
• Compatible con sistemas automáticos y aplicación manual.
• Disponible en diferentes anchos y longitudes.

Usos comunes:
✔️ Frutas y verduras
✔️ Aguas y productos agrícolas/congelados

📦 Reduce el desperdicio, mejora la logística y protege la carga.`,
      image: "/avattali-img/RED DE PALETIZAR.jpg",
    },
    {
      id: 4,
      title: "Etiqueta Corbata para Enmalladoras",
      description: "Diseñada para máquinas automáticas o semiautomáticas de enmallado. Solución eficiente y atractiva para identificar y promocionar productos.",
      details: `Características:
• Fabricada en papel térmico y BOPP de alta calidad.
• Impresión personalizada (marca, código de barras, peso).
• Diseño tipo "corbata" que se engrapa en la parte superior de la bolsa.
• Compatible con equipos automáticos.
• Resistente a la manipulación y humedad.

Ideal para:
🍋 Frutas, verduras y productos en malla tejida.
✨ Mejora la presentación del producto.
🎯 Aporta identidad de marca en punto de venta.`,
      image: "/avattali-img/RED TEJIDA CON FRUTA Y ETIQUETA CORBATA.jpg",
    },
    {
      id: 5,
      title: "Etiqueta PLU para fruta",
      description: "Solución clave para identificar, clasificar y rastrear frutas frescas en puntos de venta.",
      details: `Características:
• Fabricada en material adhesivo especial para contacto con alimentos.
• Impresión personalizada o genérica:
🔹 Nombre del producto
🔹 Origen
🔹 Marca o logotipo
• Adhesivo grado alimenticio, fácil de remover.
• Resistente a humedad y refrigeración.

Ideal para:
🍏 Manzanas, peras, aguacates, plátanos, mangos, cítricos.
✅ Refuerza la imagen de marca en productos a granel.`,
      image: "/avattali-img/PLU ETIQUETA PARA FRUTA.jpg",
    },
    {
      id: 6,
      title: "Máquina Semiautomática HCL 912 C-Pack",
      description: "Equipo eficiente para frutas y hortalizas en red tejida.",
      details: `La HCL 912 C-Pack es una máquina semiautomática especialmente diseñada para empacar productos agrícolas como limón, ajo, cebolla (entre otros), en red tejida con cierre mediante fleje cobrizado y etiqueta corbata.

Características:
• Operación semiautomática.
• La cantidad de empaques dependerá del producto y la habilidad del operador.
• Mantenimiento sencillo con acceso rápido a componentes clave.

Aplicaciones:
Empacadoras y exportadoras.

Diseñada para:
Trabajo continuo en ambientes agrícolas y empacadoras.`,
      image: "/avattali-img/maquina VAC929.jpg",
    },
    {
      id: 7,
      title: "Máquina Semiautomática Easy Pack – Intermas",
      description: "Solución eficiente para el empaque de frutas y verduras en malla tejida.",
      details: `La Easy Pack de Intermas es una máquina semiautomática diseñada para el empaque rápido y eficiente de frutas y verduras utilizando malla tejida tubular.

👉 El sistema de cierre incluye fleje cobrizado y etiqueta corbata, ideal para presentación en puntos de venta.`,
      image: "/avattali-img/MAQ. EASY PACK INTERMAS.jpg",
    },
    {
      id: 8,
      title: "Film o Película de Respaldo",
      description: "Diseñado para máquinas automáticas de enmallado, brinda soporte para formar y sellar bolsas de malla con eficiencia y precisión.",
      details: `Características:
• Fabricado en polietileno de alta calidad.
• Compatible con equipos automáticos.
• Proporciona rigidez y soporte a la estructura de la bolsa.
• Facilita el sellado y corte automático.
• Disponible en color verde y calibres específicos.

Ideal para:
🍊 Enmallado de frutas (cítricos, aguacate, papas, etc.)
✅ Mejora la velocidad del proceso y la presentación final del producto.`,
      image: "/avattali-img/RED TEJIDA TUBULAR CON FRUTA.jpg",
    },
    {
      id: 9,
      title: "Red tejida para fardos",
      description: "Diseñada para asegurar y mantener unidos productos compactados.",
      details: `Características:
• Fabricada en polietileno de alta resistencia con aditivos UV.
• Tejido flexible y durable.
• Permite la circulación de aire (ideal para productos agrícolas).
• Apta para aplicaciones manuales o automáticas con enfardadoras.
• Disponible en varios anchos y longitudes.

Aplicaciones comunes:
🌿 Fardos de pasto o forraje
🧅 Fardos de hortalizas (como cebolla)
📦 Materiales ligeros apilados

✅ Facilita el manejo de carga, reduce daños y mejora la presentación del producto.`,
      image: "/avattali-img/RED DE PALETIZAR(2).jpg",
    },
    {
      id: 10,
      title: "Etiqueta Térmica Impresa Personalizada en Rollo",
      description: "Ideal para: Enmalladoras automáticas de frutas y verduras.",
      details: `Etiquetas térmicas personalizadas de alta calidad, diseñadas para identificar y presentar comercialmente frutas.

Aplicaciones:
• Máquinas automáticas con impresora térmica y sistema de etiquetado automático.`,
      image: "/avattali-img/ETIQUETA PLU PARA FRUTA.jpg",
    },
    {
      id: 11,
      title: "Etiqueta Térmica Lisa en Rollo",
      description: "Para impresión personalizada de datos del producto y cliente.",
      details: `Ideal para:
Copetes genéricos con malla tejida.

Descripción:
Las etiquetas térmicas lisas en rollo son la solución ideal para clasificación, trazabilidad y personalización de productos en el proceso de empaque.

Características:
• Se utilizan con impresoras térmicas.
• Formato en rollo.
• Compatibles con impresoras térmicas de escritorio o industriales (ej. Zebra).
• Disponibles en medidas variadas.`,
      image: "/avattali-img/MALLA CON FRUTA Y ETIQUETA CORBATA.jpg",
    },
    {
      id: 12,
      title: "Máquina Automática VAS 929 C-Pack",
      description: "La VAS 929 C-Pack es una máquina de empaque automático de alta producción, diseñada para formar bolsas mediante cierre térmico con film o película de respaldo y malla tejida.",
      details: `Ideal para:
Operaciones que requieren eficiencia, presentación atractiva y velocidad.

Características técnicas:
• Sistema de cerrado térmico.
• Diseñada para altas producciones.
• Construida para operar de forma continua, fácil de limpiar y mantener.

Aplicaciones comunes:
🥑 Aguacate
🍎 Manzana
🍊 Naranja
Y otras frutas que requieran buena presentación.`,
      image: "/avattali-img/RED TEJIDA TUBULAR  Y RED DE PALETIZAR.jpg",
    },
    {
      id: 13,
      title: "Máquina Automática para Ajo C-Pack",
      description: "Especializada en el emmallado de ajo.",
      details: `Ofrece eficiencia, uniformidad y presentación profesional en el empaque de ajo.

Características principales:
• Sistema de enmallado automático.
• Coloca el ajo en malla tejida de alta resistencia, ideal para su conservación.
• Cierre con fleje cobrizado.
• Usa etiqueta tipo corbata para incluir información del producto, marca o código de barras.

Ventajas:
✅ Aumenta la productividad al automatizar
✅ Presentación atractiva para supermercados

Aplicación:
🌱 Empacadoras agrícolas
🧄 Productores y exportadores de ajo`,
      image: "/avattali-img/MAQ. PARA AJO C-PACK.jpg",
    },
    {
      id: 14,
      title: "Copete Genérico con Malla para Empaque Manual",
      description: "Solución práctica y económica para el empaque manual de frutas.",
      details: `Características:
• Copete impreso genérico (sin marca).
• Incluye malla tejida del color requerido.
• Listo para ser llenado y cerrado manualmente.
• Buena ventilación para mantener la frescura.

Ideal para empacar:
🍋 Limón
🥔 Papa
🍊 Mandarina
🧅 Cebolla
🥑 Aguacate, entre otros.

✅ Perfecto para mercados, supermercados y exportación.`,
      image: "/avattali-img/COPETE GENERICO VERDE CON MALLA.jpg",
    },
    {
      id: 15,
      title: "Copete Personalizado con Malla Tejida para Fruta",
      description: "Presenta tus productos con imagen profesional y diferenciada.",
      details: `Características:
• Copete impreso a medida con logotipo, colores y datos requeridos.
• Excelente presentación en puntos de venta.
• Apto para procesos manuales.

Ideal para empacar:
🍋 Limón, 🍊 mandarina, 🥑 aguacate, 🍎 manzana, 🥔 papa, 🧅 cebolla

✅ Refuerza la identidad de marca
✅ Mejora la percepción del producto
✅ Ideal para supermercados, exportación y venta nacional`,
      image: "/avattali-img/FRUTA ENMALLADA .jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-L0fTp17NVPRN6LYnSBaoYyRGqrrRH6.png"
              alt="AVATTALI Logo"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('productos')} 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('empresa')} 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium"
            >
              Empresa
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium"
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-cover bg-center min-h-[44rem]"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        {/* Overlay para opacidad */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Texto AVATTALI abajo a la izquierda */}
        <div className="absolute bottom-8 left-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">AVATTALI</h1>
          {/* Enlaces debajo */}
          <div className="mt-4 flex space-x-6">
            <button
              onClick={() => scrollToSection('productos')}
              className="text-xl text-white font-medium underline hover:text-green-200 transition-all duration-300 hover:scale-105"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-xl text-white font-medium underline hover:text-green-200 transition-all duration-300 hover:scale-105"
            >
              Contactar
            </button>
          </div>
        </div>
      </section>




      {/* About Section */}
      <section id="empresa" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Empresa Mexicana</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Más de 25 años, AVATTALI es conocida en toda La República mexicana como fabricante de redes tejidas para
              empaque de todo tipo de productos.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Factory className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Redes Tejidas</h3>
                <p className="text-gray-600">Redes Tejidas para fruta y Red Tejida para Paletizar</p>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Importación</h3>
                <p className="text-gray-600">Maquinaria
                  Enmalladoras C-PACK
                  e INTERMAS</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Trayectoria</h3>
                <p className="text-gray-600">Amplia experiencia y liderazgo en el mercado nacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles for Smooth Scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          scroll-padding-top: 80px; /* Adjust based on your header height */
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>

      {/* Products Section */}
      <section id="productos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestros Productos
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevProduct}
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-105"
                aria-label="Productos anteriores"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <div className="text-center">
                <span className="text-lg font-medium text-gray-700">
                  Productos {currentProductIndex + 1}-{Math.min(currentProductIndex + 4, products.length)} de {products.length}
                </span>
              </div>

              <button
                onClick={nextProduct}
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-105"
                aria-label="Siguientes productos"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Products Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              {products.slice(currentProductIndex, currentProductIndex + 4).map((product, index) => (
                <div key={product.id} className="flex-shrink-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="h-[28rem] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader className="p-0 flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                        </CardHeader>
                        <CardContent className="p-6">
                          <CardTitle className="text-lg mb-2 text-gray-900">{product.title}</CardTitle>
                          <CardDescription className="text-sm text-gray-600">
                            {product.description}
                          </CardDescription>
                          <div className="mt-4">
                            <Badge variant="secondary" className="text-xs">
                              Ver detalles
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                          {product.title}
                        </DialogTitle>
                        <DialogDescription className="text-xl text-gray-700 leading-relaxed">
                          {product.description}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid lg:grid-cols-2 gap-8 mt-8">
                        <div className="space-y-4">
                          <div className="relative">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-80 object-cover rounded-xl shadow-lg"
                            />
                            <div className="absolute top-4 right-4">
                              <Badge variant="secondary" className="bg-white/90 text-gray-800 font-medium">
                                Producto {product.id}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-medium">
                              Producto AVATTALI
                            </Badge>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                              Calidad Garantizada
                            </Badge>
                            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 font-medium">
                              Made in Mexico
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                              Información Detallada
                            </h3>
                            <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                              {product.details}
                            </div>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="flex items-center justify-between">
                              <div className="text-green-800 font-medium">
                                ¿Interesado en este producto?
                              </div>
                              <Button 
                                onClick={() => window.open("https://wa.link/vqfajc", "_blank")}
                                className="bg-green-600 hover:bg-green-700 text-white font-medium"
                                size="lg"
                              >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Consultar por WhatsApp
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>

            {/* Product Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(products.length / 4) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductIndex(index * 4)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    Math.floor(currentProductIndex / 4) === index
                      ? 'bg-green-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a página ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Certificaciones y Calidad</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-yP4Y0ina4VLtSNgU4heEBIEIiH8lKZ.png"
                  alt="FDA Approved"
                  className="mx-auto h-20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600" />
                Aprobado por FDA
              </h3>
              <p className="text-gray-600">
                Todos nuestros productos están elaborados con materiales vírgenes y están aprobados por la FDA para ser
                utilizados directamente con alimentos sin contaminarlos.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-57TcaFGXKo0PzrY4mumnlhHx1bp2ne.png"
                  alt="D2W Certification"
                  className="mx-auto h-20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <Leaf className="w-6 h-6 mr-2 text-green-600" />
                Certificación D2W
              </h3>
              <p className="text-gray-600">
                Comprometidos con el medio ambiente, contamos con certificación D2W que avala la elaboración de
                productos con Tecnología Plástica Oxo-Biodegradable y materiales reciclados.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestra Ubicación
          </h2>

          <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1879.0480506906329!2d-99.11376510000005!3d19.623188799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f6a7fe6af3e9%3A0x59ac38ddb516976!2savattali!5e0!3m2!1ses!2smx!4v1749506985872!5m2!1ses!2smx"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contacto</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="https://www.facebook.com/AvattaliMX/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <Facebook className="w-6 h-6" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/avattali.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-pink-600 hover:text-pink-700"
                >
                  <Instagram className="w-6 h-6" />
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:avattali.mxcontacto@gmail.com"
                  className="flex items-center space-x-2 text-green-700 hover:text-green-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm0 0l8 8m0 0l8-8m-8 8v8" /></svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {scrollProgress > 20 && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            size="lg"
            variant="outline"
            className="bg-white/90 hover:bg-white border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-6 h-6 text-gray-700" />
          </Button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          {/* Efecto de ondas */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-50 scale-110"></div>

          <Button
            size="lg"
            className="relative bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
            onClick={() => window.open("https://wa.link/vqfajc", "_blank")}
          >
            <div className="flex flex-col items-center">
              <MessageCircle className="w-10 h-10 mb-1" />
              <span className="text-xs font-bold">WhatsApp</span>
            </div>
          </Button>

          {/* Texto flotante mejorado */}
          <div className="absolute -top-16 -left-8 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
            ¡Contáctanos ahora!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="text-xl font-bold mb-4">AVATTALI</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fabricante de Red Tejida para fruta y distribuidor de Maquinaria de Empaque
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-4">Experiencia</p>
              <p className="text-gray-400 text-sm">
                Más de 25 años de experiencia en el mercado mexicano
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Líder en soluciones de empaque para la industria agrícola
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-4">Contacto</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.facebook.com/AvattaliMX/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/avattali.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:avattali.mxcontacto@gmail.com"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm0 0l8 8m0 0l8-8m-8 8v8" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 AVATTALI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
