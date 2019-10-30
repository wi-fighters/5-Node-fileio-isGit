const path = require('path');
const dirExists = require('directory-exists');

module.exports = (relativePath) => {
    const absolutePath = path.resolve(relativePath);

    if(!dirExists.sync(absolutePath)) {
        console.error(`Sorry, but I couldn't find a directory at ${absolutePath}`);
        process.exit();
    }

    const gitPath = path.join(absolutePath, '.git');

    return dirExists.sync(gitPath) ? `${absolutePath} is a git repository` : `${absolutePath} is **not** a git repository`;
}