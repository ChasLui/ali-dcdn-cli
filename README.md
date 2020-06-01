# ali-dcdn-cli

A cli to simplify Refresh and push interface for aliyun dcdn api

```sh
npm install -g ali-dcdn-cli
```

```sh
  Usage: ali-dcdn-cli [options]

  Options:
    -i, --AccessKeyId <value>      Aliyun AccessKeyId
    -k, --AccessKeySecret <value>  Aliyun AccessKeySecret
    -r, --refresh <objectPath>     refresh file or dir on DCDN Cache
    -p, --preload <objectPah>      push file or dir into DCDN L2 Cache
    -h, --help                     output usage information
```

## [刷新缓存](https://help.aliyun.com/document_detail/130620.html?spm=a2c4g.11186623.6.701.3ba24b8edykZsF) refresh dir or file on DCDN Cache to be expired

```sh
ali-dcdn-cli -i xxx -k xxx -r http://yourcdndomain/img/
ali-dcdn-cli -i xxx -k xxx -r http://yourcdndomain/img/1.png
```

## [预热](https://help.aliyun.com/document_detail/130636.html?spm=a2c4g.11186623.6.699.51601595SFFAbp) push file into CDN L2 cache

```sh
ali-dcdn-cli -i xxx -k xxx -r http://yourcdndomain/img/1.png
```

[如何判断 CDN 的预热任务是否执行完成](https://dcdn.console.aliyun.com/refresh/record)
