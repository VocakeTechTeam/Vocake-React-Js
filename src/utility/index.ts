export const ObjectMapping = (
    objectArray: { type: string; value: string }[],
    stringArray: string[],
) => {
    const arr = [];
    for (let i = 0; i < stringArray.length; i++) {
        const type = objectArray.find(
            (item) => item.value == stringArray[i],
        )?.type;
        if (type) {
            arr.push(type);
        }
        return type;
    }
};

export function getTypesFromValues(
    objectArray: { value: string; type: string }[],
    values: string[],
): string[] {
    const valueToTypeMap = objectArray.reduce(
        (map, choice) => {
            map[choice.value] = choice.type;
            return map;
        },
        {} as Record<string, string>,
    );

    return values
        .map((value) => valueToTypeMap[value] || null)
        .filter((type) => type !== null);
}

export const removeKeyValue = (obj: Record<string, any>, key: string) => {
    if (key in obj) {
        delete obj[key];
    }
    return obj;
};
