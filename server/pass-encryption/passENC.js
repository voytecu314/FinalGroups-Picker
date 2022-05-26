import crypto from 'crypto';

const salt = 'bb5jf08fa5d0';

const hash = crypto.pbkdf2Sync('HI', salt, 1000, 64, `sha512`).toString(`hex`);

const passes = ["conversation", "introduction","demonstrator","relationship","headquarters","constituency","intelligence","professional","presidential","refrigerator","jurisdiction","circumstance","architecture","acquaintance","civilization"];

const hashes = passes.map(pass=>crypto.pbkdf2Sync(pass, salt, 1000, 64, `sha512`).toString(`hex`));

console.log(JSON.stringify(hashes));