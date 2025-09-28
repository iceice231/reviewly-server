import * as bcrypt from 'bcrypt-ts'
/** Утилита для работы с хешированием */

/** Хеширование пароля. */
export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

/** Сравнение пароля с хешем. */
export async function comparePasswords(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
}
