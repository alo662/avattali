"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
import { MapPin, Facebook, Instagram, MessageCircle, Star, Shield, Leaf, Factory, Truck } from "lucide-react"

export default function AvattaliPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const galleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-Y7jFli01lSorZhpxSaC7ZnjejSIM3g.png", // Imagen 17 - Frutas y verduras en redes
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-hwi6aNUEjxCGneoxfYXPOKbOCCYKfp.png", // Imagen 13 - Red tubular con productos
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-1Ila0DVwkwKFEa8qzzjphE5NnA2Vlk.png", // Imagen 14 - Stand con rollos de red
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-5wWZ4oDSNmhgxUZYN7mQreJERa56NN.png", // Imagen 15 - Empacadora
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9UNISHJS8yf8liFoFieQqWBcmxCGmr.png", // Nueva enmalladora
  ]

  const products = [
    {
      id: 1,
      title: "Red Tejida para Empaque de fruta",
      description:
        "Redes tejidas con resinas vírgenes de alta calidad, ideales para el enmallado manual, automático o semi-automático.",
      details:
        "Redes Tejidas fabricadas con resinas vírgenes de alta calidad, ideales para el enmallado manual, automático o semi-automático. Dando frescura y presentación.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-hwi6aNUEjxCGneoxfYXPOKbOCCYKfp.png", // Imagen 13 - Red tubular
    },
    {
      id: 2,
      title: "Red para Paletizar Fruta y Verdura",
      description: "Redes tejidas fabricadas con resinas vírgenes de alta calidad para paletizado seguro y económico.",
      details: "Red ideal para contener y preservar. Para una carga estable.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-1Ila0DVwkwKFEa8qzzjphE5NnA2Vlk.png", // Imagen 14 - Red para paletizar
    },
    {
      id: 3,
      title: "Empacadora C-PACK HCL 912",
      description: "Cortadora de red semiautomática para empacado de frutas y verduras.",
      details:
        "Ideal para empacado de papas, cebollas, cítricos y otros productos sólidos en redes tejidas. Distribuidor oficial en México de la marca C-PACK.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-5wWZ4oDSNmhgxUZYN7mQreJERa56NN.png", // Imagen 15 - Empacadora
    },
    {
      id: 4,
      title: "Enmalladoras",
      description: "Enmalladora automática para aguacate, manzana, naranja y limón.",
      details:
        "Enmalladora automática para aguacate, manzana, naranja y limón. PLU: Enmalladora automática para aguacate, manzana, naranja y limón. COPETE GENÉRICO Y PERSONALIZADO, ETIQUETA CORBATA, FILM VERDE, ETIQUETA TÉRMICA DIRECTO.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9UNISHJS8yf8liFoFieQqWBcmxCGmr.png", // Nueva enmalladora
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-L0fTp17NVPRN6LYnSBaoYyRGqrrRH6.png"
              alt="AVATTALI Logo"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-green-600 transition-colors">
              Productos
            </a>
            <a href="#empresa" className="text-gray-700 hover:text-green-600 transition-colors">
              Empresa
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-green-600 transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Gallery */}
      <section id="inicio" className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">AVATTALI</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Fabricante de Red Tejida para fruta y distribuidor de Maquinaria de Empaque
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Badge className="bg-green-600 text-white px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Más de 25 años de experiencia
              </Badge>
            </div>
          </div>

          {/* Gallery */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <img
                src={galleryImages[selectedImage] || "/placeholder.svg"}
                alt="Galería AVATTALI"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2 justify-center overflow-x-auto">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-green-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="empresa" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Empresa Mexicana</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Más de 25 años, AVATTALI es conocida en toda la república mexicana como fabricante de redes tejidas para
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
                <h3 className="font-semibold text-gray-900 mb-2">Distribución</h3>
                <p className="text-gray-600">Empacadoras y Enmalladoras especializadas</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Experiencia</h3>
                <p className="text-gray-600">Más de 25 años en el mercado mexicano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Nuestros Productos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Dialog key={product.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-lg mb-2">{product.title}</CardTitle>
                      <CardDescription className="text-sm">{product.description}</CardDescription>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{product.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-6">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div>
                      <DialogDescription className="text-base leading-relaxed">{product.details}</DialogDescription>
                      <Button
                        className="mt-4 bg-green-600 hover:bg-green-700"
                        onClick={() => window.open("https://wa.link/vqfajc", "_blank")}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Consultar por WhatsApp
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
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

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestra Ubicación</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Aquí se insertará el mapa de Google Maps</p>
                <p className="text-sm text-gray-500 mt-2">Proporciona la dirección exacta para integrar el mapa</p>
              </div>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
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

          {/* Texto flotante */}
          <div className="absolute -top-12 -left-8 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg animate-bounce">
            ¡Contáctanos!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">AVATTALI</p>
          <p className="text-gray-400">Fabricante de Red Tejida para fruta y distribuidor de Maquinaria de Empaque</p>
          <p className="text-gray-400 mt-2">Más de 25 años de experiencia</p>
        </div>
      </footer>
    </div>
  )
}
