type CreateChannelValidations = {
  name: (name: string) => boolean
  address: (address: string) => boolean
  description: (name: string) => boolean
}

const channelValidations: CreateChannelValidations = {
  name: (name) => {
    return name.length <= 14
  },
  address: (address) => {
    const regex = /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/
    return regex.test(address)
  },
  description: (description) => {
    return description.length <= 40
  },
}

export default channelValidations
