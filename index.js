const args = process.argv.slice(2);
const isGit = require('./is-git');

if(args.length === 0){
    console.error('Please pass in at least one directory path to check for git repositories');
    process.exit();
}

console.log(args.map(isGit).join('\n'));