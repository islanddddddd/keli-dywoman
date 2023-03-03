# dywoman for Keli

[![npm-version](https://img.shields.io/npm/v/keli-dywoman?color=527dec&label=keli-dywoman&style=flat-square)](https://npm.im/keli-dywoman)
[![dm](https://shields.io/npm/dm/keli-dywoman?style=flat-square)](https://npm.im/keli-dywoman)

`Keli` 的 666 插件，它没什么用，但是会跟着你发 6

**安装**

```
/plugin add dywoman
```

**启用**

```
/plugin on dywoman
```

**使用**

```
发送dy
```

**配置**

```
data/plugins/dywoman/config.json

默认配置为

{ keyword: "dy", timeInterval: [6], enableGroup: [] }
```

1. keyword 是关键字，元素类型为字符串

2. timeInterval 是自动发送的间隔，单位为小时，默认为 6 小时发送一次，数组元素为数字

3. enableGroup 是启用自动发送的群，只有数组中有的群才会启用自动播报，数组元素为数字

**TODO**

1. 把发送链接改为发送视频
