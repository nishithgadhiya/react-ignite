const fs = require("fs");
fs.writeFileSync("./.env", `API_KEY=${process.env.REACT_APP_RAWG_API}\n`);
