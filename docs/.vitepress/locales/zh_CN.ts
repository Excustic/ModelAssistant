import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    description: 'Seeed Studio EdgeLab 是一个专注于嵌入式人工智能的开源项目。',

    themeConfig: {
        nav: nav(),
        sidebar: { '/zh_cn': sidebar() },

        darkModeSwitchLabel: '外观切换',
        outlineTitle: '页面大纲',
        lastUpdatedText: '最后更新于',
        returnToTopLabel: '返回顶部',

        editLink: {
            pattern: 'https://github.com/Seeed-Studio/Edgelab/edit/main/docs/zh_cn/:path',
            text: '对此页面提出建议'
        },

        footer: {
            message: '在 MIT License 授权下发布',
            copyright: '版权所有 © 2023-目前 Seeed Studio & EdgeLab 贡献者'
        }
    }
})

function nav() {
    return [
        { text: '主页', link: '/zh_cn/' },
        { text: '文档', link: '/zh_cn/introduction/what_is_edgelab' }
    ]
}

function sidebar() {
    return [
        {
            text: '入门指南',
            collapsed: false,
            items: [
                { text: '什么是 EdgeLab?', link: '/zh_cn/introduction/what_is_edgelab' },
                { text: '快速上手', link: '/zh_cn/introduction/quick_start' },
                { text: '安装指南', link: '/zh_cn/introduction/installation' }
            ]
        },
        {
            text: '开发示例',
            collapsed: false,
            items: [
                { text: '模型配置', link: '/zh_cn/tutorials/config' },
                {
                    text: '数据集',
                    link: '/zh_cn/tutorials/datasets/index',
                    items: [
                        { text: '自定义数据集', link: '/zh_cn/tutorials/datasets/custom' }
                    ]
                },
                {
                    text: '模型训练',
                    link: '/zh_cn/tutorials/training/index',
                    items: [
                        { text: 'FOMO 模型', link: '/zh_cn/tutorials/training/fomo' },
                        { text: 'PFLD 模型', link: '/zh_cn/tutorials/training/pfld' }
                    ]
                },
                {
                    text: '模型导出',
                    link: '/zh_cn/tutorials/export/index',
                    items: [
                        { text: 'PyTorch 转 ONNX', link: '/zh_cn/tutorials/export/pytorch_2_onnx' },
                        { text: 'PyTorch 转 TFLite', link: '/zh_cn/tutorials/export/pytorch_2_tflite' }
                    ]
                }
            ]
        },
        {
            text: '部署示例',
            collapsed: false,
            items: [
                {
                    text: 'ESP32 - 部署教程',
                    link: '/zh_cn/examples/esp32/deploy',
                    items: [
                        { text: 'ESP32 口罩检测', link: '/zh_cn/examples/esp32/mask_detection' },
                        { text: 'ESP32 表计读数', link: '/zh_cn/examples/esp32/meter_reader' }
                    ]
                },
                {
                    text: 'Grove - 部署教程',
                    link: '/zh_cn/examples/grove/deploy',
                    items: [
                        { text: 'Grove 口罩检测', link: '/zh_cn/examples/grove/mask_detection' },
                        { text: 'Grove 表计读数', link: '/zh_cn/examples/grove/meter_reader' }
                    ]
                }
            ]
        }, {
            text: '社区建设',
            collapsed: false,
            items: [
                { text: 'FAQs', link: '/zh_cn/community/faqs' },
                { text: '参考文档', link: '/zh_cn/community/reference' },
                { text: '贡献指南', link: '/zh_cn/community/contributing' },
                { text: '开源许可', link: '/zh_cn/community/licenses' }
            ]
        }
    ]
}