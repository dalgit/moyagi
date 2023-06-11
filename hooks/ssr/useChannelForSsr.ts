import { QueryClient } from '@tanstack/react-query'
import React from 'react'
import createServerInstance from 'utils/axios/server'
import { channelKeys } from 'utils/queryKeys/channel'

const useChannelForSsr = (context: ant) => {
  const server = createServerInstance(context)
  const queryClient = new QueryClient()

    try {
    await queryClient.fetchQuery(channelKeys.detail(slug as string), () =>
      server
        .get('/channels', {
          params: { channelAddress: slug },
        })
        .then((res) => res.data),
    )

}

export default useChannelForSsr
