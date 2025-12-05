// scripts/add-shebang.js
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../dist/src/mcp-server.js");
const shebang = "#!/usr/bin/env node\n";
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, "utf8");
  if (!content.startsWith(shebang)) {
    fs.writeFileSync(file, shebang + content, "utf8");
    fs.chmodSync(file, 0o755);
  }
}
