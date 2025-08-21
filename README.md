# MKC Tattoo Website - Nuxt 3

Eine moderne Tattoo-Website gebaut mit Nuxt 3, Tailwind CSS und Vue 3.

## 🌍 Mehrsprachigkeit

Die Website unterstützt vollständig **Deutsch** und **Englisch**:

- **Sprachwechsel** über den Header (Desktop & Mobile)
- **Automatische Persistierung** der Sprachauswahl
- **Vollständige Übersetzung** aller Inhalte
- **SEO-optimiert** für beide Sprachen

### Verfügbare Sprachen

- 🇩🇪 **Deutsch** (Standard)
- 🇺🇸 **English**

## 🚀 Performance-Optimierungen

Diese App wurde mit folgenden Performance-Optimierungen entwickelt:

### Core Optimierungen

- **SSR aktiviert** für bessere SEO und initiale Ladezeiten
- **Lazy Loading** für Bilder und iframes
- **Code Splitting** mit manuellen Chunks für Vendor-Bibliotheken
- **Service Worker** für Caching und offline-Funktionalität
- **Intersection Observer** für effizientes lazy loading

### Build Optimierungen

- **CSS Code Splitting** für kleinere Bundle-Größen
- **Tree Shaking** für ungenutzte Abhängigkeiten
- **Image Optimization** mit WebP/AVIF Support
- **Minification** und Komprimierung aller Assets

### Runtime Optimierungen

- **Preload** wichtiger Ressourcen (Logo, Video)
- **Deferred Loading** für nicht-kritische Komponenten
- **Performance Monitoring** mit eingebauten Metriken

## 📦 Installation

```bash
npm install
```

## 🛠️ Entwicklung

```bash
npm run dev
```

## 🏗️ Build

```bash
# Standard Build
npm run build

# Build mit Bundle-Analyse
npm run build:analyze

# Performance-Test mit Lighthouse
npm run lighthouse
```

## 🎯 Performance-Metriken

Nach den Optimierungen sollten Sie folgende Verbesserungen sehen:

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

## 🔧 Technologien

- **Nuxt 3** - Vue.js Framework
- **Tailwind CSS** - Utility-First CSS Framework
- **Vue 3** - Progressive JavaScript Framework
- **Pinia** - State Management
- **TypeScript** - Type Safety
- **i18n** - Mehrsprachigkeit

## 📱 Features

- **Vollständig mehrsprachig** (DE/EN)
- Responsive Design
- SEO-optimiert
- Performance-optimiert
- Service Worker für offline-Funktionalität
- Lazy Loading für bessere Performance
- Moderne Bildformate (WebP, AVIF)

## 📄 Seiten

- **Home** - Hero-Sektion mit Kontaktformular
- **Gallery** - Instagram-Integration
- **About** - Über mich Sektion
- **Privacy Policy** - Datenschutzerklärung
- **Imprint** - Impressum

## 🌍 Übersetzungsstruktur

```
locales/
├── de.json          # Deutsche Übersetzungen
└── en.json          # Englische Übersetzungen
```

### Übersetzungsbereiche

- Navigation & Header
- Hero-Sektion
- Gallery & Instagram
- About-Seite (vollständig)
- Formulare
- Footer & Cookie-Banner
- Allgemeine Texte

## 🚀 Deployment

Die App ist für statisches Hosting optimiert und kann auf allen modernen Hosting-Plattformen deployed werden.
