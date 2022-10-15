import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
]

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
    body('fullName', 'Укажите Имя').isLength({ min: 3 }),
]

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3}).isString(),
    body('description', 'Введите описание статьи').isLength({ min: 3}).isString(),
    body('imageUrl', 'Неверная ссылка на изображение').isString(),
    body('content', 'Статья не может быть пустой..').isLength({ min: 10 }).isString(),
]