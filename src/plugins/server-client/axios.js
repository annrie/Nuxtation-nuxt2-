export default function ({ $axios }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    const redirect = null;
    if (code === 400) {
      redirect("/400");
    }
  });
}
