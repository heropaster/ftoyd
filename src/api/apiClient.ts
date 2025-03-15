import { DefaultApi } from 'api/swagger'
import { axiosClient } from 'utils/axiosClient.ts'
import type { Configuration } from 'api/swagger'
import type { AxiosInstance } from 'axios'

type ControllerProps = [
  configuration: Configuration | undefined,
  basePath: string | undefined,
  axiosInstance: AxiosInstance,
]

class ApiClient {
  defaultApi

  constructor(props: ControllerProps) {
    this.defaultApi = new DefaultApi(...props)
  }
}

export const apiClient = new ApiClient([undefined, import.meta.env.VITE_API_BASE_URL, axiosClient])
