import crypto from 'crypto';
const salt = 'bb5jf08fa5d0';
const hash = crypto.pbkdf2Sync('readdocumentation', salt, 1000, 64, `sha512`).toString(`hex`);
console.log(hash);