export {};

declare global {
  interface Window {
    ymaps3?: YMaps3Global;
  }
}

export interface YMaps3Global {
  ready: Promise<void>;
  YMap: new (...args: any[]) => any;
  YMapMarker: new (...args: any[]) => any;
  YMapDefaultSchemeLayer: new (...args: any[]) => any;
  YMapDefaultFeaturesLayer: new (...args: any[]) => any;
}
