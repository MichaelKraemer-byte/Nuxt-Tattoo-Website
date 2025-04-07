// types/klaro.d.ts

export {}; // <-- macht diese Datei zu einem Modul, wichtig für TS!

declare global {
  interface Window {
    klaro: {
      addEventListener: (event: string, callback: () => void) => void;
      show: () => void;
    };
  }
}
