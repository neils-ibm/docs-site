(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{240:function(t,e,a){t.exports=a.p+"assets/img/tile.ec91951b.png"},241:function(t,e,a){t.exports=a.p+"assets/img/service.06ab47b9.png"},417:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"onboarding-existing-rest-api-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-existing-rest-api-script"}},[t._v("#")]),t._v(" Onboarding existing Rest API Script")]),t._v(" "),s("p",[t._v("(WORK IN PROGRESS)")]),t._v(" "),s("p",[t._v("In this tutorial we consider how an organisation with a product or tool with an existing Rest API can be rapidly Onboarded to Zowe™ by getting that product or tool registered with the API Gateway. This would then allow the product to be available from a central location and benefit from other Zowe API Mediation layer functionality. To do this we need a method for defining the service to the gateway")]),t._v(" "),s("p",[t._v("As the example product we are using a simple Spring Boot sample app that can be downloaded here: "),s("a",{attrs:{href:"https://github.com/zowe/spring-boot-jzos-sample",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring-boot-jzos-sample"),s("OutboundLink")],1),t._v('. If you have your own example skip the "Get your app running" section we can adapt your script for that.')]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Apart from accessing your API's centrally through the Gateway, the Gateway provides manifest information about all accessible API's in it's catalog. For our static definition this information is retrieved from api definitions stored in yaml files. Although these files are simple in structure they would add more complexity for your customers when it comes to installing your product. Therefore we have developed a script that you can include with your product to simplify the process.")]),t._v(" "),s("h3",{attrs:{id:"the-api-definition-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-api-definition-file"}},[t._v("#")]),t._v(" The Api definition file")]),t._v(" "),s("p",[t._v("Key to registering your product to the gateway is the following file structure which is installed in the API mediation layer. It's not critical to understand everything here but provided for anyone who wishes to grasp every detail.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jzos "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# internal id for the service")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IBM z/OS jzos "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Title as used in the Catalog information tiles")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IBM z/OS jzos REST API service "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Title as used in the Catalog information tiles")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("catalogUiTileId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jzos "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# internal id Catalog information tiles")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instanceBaseUrls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//host.my.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2956/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# location of service")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("homePageRelativeUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# home page, leave blank if instanceBaseUrls is the same")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routedServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gatewayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" api/v1  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [api/ui/ws]/v{majorVersion} convention")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceRelativeUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jzos "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# added to location ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.ibm.jzos "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# internal id")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gatewayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" api/v1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# main reference")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0.0 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# version of API on Gateway")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("documentationUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//host.my.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2956/swagger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ui.html "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Applies if no swagger ui")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swaggerUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//host.my.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2956/v2/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docs "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# provides a link and generates swagger info")]),t._v("\n          \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("catalogUiTiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jzos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# as per serviceId - internal id for the service")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" z/OS jzos services "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tile label")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IBM z/OS jzos REST services "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tile description")]),t._v("\n")])])]),s("p",[t._v("This information together creates the catalog tile information\n"),s("img",{attrs:{src:a(240),alt:""}})]),t._v(" "),s("p",[t._v("By clicking on the tile the following information is presented. Note the swagger is generated from the swaggerUrl link which needs to be v2 swagger\n"),s("img",{attrs:{src:a(241),alt:""}})]),t._v(" "),s("p",[t._v("Although the most critical information, the redirection of the urls is under routed services aloing with the service id.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("routedServices.gatewayUrl+serviceId will point at instanceBaseUrls+serviceRelativeUrl\n<gateway url>api/v1/jzos ==> https://host.my.com:2956/jzos\n")])])]),s("h2",{attrs:{id:"getting-the-sample-app-running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-sample-app-running"}},[t._v("#")]),t._v(" Getting the sample app running")]),t._v(" "),s("p",[t._v("If you are using the sample follow the instructions in the readme to get it up and running on your z/OS machine. If using your own go to section 2. The sample generates swagger 2 documentation.")]),t._v(" "),s("h2",{attrs:{id:"modifying-the-gateway-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modifying-the-gateway-script"}},[t._v("#")]),t._v(" Modifying the Gateway script")]),t._v(" "),s("p",[t._v("As described earlier we are registering our application with the API Catalog by way of a file that is read by the Gateway when it's started. We think of this as a static definition as the details of the service won't change whilst the gateway is running. To achieve a more dynamic relationship between the application and registry, one that can respond to changes in one or the other e.g. for load balancing purposes we need to construct the product differently. See "),s("router-link",{attrs:{to:"/extend/extend-api/existingApp.html"}},[t._v("Onboarding from scratch")])],1),t._v(" "),s("p",[t._v("The information contained in the yaml definitions file abover requires input from both the onboarding organisation (you) and the end user. Therefore the intent is to provide as much of the onboarder information into the script template so the end user has fewer choices to make. Therefore the script should be updated.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zowe/Onboarding-scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Onboard-to-gateway"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The following fields need to be set")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################################################################")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The following fields to be filled in by implementing extenders team")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################################################################")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultServiceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"xtdrsvcid" \t# lowercase only')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"Product name"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"Product description"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultCatalogUiTileId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"xtdrCatalogUiTileId"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultHomePageRelativeUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"" # Usually home page is the same as the base URL ')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultGatewayUrl1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"api/v1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultServiceUrl1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"api/v1/xtdrServiceId"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultGatewayUrl2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"ui/v1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultServiceUrl2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"ui/v1/xtdrServiceId"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Additional gateway and services will require further changes to script later")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultApiId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"no.id.ea"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultGatewayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("$defaultGatewayUrl1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultApiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"1.0.0"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultCatalogTileTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"My Product in catalog"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultCatalogTileDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"My Product description in catalog"')]),t._v("\n")])])]),s("h5",{attrs:{id:"defaultserviceid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultserviceid"}},[t._v("#")]),t._v(" defaultServiceId")]),t._v(" "),s("p",[t._v("This field is an internal identifier that needs to be unique across product instances. Therefore if you install multiple instances of your product this will also need to be incremented. Note it must be lowercase and is also used as part of the gateway uri")]),t._v(" "),s("h5",{attrs:{id:"defaulttitle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle"}},[t._v("#")]),t._v(" defaultTitle")]),t._v(" "),s("h5",{attrs:{id:"defaultdescription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultdescription"}},[t._v("#")]),t._v(" defaultDescription")]),t._v(" "),s("h5",{attrs:{id:"defaultcataloguitileid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultcataloguitileid"}},[t._v("#")]),t._v(" defaultCatalogUiTileId")]),t._v(" "),s("p",[t._v("This is the name that appears on the tab of the opened service")]),t._v(" "),s("h5",{attrs:{id:"defaulthomepagerelativeurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaulthomepagerelativeurl"}},[t._v("#")]),t._v(" defaultHomePageRelativeUrl")]),t._v(" "),s("p",[t._v("If the home page is not same as the base url add it in here")]),t._v(" "),s("h5",{attrs:{id:"defaultgatewayurl-n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultgatewayurl-n"}},[t._v("#")]),t._v(" defaultGatewayUrl(n)")]),t._v(" "),s("p",[t._v("This is the the gateway url that you want your redirect to work from.\nYou can create several defaultGatewayUrl/defaultServiceUrl pairings. Normally this would cater for api, web socket (ws) and ui.")]),t._v(" "),s("h5",{attrs:{id:"defaultserviceurl-n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultserviceurl-n"}},[t._v("#")]),t._v(" defaultServiceUrl(n)")]),t._v(" "),s("p",[t._v("The target url of the service")]),t._v(" "),s("h5",{attrs:{id:"defaultapiid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultapiid"}},[t._v("#")]),t._v(" defaultApiId")]),t._v(" "),s("p",[t._v("An internally used id. Suggest using com.co.yourprod etc.")]),t._v(" "),s("h5",{attrs:{id:"defaultgatewayurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultgatewayurl"}},[t._v("#")]),t._v(" defaultGatewayUrl")]),t._v(" "),s("p",[t._v("Main url redirection for documentation")]),t._v(" "),s("h5",{attrs:{id:"defaultapiversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultapiversion"}},[t._v("#")]),t._v(" defaultApiVersion")]),t._v(" "),s("p",[t._v("Version number of API if you wish to use it")]),t._v(" "),s("h5",{attrs:{id:"defaultcatalogtiletitle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultcatalogtiletitle"}},[t._v("#")]),t._v(" defaultCatalogTileTitle")]),t._v(" "),s("p",[t._v("The title that is displayed in the catalog pages")]),t._v(" "),s("h5",{attrs:{id:"defaultcatalogtiledescription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultcatalogtiledescription"}},[t._v("#")]),t._v(" defaultCatalogTileDescription")]),t._v(" "),s("p",[t._v("The description that is displayed in the catalog pages")]),t._v(" "),s("h2",{attrs:{id:"how-the-script-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-the-script-works"}},[t._v("#")]),t._v(" How the Script works")]),t._v(" "),s("p",[t._v("Your updated shell script can now be run. This is how the process will appear to the end user.")])])}),[],!1,null,null,null);e.default=n.exports}}]);