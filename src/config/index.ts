import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
    JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES as string,
    RESET_PASS_SECRET: process.env.RESET_PASS_SECRET as string,
    RESET_PASS_TOKEN_EXPIRES_IN: process.env.RESET_PASS_TOKEN_EXPIRES_IN as string,
    RESET_PASS_LINK: process.env.RESET_PASS_LINK as string,
    cloudinary: {
        api_secret: process.env.CLOUDINARY_API_SECRET,
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY
    },
    emailSender: {
        email: process.env.SMTP_USER,
        app_pass: process.env.SMTP_PASS
    },
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY as string,
    stripe: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY as string,
        CLIENT_URL: process.env.CLIENT_URL as string,
    },
    WEB_HOOK_SECRET: process.env.WEB_HOOK_SECRET as string,
}