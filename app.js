const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 4000;
const URL =
  "https://propetro-qa.intelie.com/services/plugin-propetro-intern-virtual/propetro/integrations/intern/virtual/active-pump-values-by-pump/";

const proxyurl = "https://cors.bridged.cc/";

async function getIntelliData(url = URL) {
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Authorization:
        "Basic aW50ZXJudmlydHVhbC1xYUBpbnRlbGllLmNvbS5icjo0YjJ3I3B6c0w0UDk=",
    },
    body: {},
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}

app.get("/", (req, res) => {
  getIntelliData();
  res.send("data");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
