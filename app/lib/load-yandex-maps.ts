import type { YMaps3Global } from "@/types/ymaps";

let loadPromise: Promise<YMaps3Global> | null = null;

export const loadYandexMaps = async (apiKey: string): Promise<YMaps3Global> => {
  if (!import.meta.client) {
    throw new Error("Yandex Maps API can only be loaded on the client");
  }

  if (!apiKey) {
    throw new Error("Yandex Maps API key is missing");
  }

  if (window.ymaps3) {
    await window.ymaps3.ready;
    return window.ymaps3;
  }

  if (!loadPromise) {
    loadPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[data-yandex-maps-api="true"]',
      );

      const handleReady = async () => {
        if (!window.ymaps3) {
          reject(
            new Error(
              "Yandex Maps API loaded, but window.ymaps3 is unavailable",
            ),
          );
          return;
        }

        await window.ymaps3.ready;
        resolve(window.ymaps3);
      };

      if (existingScript) {
        existingScript.addEventListener(
          "load",
          () => {
            void handleReady();
          },
          { once: true },
        );

        existingScript.addEventListener(
          "error",
          () => {
            reject(new Error("Failed to load Yandex Maps API"));
          },
          { once: true },
        );

        if (window.ymaps3) {
          void handleReady();
        }

        return;
      }

      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`;
      script.async = true;
      script.dataset.yandexMapsApi = "true";

      script.addEventListener(
        "load",
        () => {
          void handleReady();
        },
        { once: true },
      );

      script.addEventListener(
        "error",
        () => {
          reject(new Error("Failed to load Yandex Maps API"));
        },
        { once: true },
      );

      document.head.appendChild(script);
    });
  }

  return loadPromise;
};
