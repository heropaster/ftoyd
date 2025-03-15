import { useQuery } from '@tanstack/react-query'
import { apiClient } from 'api/apiClient.ts'

export const useFetchMatches = () =>
  useQuery({
    queryKey: ['matches'],
    queryFn: () => apiClient.defaultApi.fetch(),
  })
