"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.firebaseAdmin = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var firebase_1 = __importDefault(require("firebase"));
var fireorm = __importStar(require("fireorm"));
var cors_1 = __importDefault(require("cors"));
var index_1 = require("./index");
exports.firebaseAdmin = firebase_admin_1["default"].initializeApp({
    credential: JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT, "base64").toString("ascii")),
    storageBucket: process.env.STORAGE_BUCKET
});
firebase_1["default"].initializeApp(JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG, "base64").toString("ascii")));
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
app.get("/pages", function (req, res, next) {
    index_1.PagesApi.getAllPages()
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