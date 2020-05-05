export const getItemTypeFromRoute = (route) => {
    const chunks = route.split("/");
    const initialChoice = chunks[2];
    return initialChoice;
};