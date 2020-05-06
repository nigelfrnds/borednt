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
            verb = "watch";
            break;
        case "drinks":
            verb = "drink";
            break;
        case "games":
            verb = "play";
            break;
        default:
            break;
    }

    return verb;
};