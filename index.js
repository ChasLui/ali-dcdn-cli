#!/usr/bin/env node

var program = require('commander');

program
    .option('-i, --AccessKeyId <value>', 'Aliyun AccessKeyId')
    .option('-k, --AccessKeySecret <value>', 'Aliyun AccessKeySecret')
    .option('-d, --refreshDir <dir>', 'refresh dir on CDN Cache to be expired')
    .option('-f, --refreshFile <file>', 'refresh file on CDN Cache to be expired')
    .option('-p, --pushFile <file>', 'push file into CDN L2 Cache')
    .parse(process.argv);

var cdn = require('aliyun-cdn-refresh')({
    accessKeyId: program.AccessKeyId,
    secretAccessKey: program.AccessKeySecret,
    endpoint: 'https://cdn.aliyuncs.com',
    timeout: 5000,
});

function callback(err, result) {
    if (err) {
        throw err;
    }
    // console.log(result.res.statusCode);
    // console.log(result.res.headers);
    // console.log(result.data);
    if (result.res.statusCode !== 200) {
        console.log('error: ' + result.data.Message);
        process.exit(1);
    }
}

program.refreshDir && cdn.refreshDir(program.refreshDir, callback);
program.refreshFile && cdn.refreshFile(program.refreshFile, callback);
program.pushFile && cdn.pushFile(program.pushFile, callback);
