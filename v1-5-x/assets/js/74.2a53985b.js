(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{424:function(e,t,s){"use strict";s.r(t);var o=s(15),a=Object(o.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"known-zowe-application-framework-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-zowe-application-framework-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Known Zowe Application Framework issues")]),e._v(" "),s("p",[e._v("The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior installing and using Zowe™ Application Framework.")]),e._v(" "),s("p",[e._v("Most of the solutions below identify issues by referring to the Zowe "),s("router-link",{attrs:{to:"/troubleshoot/app-framework/app-mustgather.html"}},[e._v("logs")]),e._v(". To identify and resolve issues, you should become familiar with their names and locations.")],1),e._v(" "),s("h2",{attrs:{id:"cannot-log-in-to-the-zowe-desktop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cannot-log-in-to-the-zowe-desktop","aria-hidden":"true"}},[e._v("#")]),e._v(" Cannot log in to the Zowe Desktop")]),e._v(" "),s("p",[s("strong",[e._v("Symptom:")])]),e._v(" "),s("p",[e._v("When you attempt to log in to the Zowe Desktop, you receive the following error message, displayed beneath the "),s("strong",[e._v("Username")]),e._v(" and "),s("strong",[e._v("Password")]),e._v(" fields.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Authentication failed for 1 types:  Types: ["zss"]\n')])])]),s("p",[s("strong",[e._v("Solution:")])]),e._v(" "),s("p",[e._v("For the Zowe Desktop to work, the node server that runs under the ZOWESVR started task must be able to make cross memory calls to the ZWESIS01 load module running under the ZWESIS01 started task. If this communication fails, you see the authentication error.")]),e._v(" "),s("p",[e._v("To solve the problem, follow these steps:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Open the log file "),s("code",[e._v("/zlux-app-server/log/zssServer-yyyy-mm-dd-hh-ss.log")]),e._v(".  This file is created each time ZOWESVR is started and only the last five files are kept.")])]),e._v(" "),s("li",[s("p",[e._v("Look for the message that starts with "),s("code",[e._v("ZIS status")]),e._v(".")]),e._v(" "),s("p",[e._v("If communication is working the message includes "),s("code",[e._v("Ok")]),e._v(". For example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ZIS status - Ok (name='ZWESIS_STD      ', cmsRC=0, description='Ok'\n")])])]),s("p",[e._v("If communication is not working the message includes "),s("code",[e._v("Failure")]),e._v(". For example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ZIS status - Failure (name='ZWESIS_STD      ', cmsRC=39, description='Cross-memory call ABENDed'\n")])])]),s("p",[e._v("If communication is not working, check that the ZWESIS01 started task is running. If not, start it. Also, search the log for problems, for example statements saying that the server was unable to find the load module.")]),e._v(" "),s("p",[e._v("If the problem is not easily-fixable (such as the ZWESIS01 task not running), then it is likely that the cross memory server setup and configuration did not complete successfully. To set up and configure the cross memory server, follow steps as described in the topic "),s("router-link",{attrs:{to:"/user-guide/install-zos.html#manually-installing-the-zowe-cross-memory-server"}},[e._v("Manually installing the Zowe Cross Memory Server")]),e._v(".")],1),e._v(" "),s("p",[e._v("If there is an authorization problem, the message might include "),s("code",[e._v("Permission Denied")]),e._v(". For example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ZIS status - Failure (name='ZWESIS_STD      ', cmsRC=33, description='Permission denied'\n")])])]),s("p",[e._v('Check that the user ID of the ZOWESVR started task is authorized to access the load module. Only authorized code can call ZWESIS01 because it is an APF-authorized load module. The setup for each security manager is different and is documented in the section "Security requirements for the cross memory server" in the topic  '),s("router-link",{attrs:{to:"/user-guide/install-zos.html#manually-installing-the-zowe-cross-memory-server"}},[e._v("Manually installing the Zowe Cross Memory Server")]),e._v(".")],1),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(" If you are using RACF security manager, a common reason for seeing "),s("code",[e._v("Permission Denied")]),e._v(" is that the user running the started task ZOWESVR (typically IZUSVR) does not have READ access to the FACILITY class ZWES.IS.")]),e._v(" "),s("p",[e._v("If the message includes the following text, the configuration of the Application Framework server may be incomplete:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ZIS status - Failure read failed ret code 1121 reason 0x76650446\n")])])]),s("p",[e._v("If you are using AT/TLS, then the "),s("code",[e._v('"attls" : true')]),e._v(" statement might be missing from the "),s("code",[e._v("zluxserver.json")]),e._v(" file. For more information, see "),s("router-link",{attrs:{to:"/user-guide/mvd-configuration.html#configuring-zss-for-https"}},[e._v("Configuring Zowe App Server for HTTPS communication with ZSS")])],1)])]),e._v(" "),s("h2",{attrs:{id:"server-startup-problem-ret-1115"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-startup-problem-ret-1115","aria-hidden":"true"}},[e._v("#")]),e._v(" Server startup problem ret=1115")]),e._v(" "),s("p",[s("strong",[e._v("Symptom:")]),e._v("\nWhen ZOWESVR is restarted, the following message is returned in the output of the ZSS server log file, "),s("code",[e._v("/zlux-app-server/log/zssServer-yyyy-mm-dd-hh-ss.log")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server startup problem ret=1115\n")])])]),s("p",[s("strong",[e._v("Solution:")]),e._v("\nThis message means that some other process is already listening on port 7542, either at address 127.0.0.1 (localhost) or at 0.0.0.0 (all addresses). This prevents the ZSS server from starting.")]),e._v(" "),s("p",[e._v("One possibility is that a previously running ZSS server did not shut down correctly, and either the operating system has not released the socket after the ZSS server shut down, or the ZSS server is still running.")]),e._v(" "),s("h2",{attrs:{id:"application-plug-in-not-in-zowe-desktop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-plug-in-not-in-zowe-desktop","aria-hidden":"true"}},[e._v("#")]),e._v(" Application plug-in not in Zowe Desktop")]),e._v(" "),s("p",[s("strong",[e._v("Symptom:")]),s("br"),e._v("\nAn application plug-in is not appearing in the Zowe Desktop.")]),e._v(" "),s("p",[s("strong",[e._v("Troubleshooting:")]),s("br"),e._v("\nTo check if the plug-in loaded successfully, enter the following URL in a browser to display all successfully loaded Zowe plug-ins:")]),e._v(" "),s("p",[s("code",[e._v("https://my.mainframe.com:8544/plugins?type=application")])]),e._v(" "),s("p",[e._v("You can also search the "),s("router-link",{attrs:{to:"/troubleshoot/app-framework/app-mustgather.html"}},[e._v("node server logs")]),e._v(" for the plug-in identifier, for example "),s("code",[e._v("org.zowe.sample.app")]),e._v(". If the plug-in loaded successfully, you will find the following message:")],1),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[2019-08-06 13:54:21.341 _zsf.bootstrap INFO] - Plugin org.zowe.sampleapp at path=zlux\\org.zowe.sampleapp loaded.\n")])])]),s("p",[e._v("If the plug-in did not load successfully, you will find the following message:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[2019-08-06 13:54:21.208 _zsf.bootstrap WARNING] - Error: org.zowe.sampleapp \n")])])]),s("p",[e._v("If the identifier is not in the logs, make sure the plug-in's locator file is in the "),s("code",[e._v("/zlux-app-server/deploy/instance/ZLUX/plugins/")]),e._v(" directory. The plug-in locator is a "),s("code",[e._v(".json")]),e._v(" file, usually with same name as the identifier, for example "),s("code",[e._v("org.zowe.sampleapp.json")]),e._v(". Open the file and make sure that the path defined with the "),s("code",[e._v("pluginLocation")]),e._v(" attribute is correct. If the path is relative, make sure it is relative to the "),s("code",[e._v("zlux-app-server/bin")]),e._v(" directory.")]),e._v(" "),s("p",[e._v("For more information on loading plug-ins to the Desktop, see "),s("router-link",{attrs:{to:"/extend/extend-desktop/zlux-workshop-user-browser.html#adding-your-app-to-the-desktop"}},[e._v("Adding Your App to the Desktop")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"error-you-must-specify-mvd-desktop-dir-in-your-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-you-must-specify-mvd-desktop-dir-in-your-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" Error: You must specify MVD_DESKTOP_DIR in your environment")]),e._v(" "),s("p",[s("strong",[e._v("Symptom:")])]),e._v(" "),s("p",[e._v("A plug-in build in your local environment using "),s("code",[e._v("npm run start")]),e._v(" or "),s("code",[e._v("npm run build")]),e._v(" failed with an error message about a missing MVD_DESKTOP_DIR environment variable.")]),e._v(" "),s("p",[s("strong",[e._v("Solution:")]),s("br"),e._v("\nAdd the Zowe Desktop directory path to the MVD_DESKTOP_DIR environment variable. To specify the path, run the following commands in your Windows console or Linux bash shell:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Windows")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("export MVD_DESKTOP_DIR=<zlux-root-dir>/zlux-app-manager/virtual-desktop\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Mac Os/Linux")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set MVD_DESKTOP_DIR=<zlux-root-dir>/zlux-app-manager/virtual-desktop\n")])])])])])])},[],!1,null,null,null);t.default=a.exports}}]);