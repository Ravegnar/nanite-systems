export const setElement = (
    element: any,
    types: string,
    values: string,
    timeout: number = 0
) => {
    let typesData: string[] = types.split(",");
    let valuesData: string[] = values.split(",");

    if (element.current) {
        element = element.current;
    }

    setTimeout(() => {
        typesData.map((type: string, index) => {
            if (type.includes("opacity")) {
                element.classList.replace(valuesData[0], valuesData[1]);
            } else {
                element.style[type] = valuesData[index];
            }
        });
    }, timeout);
};

