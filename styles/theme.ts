import { DefaultTheme } from 'styled-components'

const deviceSizes = {
  mobile: '767px',
  tablet: '1023px',
  tabletMax: '1023px',
  laptop: '1024px',
}

const colors = {
  background: '#F8F9F9',
}

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width:${deviceSizes.mobile}) and (max-width: ${deviceSizes.tablet})`,
  tabletMax: `screen and (max-width: ${deviceSizes.laptop})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
}

const theme: DefaultTheme = {
  device,
  colors,
}

export default theme
