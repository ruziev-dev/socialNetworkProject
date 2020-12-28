export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined;
    return "Обязательное поле";
}

export const maxLenghtCreator = (maxLenght: number): FieldValidatorType => (value) => {
    if (value.length > maxLenght) return `Длина сообщения более ${maxLenght} символов`;
    return undefined;
}

