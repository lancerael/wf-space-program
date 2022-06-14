import fetchMock, { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { apiRequestStatus, controllers, abortRequestStatus } from './apiRequestStatus'

const mockFetchStatus = (status: number) => fetchMock.mockResponseOnce(() => new Promise(resolve => setTimeout(() => resolve({status}))))

describe('API status requests', () => {

  it('requests a success status', async () => {
    mockFetchStatus(200)
    const status = await apiRequestStatus('test')
    expect(status).toBe(200)
  })

  it('requests a failure status', async () => {
    mockFetchStatus(500)
    const status = await apiRequestStatus('test')
    expect(status).toBe(500)
  })

})

describe('Abort controllers', () => {

  it('adds an abort controller', async () => {
    mockFetchStatus(200)
    expect(Object.keys(controllers).length).toEqual(0)
    await apiRequestStatus('test', 'test')
    expect(Object.keys(controllers).length).toEqual(1)
  })

  it('aborts a request', async () => {
    mockFetchStatus(200)
    await apiRequestStatus('test')
    controllers['test'] = { abort: jest.fn(), signal: {} as AbortSignal }
    abortRequestStatus('test')
    expect(controllers['test'].abort).toHaveBeenCalledTimes(1)
  })
  
})

describe('Timeout', () => {

  it('times out a request', async () => {
    mockFetchStatus(200)
    const status = await apiRequestStatus('test', 'test', 1)
    expect(status).toBe(500)
  })

})
