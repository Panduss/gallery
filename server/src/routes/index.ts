import {Router} from "express";
import auth from "./auth";
import pages from "./pages";
import images from "./images";

const routes = Router();

routes.use("/login", auth);
routes.use("/pages", pages);
routes.use("/images", images);

export default routes;
