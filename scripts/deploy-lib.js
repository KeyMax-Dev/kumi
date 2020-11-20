const childProcess = require('child_process');
const paths = require('../config/paths');
const ghPages = require('gh-pages');

function build() {
    return new Promise((resolve, reject) => {
        const buildProcess = childProcess.fork('./scripts/build-lib.js', { silent: true });

        buildProcess.on('exit', code => {
            if (code === 0) {
                return resolve(code);
            }

            return reject(new Error('Build failed with code ' + code));
        });
    });
}

function deploy() {
    return new Promise((resolve, reject) => {
        ghPages.publish(paths.libBuild, { branch: 'build' }, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

build()
    .then(deploy)
    .then(() => console.log('Successful deployed!'))
    .catch(err => console.error(err));
