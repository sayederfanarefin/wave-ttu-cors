const fetch = require("node-fetch");
const FormData = require("form-data");

const URL = "http://wave.ttu.edu/ajax.php/";

async function waveAPI({ action, query, editor }) {
  return fetch(URL, {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-requested-with": "XMLHttpRequest",
    },
    body: `action=${action}&query=${query}&editor=${editor}`,
    method: "POST",
  })
    .then((res) => {
      return res.text();
    })
    .then((d) => {
      return { result: d };
    })
    .catch((err) => console.error(err));
}

exports.getWaveAPI = async (req, res) => {
  waveAPI({ ...req.body }).then((d) => {
    res.status(200).send(d);
  });
};
