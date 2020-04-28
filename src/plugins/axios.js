/* jshint esversion: 6 */
export default function ({$axios}) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      config.headers.common.Authorization = `Bearer ${process.env.QIITA_TOKEN}`
    }
    return config
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    const redirect = null
    if (code === 400) {
      redirect('/400')
    }
  })
}
