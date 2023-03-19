import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    device: {
      mobile: string
      tablet: string
      tabletMax: string
      laptop: string
    }
  }
}
