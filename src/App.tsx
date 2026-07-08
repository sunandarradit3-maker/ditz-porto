/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  MonitorSmartphone, 
  Rocket, 
  ShieldCheck, 
  Code2,
  ExternalLink,
  Star,
  Quote,
  User,
  Award,
  Zap,
  Crown
} from 'lucide-react';

const goldText = "text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600";

// KONFIGURASI GAMBAR DAN KONTAK
// Ganti nilai di bawah ini dengan nama file gambar Anda setelah mendownload source code.
// Letakkan file gambar Anda di dalam folder 'public' (buat foldernya jika belum ada).
// Contoh: logo: "/logo-brand.png"
const CONFIG = {
  whatsapp: "6287739435496",
  email: "ditzstoreofficial@gmail.com",
  images: {
    // Jika logo kosong, akan menampilkan inisial teks "DZ"
    logo: "logo.png", // Contoh isi: "/logo.png" atau "/logo.jpg"
    
    // Gambar untuk bagian portofolio
    // Ganti URL Unsplash di bawah ini dengan nama file gambar lokal Anda, contoh: "/portofolio-1.jpg"
    project1: "project-1.png", 
    project2: "project-2.png",
    project3: "project-3.png",
    
    // Gambar profil Founder
    founder: "ditz.png"
  }
};

