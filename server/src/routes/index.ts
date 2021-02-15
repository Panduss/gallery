import {Router} from "express";
import auth from "./auth";
import pages from "./pages";

const routes = Router();

routes.use("/auth", auth);
routes.use("/pages", pages);

export default routes;
