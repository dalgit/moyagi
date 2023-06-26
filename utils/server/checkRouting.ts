import { GetServerSidePropsContext } from 'next'
import { GetServerSideProps } from 'next/types'

export const getIsClientRouting = (
  context: GetServerSidePropsContext,
): boolean => Boolean(context?.req?.url?.startsWith('/_next'))

export const withClientRoutingCheck =
  (next: GetServerSideProps) => async (context: GetServerSidePropsContext) => {
    if (getIsClientRouting(context)) {
      return {
        props: {},
      }
    }
    return next?.(context)
  }
