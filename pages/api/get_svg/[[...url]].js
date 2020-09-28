// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export default async (req, res) => {
  const {
    query: { url },
  } = req;

  let fileName = `mock/${url.join("/")}`;
  await sleep(1000);
  if (fs.existsSync(`${fileName}/index.svg`)) {
    fileName += "/index.svg";
  } else {
    fileName += ".svg";
  }
  if (fs.existsSync(fileName)) {
    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
    });
    fs.createReadStream(fileName).pipe(res);
  } else {
    res.statusCode = 404;
    res.json({ error: "No se encuentra el SVG solicitado" });
  }
};
