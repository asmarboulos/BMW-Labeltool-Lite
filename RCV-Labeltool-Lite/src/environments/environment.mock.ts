import { version } from './version'

export const environment = {
  version: version,
  production: false,
  configurationFile: 'config/config.json',
  services: {
    mock: true,
  },
}
