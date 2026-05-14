import dotenv from 'dotenv';

dotenv.config();

const env = {
    name: process.env.NAME,
    execDir: process.env.EXEC_DIR,
    icondir: process.env.ICON_DIR,
    description: process.env.DESCRIPTION
};

export default env;