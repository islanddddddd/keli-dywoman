const { Plugin, segment, http } = require("keli");

const { version } = require("./package.json");
const plugin = new Plugin("dywoman", version);

const config = {};

plugin.onMounted((bot, admins) => {
    plugin.saveConfig(Object.assign(config, plugin.loadConfig()));

    plugin.onMessage(async (event, bot) => {
        const { raw_message } = event;

        if (raw_message === "dywoman") {
            const { data } = await http.get(
                "https://zj.v.api.aa1.cn/api/video_dyv2"
            );
            let msgs = [segment.face(66), "world"];

            if (data.msg == "获取成功") {
                msgs = ["简介：", data.dsc, "/r", data.url];
            }

            event.reply(msgs);
        }
    });
});

module.exports = { plugin };
