'use strict';
/**
 * config
 */
export default {
  //key: value
  port: 8128, //服务监听的端口
	host: "", //服务监听的 host
	encoding: "utf-8", //项目编码
	pathname_prefix: "",  //pathname 去除的前缀，路由解析中使用
	pathname_suffix: ".html", //pathname 去除的后缀，路由解析中使用
	proxy_on: false, //是否使用 nginx 等 web server 进行代理
	hook_on: true,  //是否开启 hook
	cluster_on: false, //是否开启 cluster
	service_on: true, //Service available
	timeout: 120, //120 seconds
  route_on: true, //是否开启自定义路由
  default_module: "deng", //默认模块
	default_controller: "index",  //默认的控制器
	default_action: "index", //默认的 Action
};