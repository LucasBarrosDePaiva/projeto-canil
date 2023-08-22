import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send("Home no controller!");
    //res.render('pages/page);
};

export const dogs = (req: Request, res: Response) => {
    res.send("Dogs no controller!");
    //res.render('pages/page);
};

export const cats = (req: Request, res: Response) => {
    res.send("Cats no controller!");
    //res.render('pages/page);
};

export const fishes = (req: Request, res: Response) => {
    res.send("Fishes no controller!");
    //res.render('pages/page);
};
