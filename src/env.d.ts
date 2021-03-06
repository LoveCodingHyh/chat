/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_SOCKET_BASE_URL: string
  readonly VITE_WX_BASE_URL: string
}

declare module 'echarts-gl/components' {
  declare function Grid3DComponent(): any
  declare function Geo3DComponent(): any
  declare function GlobeComponent(): any
  declare function Mapbox3DComponent(): any
  declare function Maptalks3DComponent(): any
}
