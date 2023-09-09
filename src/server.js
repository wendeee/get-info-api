const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});
