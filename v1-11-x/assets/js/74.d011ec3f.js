(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{385:function(e,t,i){"use strict";i.r(t);var a=i(3),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"extending-zowe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extending-zowe"}},[e._v("#")]),e._v(" Extending Zowe")]),e._v(" "),i("p",[e._v("Zowe was designed to be an extensible tools platform. You can extend it in several ways to meet your needs or distribute the plug-ins to users who have already installed Zowe and want to introduce new functionality to it.")]),e._v(" "),i("p",[e._v("One of the goals of Zowe is to give users a consistent user experience, common functionality, and interoperability when using Zowe that includes the base set of Zowe core functions and plug-ins that are built outside the Zowe community. The Zowe Conformance Program provides a set of criteria to help with this. When followed, it also gives plug-in providers confidence that their software remains functional through Zowe releases. For more information, see "),i("router-link",{attrs:{to:"/extend/zowe-conformance-program.html"}},[e._v("Zowe Conformance Program")]),e._v(".")],1),e._v(" "),i("p",[e._v("You can extend Zowe in the following ways:")]),e._v(" "),i("ul",[i("li",[e._v("Extending the Zowe Command Line Interface.")]),e._v(" "),i("li",[e._v("Adding a REST API service to the API Mediation Layer.")]),e._v(" "),i("li",[e._v("Adding a plug-in to the Zowe Desktop.")])]),e._v(" "),i("h2",{attrs:{id:"extending-the-zowe-command-line-interface"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-zowe-command-line-interface"}},[e._v("#")]),e._v(" Extending the Zowe Command Line Interface")]),e._v(" "),i("p",[e._v("Command Line Interface extensions are able to provide new commands through their own plug-in, see "),i("router-link",{attrs:{to:"/extend/extend-cli/cli-developing-a-plugin.html"}},[e._v("Developing a new plug-in")]),e._v(".  There is a sample extension plug-in that is provided together with a tutorial, see "),i("router-link",{attrs:{to:"/extend/extend-cli/cli-installing-sample-plugin.html"}},[e._v("Installing the sample plug-in")]),e._v(".")],1),e._v(" "),i("p",[e._v("The command line interface is built using Node.js and is typically run on a machine other than z/OS, such as a PC where it can be driven through a Terminal or command prompt, or on an automation machine such as a DevOps pipeline orchestrator. The API Mediation Layer and Zowe Desktop run on z/OS.  Support for running the API Mediation Layer and Zowe Desktop off platform might come in a future release of Zowe. To understand the architecture of Zowe, see "),i("router-link",{attrs:{to:"/getting-started/zowe-architecture.html"}},[e._v("Zowe Architecture")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"adding-a-rest-api-service-to-the-api-mediation-layer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-rest-api-service-to-the-api-mediation-layer"}},[e._v("#")]),e._v(" Adding a REST API service to the API Mediation Layer")]),e._v(" "),i("p",[e._v("The API Mediation Layer includes an API gateway that acts as a reverse proxy server through which API requests can be routed from clients on its northbound edge to z/OS servers on its southbound edge. The API gateway is extensible so you can add REST APIs for z/OS servers to its list of services. For information about how to onboard REST APIs, see "),i("router-link",{attrs:{to:"/extend/extend-apiml/onboard-overview.html"}},[e._v("Onboarding Overview")]),e._v(".")],1),e._v(" "),i("p",[e._v("To register a z/OS server with the API Mediation layer, there are two techniques:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#dynamic-api-registration"}},[e._v("dynamic")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#static-api-registration"}},[e._v("static")])])]),e._v(" "),i("h3",{attrs:{id:"dynamic-api-registration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-api-registration"}},[e._v("#")]),e._v(" Dynamic API registration")]),e._v(" "),i("p",[e._v("The API Gateway can be called by the server that wants to register their REST APIs through a set of API calls to the API Gateway itself.  To do this, the z/OS server needs to know where the API Gateway is and make the API calls to register or unregister itself.  This knowledge can either be within the z/OS server itself, or more typically is done by introducing a micro service whose task is to register to the API Mediation Layer on behalf of an existing z/OS Service and act as a registration broker.  The coding pattern for the micro service is to create a Java Spring Boot server. For more information, see "),i("router-link",{attrs:{to:"/extend/extend-apiml/onboard-spring-boot-enabler.html"}},[e._v("Onboarding a Spring Boot based REST API Service")]),e._v(".  This is a bottom up registration, where the z/OS service beneath the API Mediation Layer is calling up into it to say it is ready to receive API requests as well as information for how it should be rendered on the API catalog.")],1),e._v(" "),i("p",[e._v("The Zowe z/OS started task "),i("code",[e._v("ZWESVSTC")]),e._v(" that launches the Zowe address spaces allows for extra USS 'microservices' to be lifecycled with it, so that they are started together with Zowe and ended when Zowe started task is stopped. For more information, see "),i("router-link",{attrs:{to:"/extend/lifecycling-with-zwesvstc.html"}},[e._v("Lifecycling with Zowe")]),e._v(".  This can be used, for example, to start and stop a dynamic APIML Spring Boot micro service that provides its own APIs or acts as a broker to register APIs on behalf of an existing z/OS server.")],1),e._v(" "),i("h3",{attrs:{id:"static-api-registration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#static-api-registration"}},[e._v("#")]),e._v(" Static API registration")]),e._v(" "),i("p",[e._v("Instead of having the API service calling up to the API Mediation Layer, it is possible to tell the API Mediation Layer about an API service by giving it a static file with details of the z/OS API service.  This is referred to in the documentation as being able to onboard without code changes, because there is no need to modify the existing API service to have it call up to the API Mediation Layer, or introduce a Spring Boot micro service to do this on its behalf. For more information, see "),i("router-link",{attrs:{to:"/extend/extend-apiml/onboard-static-definition.html"}},[e._v("Onboard a REST API without code changes required")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"adding-a-plug-in-to-the-zowe-desktop"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-plug-in-to-the-zowe-desktop"}},[e._v("#")]),e._v(" Adding a plug-in to the Zowe Desktop")]),e._v(" "),i("p",[e._v("The Zowe Desktop allows a user to interact with z/OS applications through a web browser.  It is served by the Zowe Application Framework Server on z/OS, also known as Z Lightweight User Experience (ZLUX).  The Zowe desktop comes with a set of default applications. You can extend it to add new applications. For more information, see "),i("router-link",{attrs:{to:"/extend/extend-desktop/mvd-extendingzlux.html"}},[e._v("Developing for Zowe Application Framework")]),e._v(".")],1),e._v(" "),i("p",[e._v("The Zowe Desktop is an angular application that allows native plug-ins to be built that enjoy a high level of interoperability with other desktop components.  The React JavaScript toolkit is also supported.  In addition, an existing web application can be included in the Zowe Desktop using an iframe.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("iframe")]),e._v(" "),i("p",[e._v("See "),i("router-link",{attrs:{to:"/extend/extend-desktop/mvd-extendingzlux.html#sample-iframe-app"}},[e._v("Sample iframe App")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("Angular App")]),e._v(" "),i("p",[e._v("See "),i("router-link",{attrs:{to:"/extend/extend-desktop/mvd-extendingzlux.html#sample-angular-app"}},[e._v("Sample Angular App")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("React App")]),e._v(" "),i("p",[e._v("See "),i("router-link",{attrs:{to:"/extend/extend-desktop/mvd-extendingzlux.html#sample-react-app"}},[e._v("Sample React App")]),e._v(".")],1)])]),e._v(" "),i("h2",{attrs:{id:"lifecycling-extensions-as-zowe-address-spaces"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lifecycling-extensions-as-zowe-address-spaces"}},[e._v("#")]),e._v(" Lifecycling extensions as Zowe address spaces")]),e._v(" "),i("p",[e._v("Zowe is run under the started task "),i("code",[e._v("ZWESVSTC")]),e._v(" that brings up its address spaces.  It is possible to introduce a new micro service to be started and stopped with the Zowe stated task. For more information, see "),i("router-link",{attrs:{to:"/extend/lifecycling-with-zwesvstc.html"}},[e._v("Lifecycling with Zowe")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);