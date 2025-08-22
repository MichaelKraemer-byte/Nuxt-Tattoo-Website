export default defineNuxtPlugin(() => {
  // Performance-Optimierungen nur im Client
  if (process.client) {
    // Lazy loading für Bilder
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // Alle lazy images beobachten
      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }

    // Preload wichtige Ressourcen
    const preloadLinks = [
      { rel: "preload", href: "/logo/mkc-tattooart.svg", as: "image" },
      { rel: "preload", href: "/videos/hero-video.mp4", as: "video" },
    ];

    preloadLinks.forEach((link) => {
      const linkElement = document.createElement("link");
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Service Worker für Caching (optional)
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {
          // Service Worker nicht verfügbar
        });
      });
    }

    // Performance-Monitoring
    if ("performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType("navigation")[0];
          if (perfData) {
            console.log(
              "Page Load Time:",
              perfData.loadEventEnd - perfData.loadEventStart,
              "ms"
            );
          }
        }, 0);
      });
    }

    // Mobile Performance-Optimierungen
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Reduzierte Animationen auf Mobile
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.2s"
      );

      // Einfachere Schatten auf Mobile
      const style = document.createElement("style");
      style.textContent = `
        @media (max-width: 768px) {
          * {
            transition-duration: 0.2s !important;
          }
          .shadow-2xl {
            box-shadow: 0 5px 10px rgba(0,0,0,0.1) !important;
          }
          
          /* AOS-Animationen für alle Seiten */
          [data-aos] {
            animation-duration: 0.4s !important;
          }
          
          /* Swiper-Optimierungen */
          .swiper {
            will-change: auto !important;
          }
          
          /* Form-Optimierungen */
          input, textarea, select {
            transition-duration: 0.2s !important;
          }
          
          /* Button-Optimierungen */
          .cta-button {
            transition-duration: 0.2s !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Reduzierte Bildqualität auf Mobile
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        if (img.src.includes("/img/")) {
          img.loading = "lazy";
          img.decoding = "async";
        }
      });

      // AOS-Initialisierung für alle Seiten optimieren
      if (window.AOS) {
        window.AOS.refresh();
      }
    }
  }
});
