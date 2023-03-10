import crypto from 'crypto';
const salt = 'bb5jf08fa5d0';
const adminHash = crypto.pbkdf2Sync('readdocumentation', salt, 1000, 64, `sha512`).toString(`hex`);
const nouns = [
    "Adventure",
    "Butterfly",
    "Cucumber",
    "Friendship",
    "Honeymoon",
    "Jellyfish",
    "Lighthouse",
    "Motorcycle",
    "Newspaper",
    "Opportunity",
    "Paperback",
    "Quarantine",
    "Restaurant",
    "Skateboard",
    "Technology",
    "University",
    "Volleyball",
    "Watermelon",
    "Xylophone"
  ];

let hashes = nouns.map((noun,i) => {
    console.log(
        i,
        crypto.pbkdf2Sync(noun, salt, 1000, 64, `sha512`).toString(`hex`)
    );
    
}); 
