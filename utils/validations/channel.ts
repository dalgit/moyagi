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
    const regex = /^[a-zA-Z]+(-[a-zA-Z]+)*$/
    return regex.test(address)
  },
  description: (description) => {
    return description.length <= 40
  },
}

export default channelValidations
