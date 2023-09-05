import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
    let list = pet.getAll();
    //res.send("Home no controller!"); If we let this here, it will display "Home no controller!"
    res.render("pages/page", {
        banner: {
            title: "All Animals",
            background: "allanimals.jpg",
            menu: createMenuObject("all"),
            list,
        },
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = pet.getFromType("dog");
    //res.send("Dogs controller!");
    res.render("pages/page", {
        banner: {
            title: "Dogs",
            background: "banner_dog.jpg",
            menu: createMenuObject("dog"),
            list,
        },
    });
};

export const cats = (req: Request, res: Response) => {
    let list = pet.getFromType("cat");
    //res.send("Cats no controller!");
    res.render("pages/page", {
        banner: {
            title: "Cats",
            background: "banner_cat.jpg",
            menu: createMenuObject("cat"),
            list,
        },
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = pet.getFromType("fish");
    //res.send("Fishes no controller!");
    res.render("pages/page", {
        banner: {
            title: "Fishes",
            background: "banner_fish.jpg",
            menu: createMenuObject("fish"),
            list,
        },
    });
};
