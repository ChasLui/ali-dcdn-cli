#!/usr/bin/env node

const program = require("commander");
const Core = require("@alicloud/pop-core");
program
  .option("-i, --AccessKeyId <value>", "Aliyun AccessKeyId")
  .option("-k, --AccessKeySecret <value>", "Aliyun AccessKeySecret")
  .option("-r, --refresh <objectPath>", "refresh file or dir on DCDN Cache")
  .option("-p, --preload <objectPah>", "push file or dir into DCDN L2 Cache")
  .parse(process.argv);

const client = new Core({
  accessKeyId: program.AccessKeyId,
  accessKeySecret: program.AccessKeySecret,
  endpoint: "https://dcdn.aliyuncs.com",
  apiVersion: "2018-01-15",
});

const params = {
  RegionId: "cn-hangzhou",
};

const requestOption = {
  method: "POST",
};

const callback = function (result) {
  console.log(JSON.stringify(result));
};

const ex = function (ex) {
  console.log(ex);
};

program.refresh &&
  client
    .request(
      "RefreshDcdnObjectCaches",
      { ...params, ObjectPath: program.refresh },
      requestOption
    )
    .then(callback, ex);

program.preload &&
  client
    .request(
      "PreloadDcdnObjectCaches",
      { ...params, ObjectPath: program.preload },
      requestOption
    )
    .then(callback, ex);
