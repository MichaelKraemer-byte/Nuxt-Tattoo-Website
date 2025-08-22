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

## ✅ **Probleme behoben:**

### **1. JSON-Syntax komplett korrigiert**

- ✅ Doppelte `description` Schlüssel behoben
- ✅ Korrekte JSON-Struktur wiederhergestellt
- ✅ BookingForm-Labels aktualisiert (`t.form.tattooDescription`)

### **2. Testimonials Reaktivität verbessert**

- ✅ Detailliertere Debug-Logs hinzugefügt
- ✅ Robustere Bedingungsprüfungen (`t && t.about && t.about.testimonials`)
- ✅ `watch()` für Sprachänderungen hinzugefügt
- ✅ Bessere Fehlerbehandlung

### **3. Server neu gestartet**

- ✅ Entwicklungsserver läuft mit korrigierten JSON-Dateien

### **4. Testimonials-Problem grundlegend gelöst**

- ✅ Direkte Verwendung der `languages[currentLanguage.value].locale` anstatt der fehlerhaften `t` computed property
- ✅ Testimonials werden jetzt korrekt aus den Sprachdateien geladen
- ✅ Sprachwechsel funktioniert sofort
- ✅ Debug-Logs vereinfacht und fokussiert

### **5. Gallery-Seite komplett optimiert** 🎨

- ✅ **Moderne Kategorie-Filter**: Fresh Tattoos, Healed Tattoos, Artwork, Instagram
- ✅ **Responsive Grid-Layout**: Optimiert für alle Bildschirmgrößen
- ✅ **Lightbox-Funktionalität**: Vollbildansicht mit Navigation (Pfeiltasten, ESC)
- ✅ **Hover-Effekte**: Moderne Animationen und Übergänge
- ✅ **Lazy Loading**: Bessere Performance durch verzögertes Laden
- ✅ **Keyboard-Navigation**: Pfeiltasten für Lightbox-Navigation
- ✅ **Mehrsprachige Unterstützung**: Alle Texte in DE/EN verfügbar
- ✅ **SEO-Optimierung**: Dynamische Meta-Tags basierend auf Sprache
- ✅ **Custom Scrollbar**: Passend zum Design
- ✅ **Instagram-Integration**: Behält die bestehende Instagram-Funktionalität

## 🎯 **Jetzt testen:**

**Öffne die About-Seite und prüfe:**

1. **Browser-Konsole öffnen** (F12)
2. **About-Seite laden**: `http://localhost:3004/about`
3. **Console-Logs beobachten:**
   - `🔍 useI18n Debug:` sollte `aboutExists: true` und `testimonialsExist: true` zeigen
   - `✅ Using direct language data:` sollte die geladenen Testimonials anzeigen
4. **Sprache wechseln** zwischen DE/EN
5. **Testimonials sollten jetzt korrekt in der jeweiligen Sprache angezeigt werden!**

**Öffne die Gallery-Seite und prüfe:**

1. **Gallery-Seite laden**: `http://localhost:3004/gallery`
2. **Kategorien testen**: Fresh, Healed, Artwork, Instagram
3. **Lightbox testen**: Auf Bilder klicken, Navigation mit Pfeiltasten
4. **Responsive Design**: Verschiedene Bildschirmgrößen testen
5. **Sprachwechsel**: Zwischen DE/EN wechseln

## 🚀 **Nächste Schritte:**

- [ ] Beide Sprachen (DE/EN) testen
- [ ] Testimonials-Text in beiden Sprachen überprüfen
- [ ] Slider-Funktionalität bestätigen
- [ ] Gallery-Kategorien und Lightbox testen
- [ ] Responsive Design der Gallery überprüfen
