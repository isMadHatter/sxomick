<template>
  <div>
    <div class="headerdiv">
      <div class="headerdiv1">
        <div class="logol">
          <a href="/">
            <img
              src="../assets/home/logo.png"
              width="474"
              height="96"
              alt="西安欧米奇西点西餐学院官网"
              class="lazy"
              style="display: inline;"
            />
          </a>
        </div>
      </div>
      <div class="hhh">
        点击
      </div>
      <div class="headerdiv2">
        <div class="head_dh container">
          <li>
            <a href="/" target="_blank">首页</a>
          </li>
          <li>
            <a href="/a/zhuanyeshezhi/" target="_blank">专业设置</a>
            <div style="width: 236px;left: -15px;">
              <a href="/a/zhuanyeshezhi/2019/" target="_blank" style="width:141px;">
                <span>烘焙甜点全能班</span>
              </a>
              <a href="/a/zhuanyeshezhi/2015/1124/8.html" target="_blank" style="width:141px;">
                <span>烘焙甜点金领班</span>
              </a>
              <a href="/a/zhuanyeshezhi/2016/0408/834.html" target="_blank" style="width:141px;">
                <span>烘焙甜点经典班</span>
              </a>
              <a href="/a/zhuanyeshezhi/2016/0408/836.html" target="_blank" style="width:141px;">
                <span>烘焙甜点定制班</span>
              </a>
              <a href="/a/zhuanyeshezhi/2016/0929/1768.html" target="_blank" style="width:141px;">
                <span>西餐料理金领班</span>
              </a>
              <a href="/a/zhuanyeshezhi/2016/0929/1767.html" target="_blank" style="width:141px;">
                <span>西餐料理精英班</span>
              </a>
              <a href="/a/zhuanyeshezhi/2015/1124/13.html" target="_blank" style="width:141px;">
                <span>咖啡饮品</span>
              </a>
              <a href="/a/zhuanyeshezhi/2015/1124/14.html" target="_blank" style="width:141px;">
                <span>精品调酒</span>
              </a>
            </div>
          </li>
          <li>
            <!-- <router-link to="/about">关于Omick</router-link> -->
            <a @click="handle()" target="_blank">关于Omick</a>
            <div>
              <a href="/a/guanyuOmick/" target="_blank">
                <span>学院简介</span>
              </a>
              <a href="/a/guanyuOmick/huolixiaoyuan/" target="_blank">
                <span>活力校园</span>
              </a>
            </div>
          </li>
          <li>
            <a href="/a/xyhj/" target="_blank">校园环境</a>
          </li>
          <li>
            <a href="/a/mingshifengcai/" target="_blank">名师风采</a>
          </li>
          <li>
            <a href="/a/xueshengzuopin/" target="_blank">教学作品</a>
            <div>
              <a href="/a/xueshengzuopin/" target="_blank">
                <span>西点作品</span>
              </a>
              <a href="/a/xueshengzuopin/?#xc" target="_blank">
                <span>西餐作品</span>
              </a>
              <a href="/a/xueshengzuopin/?#kf" target="_blank">
                <span>咖啡作品</span>
              </a>
              <a href="/a/xueshengzuopin/?#tj" target="_blank">
                <span>调酒作品</span>
              </a>
            </div>
          </li>
          <li>
            <a href="/a/jiuyechuangye/" target="_blank">就业创业</a>
            <div>
              <a href="/a/jiuyechuangye/jiuyebaozhang/" target="_blank">
                <span>就业保障</span>
              </a>
              <a href="/a/jiuyechuangye/chuangyebaozhang/" target="_blank">
                <span>创业保障</span>
              </a>
            </div>
          </li>
          <li>
            <a href="/a/xiaoyuanxinwen/xuexiaoxinwen/" target="_blank">校园新闻</a>
            <div>
              <a href="/a/xiaoyuanxinwen/xuexiaoxinwen/" target="_blank">
                <span>学校新闻</span>
              </a>
              <a href="/a/xiaoyuanxinwen/xingyexinwen/" target="_blank">
                <span>行业新闻</span>
              </a>
              <a href="/a/xiaoyuanxinwen/xueshengfengcai/" target="_blank">
                <span>学生风采</span>
              </a>
              <a href="/a/xiaoyuanxinwen/ruxuedayi/" target="_blank">
                <span>入学答疑</span>
              </a>
            </div>
          </li>
          <li>
            <a href="/zxcg" target="_blank">在线参观</a>
          </li>
          <li>
            <a href="/newpc/lxwm/" target="_blank">联系我们</a>
            <div>
              <a href="/newpc/lxwm/" target="_blank">
                <span>来校路线 </span>
              </a>
              <a href="/newpc/zxbm/" target="_blank">
                <span>在线报名</span>
              </a>
              <a href="/freephone.html" target="_blank">
                <span>免费电话</span>
              </a>
            </div>
          </li>
        </div>
      </div>
    </div>
    <!-- 路有占位符 -->
    <router-view></router-view>
    <div class="newfoot">
      <div class="container">
        <div class="h1 lazy" data-original="/newpc/image/ximage/tt.jpg"></div>
      </div>
      <div class="h2"></div>
      <div class="h3">
        <div class="container" style="background:blue;">
          <div class="o-zhuanye fl">
            <div class="o-title clearfix">
              <h3>专业设置</h3>
              <span></span>
            </div>
            <div class="o-zhuanye-left fl">
              <div class="o-list">
                <p class="o-listtitle">烘焙甜点专业</p>
                <ul>
                  <li>
                    <a href="/a/zhuanyeshezhi/2015/1124/8.html" target="_blank">烘焙甜点金领班</a>
                  </li>
                  <li>
                    <a href="/a/zhuanyeshezhi/2015/1124/12.html" target="_blank">烘焙甜点精英班</a>
                  </li>
                  <li>
                    <a href="/a/zhuanyeshezhi/2016/0408/834.html" target="_blank">烘焙甜点经典班</a>
                  </li>
                  <li>
                    <a href="/a/zhuanyeshezhi/2016/0408/836.html" target="_blank">烘焙甜点定制班</a>
                  </li>
                </ul>
              </div>
              <div class="o-list">
                <p class="o-listtitle">西餐料理专业</p>
                <ul>
                  <li>
                    <a href="/a/zhuanyeshezhi/2016/0929/1768.html" target="_blank">西餐料理金领班</a>
                  </li>
                  <li>
                    <a href="/a/zhuanyeshezhi/2016/0929/1767.html" target="_blank">西餐料理精英班</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="o-zhuanye-right fr">
              <div class="o-list">
                <p class="o-listtitle">咖啡饮品专业</p>
                <ul>
                  <li>
                    <a href="/a/zhuanyeshezhi/2015/1124/13.html" target="_blank">咖啡饮品课程</a>
                  </li>
                </ul>
              </div>
              <div class="o-list">
                <p class="o-listtitle">精品调酒专业</p>
                <ul>
                  <li>
                    <a href="/a/zhuanyeshezhi/2015/1124/14.html" target="_blank">精品调酒课程</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="o-about fl">
            <div class="o-title clearfix">
              <h3>关于OMICK</h3>
              <span></span>
            </div>
            <div class="o-list">
              <p class="o-listtitle">学院介绍</p>
              <ul>
                <li>
                  <a href="/a/guanyuOmick" target="_blank">学院简介</a>
                </li>
                <li>
                  <a href="/a/xyhj" target="_blank">学院环境</a>
                </li>
                <li>
                  <a href="/zxcg" target="_blank">在线参观</a>
                </li>
                <li>
                  <a href="/a/guanyuOmick/huolixiaoyuan" target="_blank">活力校园</a>
                </li>
              </ul>
            </div>
            <div class="o-list">
              <p class="o-listtitle">名师风采</p>
              <ul>
                <li>
                  <a href="/a/mingshifengcai/" target="_blank">名师介绍</a>
                </li>
                <li>
                  <a href="/a/xueshengzuopin/" target="_blank">师生作品</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="o-jiuye fl">
            <div class="o-title clearfix">
              <h3>资讯</h3>
              <span></span>
            </div>
            <div class="o-list">
              <p class="o-listtitle">新闻</p>
              <ul>
                <li>
                  <a href="/a/xiaoyuanxinwen/xuexiaoxinwen" target="_blank">学院新闻</a>
                </li>
                <li>
                  <a href="/a/xiaoyuanxinwen/xingyexinwen" target="_blank">行业新闻</a>
                </li>
                <li>
                  <a href="/a/xiaoyuanxinwen/xueshengfengcai" target="_blank">学生风采</a>
                </li>
                <li>
                  <a href="/a/xiaoyuanxinwen/ruxuedayi" target="_blank">入学答疑</a>
                </li>
              </ul>
            </div>
            <div class="o-list">
              <p class="o-listtitle">创就业保障</p>
              <ul>
                <li>
                  <a href="/a/jiuyechuangye/chuangyebaozhang" target="_blank">创业保障</a>
                </li>
                <li>
                  <a href="/a/jiuyechuangye/jiuyebaozhang" target="_blank">就业保障</a>
                </li>
              </ul>
            </div>
            <div style="position:relative;" class="o-list"></div>
          </div>
          <div class="o-jiuye fl">
            <div class="o-title clearfix">
              <h3>联系我们</h3>
              <span></span>
            </div>
            <div class="o-list">
              <p class="o-listtitle">等您来</p>
              <ul>
                <li>
                  <a href="/newpc/lxwm" target="_blank">来校路线</a>
                </li>
                <li>
                  <a href="/newpc/zxbm" target="_blank">在线报名</a>
                </li>
                <li>
                  <a href="/freephone.html" target="_blank">免费电话</a>
                </li>
              </ul>
            </div>
            <div style="position:relative;" class="o-list">
              <p class="o-listtitle">联系方式</p>
              <div class="o-list-icon clearfix">
                <div class="o-wechat fl">
                  <p class="slistwechat"></p>
                </div>
                <a
                  href="http://wpa.qq.com/msgrd?v=3&uin=3517919145&site=qq&menu=yes"
                  target="_blank"
                >
                  <div class="o-qq fl"></div>
                </a>
                <a
                  href="http://weibo.com/p/1006066282816856/home?from=page_100606&mod=TAB&is_all=1#place"
                  target="_blank"
                >
                  <div class="o-weibo fl"></div>
                </a>
                <a href="javascript:(0);">
                  <div class="o-wap fl">
                    <p class="slistwap"></p>
                  </div>
                </a>
              </div>
              <p class="o-list-tel">
                联系电话：
                <span>029-8101 7888</span>
              </p>
              <p class="o-list-add">
                地址：
                <span>西安市新城区含元路12号</span>
              </p>
            </div>
          </div>
          <div class="o-baoming fr">
            <div class="o-title clearfix">
              <h3>在线报名</h3>
              <span></span>
            </div>
            <div class="o-list">
              <p class="o-listtitle">预约报名</p>
            </div>
            <div class="o-form clearfix">
              <div class="clearfix scform">
                <input
                  style="margin-right:10px;"
                  type="text"
                  name="b_xm"
                  id="b_xm"
                  placeholder="姓名"
                  maxlength="20"
                  value
                />
                <input type="text" name="b_qq" id="b_qq" placeholder="QQ/微信" class="intxt" value />
                <input
                  style="margin-right:10px;"
                  type="text"
                  name="b_tel"
                  id="b_tel"
                  class="intxt"
                  placeholder="联系电话"
                  value
                />
                <select
                  name="b_zy"
                  style="display: block;width: 152px;height: 38px;float: left;background: #262626;border: 1px solid #3c3c3c;font-weight: 200;outline: none;color: #fff;padding-left: 6px;border-radius: 6px;-moz-border-radius: 6px;-webkit-border-radius: 6px;margin: 4px 0" id="b_zy"
                >
                  <option value="西点专业">西点专业</option>
                  <option value="西餐专业">西餐专业</option>
                  <option value="咖啡专业">咖啡专业</option>
                  <option value="调酒专业">调酒专业</option>
                </select>
              </div>
              <p onclick="bm_online()">提交</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sitemap">
        <div class="sitemap-box">
          <div style="background-position:0 -120px;" class>
            版权所有:西安欧米奇西点西餐培训有限责任公司
            <a href="http://www.beian.miit.gov.cn/">陕ICP备17013460号-1</a>
          </div>
          <div class="Copyright">
            Copyright©Omick All rights reserved.&nbsp;&nbsp;
            <a href="/newpc/lxwm/" target="_blank">联系我们</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  created(){
    $('.hhh').click({
      console.log()
    })
  },
  methods:{
    handle(){
      this.$router.push('/about')
    }
  }
};
</script>
<style scoped>
</style>