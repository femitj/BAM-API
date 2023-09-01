"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const http_1 = tslib_1.__importDefault(require("http"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const routes_1 = tslib_1.__importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false,
}));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    return res.send('Welcome to BAM API');
});
app.use(routes_1.default);
const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`App is listening to port: ${port}`));
//# sourceMappingURL=server.js.map