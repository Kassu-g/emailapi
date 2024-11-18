"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
app.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});
app.use(express_1.default.json());
app.post('/sum', (req, res) => {
    const { numbers } = req.body;
    const sum = numbers.reduce((summa, luku) => summa + luku, 0);
    res.json({ sum });
});
let users = [];
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    users.push({ name, email });
    res.json({ message: 'User successfully added' });
});
app.listen(port, () => {
    console.log(`kukkuu täällä http://localhost:${port}`);
});
