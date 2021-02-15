import {NextFunction, Request, Response, Router} from "express";
import {PagesApi} from "../index";
import {Page} from "../models/page";
import {authorize} from "../middlewares/authorize";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    PagesApi.getAllPages()
        .then((result: Array<Page>) => res.status(200).send(result))
        .catch(next);
});

router.put("/", authorize, (req: Request, res: Response, next:NextFunction) => {
    PagesApi.addPage(req.body.type, req.body.title, req.body.subtitle, req.body.images)
        .then((result: Page) => res.status(200).send(result))
        .catch(next);
})

router.post("/:id", authorize, (req: Request, res: Response, next:NextFunction) => {
    PagesApi.editPage(req.body.id, req.body.type, req.body.title, req.body.subtitle, req.body.images)
        .then((result: Page) => res.status(200).send(result))
        .catch(next);
})

router.post("/:id", authorize, (req: Request, res: Response, next:NextFunction) => {
    PagesApi.deletePage(req.body.id)
        .then((result: boolean) => res.status(200).send(result))
        .catch(next);
})

export default router;

