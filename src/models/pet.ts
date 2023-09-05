type pet = {
    type: "dog" | "cat" | "fish";
    image: string;
    name: string;
    color: string;
    sex: "Macho" | "Fêmea";
};

const data: pet[] = [
    /*Array with the data*/
    {
        type: "dog",
        image: "pastor-alemao.jpg",
        name: "Pastor-Alemão",
        color: "Amarelo e Preto",
        sex: "Macho",
    },
];

export const pet = {
    getAll: (): pet[] => {
        return data;
    },
};

getFromType: (): pet[] => {
    return data.filter((item) => item.type === type);
};

getFromName: (name: string): pet[] => {
    return data.filter(
        (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    ); /*-1 === Not found anything */
};
