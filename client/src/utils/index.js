export const getItemTypeFromRoute = (route) => {
    const chunks = route.split("/");
    const initialChoice = chunks[2];
    return initialChoice;
};

export const getVerbFromItemType = (itemType) => {
    let verb = "";
    switch(itemType) {
        case "movies":
        case "tv-shows":
        case "videos":
            verb = "Watch";
            break;
        case "drinks":
            verb = "Drink";
            break;
        case "games":
            verb = "Play";
            break;
        case "music":
            verb = "Listen To";
            break;
        default:
            break;
    }

    return verb;
};