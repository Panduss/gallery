import {Router} from "express";
import auth from "./auth";
import pages from "./pages";

const routes = Router();

routes.use("/login", auth);
routes.use("/pages", pages);

export default routes;
