---
title: 在线规则书说明书
icon: markdown
order: 1
tag:
  - Markdown
---
**魔法崩坏在线规则书**是发布于 Github Pages 的在线静态网站。该部分为使用该规则书的过程中可能遇到的问题
### 我的电脑/手机无法访问网站
Github 属于境外网站，在中国大陆的某些地区/某些运营商范围内会由于 DNS 污染无法访问。下面是一些你可以尝试的方法
1. 使用梯子，简单粗暴，作者不提供任何指导，因为作者不用
2. 修改 Hosts 文件，Hosts 文件是电脑存储网站和 IP 对应关系的文件，通过这种方法可以使电脑强制访问指定的 IP 从而抵抗 DNS 污染。具体的方法可以参考 [Github Hosts 项目](https://ineo6.github.io/hosts/)
3. 使用 Netlify 镜像站，该规则在 Netlify 平台上设置了自动同步，通过访问 [Netlify 镜像站](https://magiahonkai.netlify.app/) 你可以获得近似的使用体验
4. 使用Watt Toolkit进行加速，自行百度软件官网
5. 加入 [官方 QQ 群](https://jq.qq.com/?_wv=1027&k=LsRdMXNg) 直接拷问群主，前提是你已经尝试过了以上方法
   
### 怎么看到一半后面就没了
非常抱歉的是，二版规则目前更新进度缓慢（由于作者在同时维护 MutsukiBot、该游戏的同时还要兼顾学业和找工作压力）。

如果你想要立即进行一场魔法少女战斗，请点击最上方导航栏-项目信息-一版规则，跳转至一版规则的规则书界面。一版规则是该规则的前身，与 COC 和魔圆世界观更加接近，完善程度已经足够进行游戏

### 规则中出现了<Badge text="魔圆" color="#f26d6d" />标记
该标记表示这一部分规则是魔圆世界观的兼容规则，如果你是为了还原魔圆的体验而来，这部分便是你要找的东西。这部分兼容规则通常是基本规则的补充和内容扩展。而类似的，你也会看到类似于<Badge text="魔纪" color="#f26d6d" />的其他标记，这代表着这是用于兼容其他 ACGN 世界观的规则。

包含标记的部分版权归属于 ACGN 作品的原作者/版权方而非规则。

### 魔法崩坏世界观与魔法少女小圆世界观的联系
由于魔法崩坏是由魔圆的同人世界观发展而来，其中很多概念在魔圆中均有对应。但在不断迭代的过程中，这些概念已经和原本的含义产生了不小的区别。为了能够将魔法崩坏制作成独立的 IP（而非同人），同时为了规避未来可能的版权风险，我决定将其彻底从魔圆中分离出来，同时单独制作魔圆兼容规则，来适应原本的魔圆世界观。

而为了保证这种分离不会产生 BUG 以及额外的工作量，我使用了一个背景世界线来维持原本的设计，这个世界线是玩家无法接触的，是魔法崩坏之前的世界，但是部分设定会涉及到该世界线的事件。

|                    | 魔法崩坏                     | 背景世界线                               | 魔圆             |
| ------------------ | ---------------------------- | ---------------------------------------- | ---------------- |
| 魔法少女的结局     | 经历多次崩坏后失去灵魂       | 经历一次崩坏后失去灵魂（类似于变成魔女） | 变成魔女         |
| 孵化者的存在       | 不存在/作为怪异存在          | 不存在/作为怪异存在                      | 外星生命         |
| 怪异的存在         | 魔法少女的敌人之一           | 魔法少女的敌人之一                       | 不存在           |
| 称为魔法少女的方式 | 强烈的愿望引起世界树的认可   | 强烈的愿望引起世界树的认可               | 与孵化者签订契约 |

### 我有一些想法/我写了一个模组，想要并入规则中

1. 首先默认你已经拥有了一个github账号，如果你无法正常访问github的话，请参考本页第一部分
2. 进入文档的github页面，点击右上角的fork，这会在你的账号下创建文档的副本
3. 在你的副本中编辑需要修改的文件，它是main分支的docs文件夹下的markdown文件，在线编辑或是下载后再commit均可，请自行查找教程或咨询作者
4. 在文档的github页面，选择pull request然后新建，分别选中main分支和你的副本的main分支，确认更改是否有问题，然后提交即可

当然主规则书也可以修改，不过你需要足够的说明来让作者相信你的方案要更加有趣或平衡。如果你对于上面的流程一头雾水，也可以直接将你的想法通过QQ发送给作者