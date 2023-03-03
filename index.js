const { Plugin, segment, http } = require("keli");

const { version } = require("./package.json");
const plugin = new Plugin("dywoman", version);

// keyword是关键字，元素类型为字符串
// timeInterval是自动发送的间隔，单位为小时，默认为6小时发送一次，数组元素为数字
// enableGroup是启用自动发送的群，只有数组中有的群才会启用自动播报，数组元素为数字
const config = { keyword: "dy", timeInterval: [6], enableGroup: [] };

plugin.onMounted((bot, admins) => {
    plugin.saveConfig(Object.assign(config, plugin.loadConfig()));

    plugin.onMessage(async (event, bot) => {
        const { raw_message } = event;

        if (raw_message === config.keyword) {
            const msgs = await getData();
            event.reply(msgs);
        }
    });

    async function getData() {
        const { data } = await http.get(
            "https://zj.v.api.aa1.cn/api/video_dyv2"
        );
        let msgs = [segment.face(66), "获取数据失败"];
        if (data.msg == "获取成功") {
            msgs = ["简介：", data.dsc, "\n", data.url];
        }
        return msgs;
    }
    // 定时播报
    const task = plugin.cron(`0 */${config.timeInterval} * * *`, async () => {
        const enableGroup = config.enableGroup;
        const msgs = await getData();
        for (let index = 0; index < enableGroup.length; index++) {
            const element = enableGroup[index];
            bot.pickGroup(element).sendMsg(msgs);
        }
    });
});

module.exports = { plugin };
