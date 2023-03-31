const fetch = require("node-fetch");

const URL = "http://wave.ttu.edu/ajax.php/";

async function waveAPI(url = URL, query, editor, action) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: {
      action,
      query,
      editor: editor,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error(err));
}

exports.getWaveAPI = async (req, res) => {
  waveAPI({ ...req }).then((d) => {
    res.status(200).send(d);
  });
};
