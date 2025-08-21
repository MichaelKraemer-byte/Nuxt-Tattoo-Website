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
  }
});

