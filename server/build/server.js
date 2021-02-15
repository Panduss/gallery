"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var firebase_1 = __importDefault(require("firebase"));
var fireorm = __importStar(require("fireorm"));
var cors_1 = __importDefault(require("cors"));
var index_1 = require("./index");
var authorize_1 = require("./middlewares/authorize");
exports.fbAdmin = firebase_admin_1["default"].initializeApp({
    credential: firebase_admin_1["default"].credential.cert(JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT, "base64").toString("ascii"))),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});
exports.fb = firebase_1["default"].initializeApp(JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG, "base64").toString("ascii")));
fireorm.initialize(firebase_admin_1["default"].firestore());
var app = express_1["default"]();
var PORT = process.env.PORT || 5000;
var whitelist = [
    "http://localhost:4000"
];
var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.filter(function (url) { return origin.includes(url); }).length) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
};
app.use(morgan_1["default"](morgan_1["default"].compile("[:date[web]] :method :url :status (millis :response-time) :remote-addr :referrer")));
app.use(cors_1["default"](corsOptions));
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.post("/login", function (req, res, next) {
    index_1.AuthApi.login(req.body.email, req.body.password)
        .then(function (result) { return res.status(200).send(result); })["catch"](next);
});
app.get("/pages", function (req, res, next) {
    index_1.PagesApi.getAllPages()
        .then(function (result) { return res.status(200).send(result); })["catch"](next);
});
app.put("/pages", authorize_1.authorize, function (req, res, next) {
    index_1.PagesApi.addPage(req.body.type, req.body.title, req.body.subtitle, req.body.images)
        .then(function (result) { return res.status(200).send(result); })["catch"](next);
});
app.post("/pages/:id", authorize_1.authorize, function (req, res, next) {
    index_1.PagesApi.editPage(req.body.id, req.body.type, req.body.title, req.body.subtitle, req.body.images)
        .then(function (result) { return res.status(200).send(result); })["catch"](next);
});
app.post("/pages/:id", authorize_1.authorize, function (req, res, next) {
    index_1.PagesApi.deletePage(req.body.id)
        .then(function (result) { return res.status(200).send(result); })["catch"](next);
});
app.use(function (error, req, res) {
    console.log("Error => ", error);
    return res.json(error).send();
});
app.listen(PORT, function () {
    console.log("Server started at http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map