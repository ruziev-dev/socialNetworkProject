

export const required = value => {
    if (value) return undefined;

    return "Обязательное поле";
}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Длина сообщения более ${maxLenght} символов`;
    return undefined;
}

