const dotenv = require("dotenv");
const fetch = require("node-fetch");

const URL =
  "https://propetro-qa.intelie.com/services/plugin-propetro-intern-virtual/propetro/integrations/intern/virtual/active-pump-values-by-pump/";

dotenv.config();
const { INTELLI_AUTHORIZATION } = process.env;
async function getIntelliData(url = URL) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Authorization: INTELLI_AUTHORIZATION,
    },
    body: {},
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error(err));
}

exports.getPumps = async (req, res) => {
  console.log("hit");
  getIntelliData().then((d) => {
    res.status(200).send(d);
  });
};