export default function App() {
  const whatsapp = CONFIG.whatsapp;
  const email = CONFIG.email;
  
  const handleWA = () => {
    window.open(`https://wa.me/${whatsapp}?text=Halo%20DiTz%20Store,%20saya%20tertarik%20untuk%20membuat%20website...`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder - User can replace with their actual logo image via CONFIG */}
            {CONFIG.images.logo ? (
              <img src={CONFIG.images.logo} alt="DiTz Store Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]" />
            ) : (
              <div className="w-10 h-10 rounded bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                <span className="text-black font-extrabold text-xl tracking-tighter">DZ</span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wide text-white leading-tight">DiTz <span className={goldText}>Store</span></span>
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase">Premium Quality</span>
            </div>
          </div>
          <button 
            onClick={handleWA}
            className="hidden md:flex items-center gap-2 bg-yellow-500 text-black px-5 py-2.5 rounded-full font-bold hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
          >
            <MessageCircle size={18} />
            Konsultasi Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-sm font-medium text-yellow-500">Jasa Pembuatan Website Profesional</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Tingkatkan Bisnis Anda dengan <br className="hidden md:block"/>
              <span className={goldText}>Website Premium</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              DiTz Store hadir membantu UMKM dan Brand membangun identitas digital yang profesional dan kredibel. Harga terjangkau, kualitas global, dan terima beres.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleWA}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all"
              >
                <MessageCircle size={20} />
                Hubungi WhatsApp
              </button>
              <button 
                onClick={handleEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                <Mail size={20} />
                Email Kami
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-900/30 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mengapa Memilih <span className={goldText}>DiTz Store?</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Kami tidak sekadar membuat website, kami membangun fondasi digital agar bisnis Anda semakin dipercaya oleh pelanggan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MonitorSmartphone className="text-yellow-500" size={32} />,
                title: "Desain Premium",
                desc: "Antarmuka modern, elegan, dan responsif di semua perangkat (Mobile & Desktop)."
              },
              {
                icon: <Rocket className="text-yellow-500" size={32} />,
                title: "Performa Cepat",
                desc: "Dioptimalkan untuk kecepatan dan SEO agar mudah ditemukan di Google."
              },
              {
                icon: <ShieldCheck className="text-yellow-500" size={32} />,
                title: "Harga UMKM",
                desc: "Kualitas website corporate global dengan harga yang ramah untuk kantong UMKM."
              },
              {
                icon: <Code2 className="text-yellow-500" size={32} />,
                title: "Terima Beres",
                desc: "Mulai dari desain, server, hingga online. Anda tinggal fokus kembangkan bisnis."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-yellow-500/30 hover:bg-white/[0.07] transition-colors"
              >
                <div className="bg-yellow-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hasil <span className={goldText}>Project Kami</span></h2>
              <p className="text-neutral-400 max-w-xl text-lg">
                Beberapa contoh hasil karya desain antarmuka dan website yang kami kerjakan. Bukti nyata kualitas premium yang akan Anda dapatkan.
              </p>
            </div>
            <button onClick={handleWA} className="flex items-center gap-2 text-yellow-500 font-semibold hover:text-yellow-400 group">
              Mulai Project Anda <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-24">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 mb-6">
                  E-Commerce & Retail
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Platform Toko Online Premium</h3>
                <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                  Website toko online dinamis dengan manajemen produk, keranjang belanja, dan tampilan katalog yang mewah. Dirancang khusus untuk brand fashion dan retail yang ingin tampil eksklusif.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Katalog Produk Dinamis', 'Integrasi Keranjang Belanja', 'Desain Mewah (Silent Luxury)', 'Filter & Kategori Pintar'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                      <CheckCircle2 className="text-yellow-500" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-yellow-500/5 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  {/* Gambar Portofolio 1 (Bisa diganti di CONFIG) */}
                  <img 
                    src={CONFIG.images.project1} 
                    alt="E-Commerce Project" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-yellow-500/5 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  {/* Gambar Portofolio 2 (Bisa diganti di CONFIG) */}
                  <img 
                    src={CONFIG.images.project2} 
                    alt="Trading Dashboard Project" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 mb-6">
                  Dashboard & Finansial
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Trading & Analitik Real-Time</h3>
                <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                  Platform interaktif untuk monitoring data, chart pergerakan harga, dan analitik finansial secara real-time. Hadir dengan antarmuka dark-mode tingkat lanjut untuk kenyamanan mata.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Chart Data Real-time', 'Indikator Analisis Teknikal', 'UI Dark Mode Eksklusif', 'Sistem Manajemen Portofolio'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                      <CheckCircle2 className="text-yellow-500" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 mb-6">
                  Web App Interaktif
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Aplikasi Antarmuka Futuristik</h3>
                <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                  Pembuatan antarmuka web interaktif dengan visualisasi tingkat tinggi, animasi mulus, dan desain konseptual. Cocok untuk aplikasi khusus, landing page kreatif, maupun portal game.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Desain Konseptual & Unik', 'Animasi Antarmuka Mulus', 'Visualisasi Elemen Kustom', 'Pengalaman Pengguna Imersif'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                      <CheckCircle2 className="text-yellow-500" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-yellow-500/5 group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  {/* Gambar Portofolio 3 (Bisa diganti di CONFIG) */}
                  <img 
                    src={CONFIG.images.project3} 
                    alt="Interactive Web App Project" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Packages / Pricing */}
      <section className="py-24 bg-neutral-900/30 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pilihan <span className={goldText}>Paket UMKM</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Kami menyediakan paket dengan harga terjangkau namun kualitas tetap premium. Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-yellow-500/30 hover:bg-white/[0.07] transition-all flex flex-col h-full relative overflow-hidden group"
            >
              <div className="mb-8">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white group-hover:text-yellow-500 transition-colors">
                  <User size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                <p className="text-neutral-400 text-sm mb-6">Cocok untuk profil singkat dan portofolio personal.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-neutral-500">Mulai dari</span>
                  <span className="text-3xl font-bold text-white">Rp 999rb</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['1 Halaman Landing Page', 'Desain Modern & Responsif', 'Gratis Domain & Hosting 1 Tahun', 'Revisi 2x', 'Tombol WhatsApp & Sosmed'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={16} /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={handleWA} className="w-full py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors mt-auto">
                Pilih Basic
              </button>
            </motion.div>

            {/* Gold Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/30 p-8 rounded-3xl relative overflow-hidden flex flex-col h-full transform md:-translate-y-4 shadow-[0_0_30px_rgba(234,179,8,0.1)]"
            >
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Terpopuler
              </div>
              <div className="mb-8">
                <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Gold</h3>
                <p className="text-neutral-400 text-sm mb-6">Ideal untuk UMKM, company profile, dan layanan jasa.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-neutral-500">Mulai dari</span>
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Rp 2,5jt</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Hingga 5 Halaman Web', 'Desain Premium Custom', 'Gratis Domain (.com) 
