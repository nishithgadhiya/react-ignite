const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `REACT_APP_RAWG_API=${process.env.REACT_APP_RAWG_API}\n`
);
