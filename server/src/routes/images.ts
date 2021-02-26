import {NextFunction, Request, Response, Router} from "express";
import {ImagesApi} from "../index";
import Image from "../models/image";
import {authorize} from "../middlewares/authorize";

const router = Router();

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    ImagesApi.getImagesForPage(req.params.id)
        .then((result: Array<Image>) => res.status(200).send(result))
        .catch(next);
});

router.post("/:id", authorize, (req: Request, res: Response, next:NextFunction) => {
    ImagesApi.addImagesToPage(req.body.image, req.params.id)
        .then((result: Array<Image>) => res.status(200).send(result))
        .catch(next);
});

export default router;
