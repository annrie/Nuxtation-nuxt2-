import https from "https";
export default function ({ $axios }) {
  $axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      config.headers.common.Authorization = `Bearer ${process.env.QIITA_TOKEN}`;
    }
    return config;
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    const redirect = null;
    if (code === 400) {
      redirect("/400");
    }
  });
}
