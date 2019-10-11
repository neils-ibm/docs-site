(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(e,t,a){e.exports=a.p+"assets/img/swag.ae488ef5.png"},303:function(e,t,a){e.exports=a.p+"assets/img/struct1.8b10736f.png"},304:function(e,t,a){e.exports=a.p+"assets/img/menu1.4aef2014.png"},440:function(e,t,a){"use strict";a.r(t);var s=a(15),n=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"creating-a-restapi-with-swagger-documentation-using-liberty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-restapi-with-swagger-documentation-using-liberty","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a RestAPI with Swagger documentation using Liberty")]),e._v(" "),s("p",[e._v('This tutorial will show you how to develop your own Zowe API\'s with Swagger notation. Although the resulting War file is "dropped into" a Liberty server, the same principles can be applied for other JEE servers.')]),e._v(" "),s("p",[e._v("The source repo for the project can be found at the "),s("a",{attrs:{href:"https://github.com/zowe/rest-api-jzos-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("rest-api-jzos sample"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("This document describes how we can add new function and UI's to run alongside Zowe.")]),e._v(" "),s("p",[e._v("So for example, as a team with an established z/OS application we may want to provide wider access to that functionality so that it can be exploited by different applications and organizations. This can include making functionality available to company DevOps processes or for inclusion in UI's.")]),e._v(" "),s("h2",{attrs:{id:"prerequisite-skills"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-skills","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisite skills")]),e._v(" "),s("p",[e._v("Developers should be familiar with the following technologies:")]),e._v(" "),s("ul",[s("li",[e._v("Java")]),e._v(" "),s("li",[e._v("Git and GitHub")]),e._v(" "),s("li",[e._v("Maven")])]),e._v(" "),s("p",[e._v("Knowledge of the following development technologies is beneficial:")]),e._v(" "),s("ul",[s("li",[e._v("J2E")]),e._v(" "),s("li",[e._v("Liberty or WebSphere Application Server")]),e._v(" "),s("li",[e._v("Eclipse/z/OS Explorer")]),e._v(" "),s("li",[e._v("RestAPI's")]),e._v(" "),s("li",[e._v("zSystems development")])]),e._v(" "),s("h2",{attrs:{id:"zowe-api-architecture-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zowe-api-architecture-overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Zowe API Architecture Overview")]),e._v(" "),s("p",[e._v("Much of the Zowe infrastructure builds upon functionality provided by different applications and systems in z/OS some of which are microservices deployed on a Liberty server running on the Z system. As an example Zowe can access z/OSMF services that are aggregated with other functionality that provides new or more comprehensive functionality that allows new services to be created that also benefit from single-sign using "),s("strong",[e._v("Lightweight Third Party")]),e._v(" Authentication (LTPA) keys and centralized logging functions.")]),e._v(" "),s("p",[e._v("The API for Zowe is written in Java utilizing JAX-RS: Java API for RESTful Web Services (JAX-RS). JAX-RS uses Java annotations to simplify the development and deployment of web service clients and endpoints and ultimately become rendered into swagger interfaces.")]),e._v(" "),s("h2",{attrs:{id:"building-your-own-microservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-your-own-microservice","aria-hidden":"true"}},[e._v("#")]),e._v(" Building your own Microservice")]),e._v(" "),s("p",[e._v("There are many publications and blogs regarding Microservice design\navailable and it's beyond our scope to attempt to cover here. Fundamentally, however you have most likely already performed an analysis of your product and have identified several notional business\nareas or components that you are most interested in. One of the recommendations in developing Microservices is not to have one massive service but several services that represent component areas. One reason\nwould be Microservices that are not used or function is considered restricted can be excluded without affecting other function.")]),e._v(" "),s("p",[e._v("Once you have identified areas of the functionality Microservices for the API's can be designed. Once again there are an\nenormous amount of guidelines, Best practices, strict rules and design guides out there and I won't be prescriptive how you do this except to\nsay that you will spend a lot of time teasing out your API object names and considering how the REST functions (GET, PUT, POST and DELETE) apply\nto these objects. Once ready or as long as we have the most basic Get Object API defined we can make a start at coding.")]),e._v(" "),s("p",[e._v("An example below is intended to show how we apply the definitions of\nthe Rest API as Java Annotations around a Java method.")]),e._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[e._v("\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@PUT")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{attribute}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Produces")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MediaType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("APPLICATION_JSON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@ApiOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Updates the value of an existing environment variable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t              notes "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"This API uses JZOS to perform the process."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@ApiResponses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@ApiResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("code "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Updated the environment variable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Response")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Environment variable name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" required "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@PathParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"attribute"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Value of an environmental variable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ValueParameter")]),e._v(" parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\tjzosService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("updateProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v('Within the Liberty server we have configured a function "APIDiscovery" which at run time converts this into swagger format.')]),e._v(" "),s("p",[s("img",{attrs:{src:a(302),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"anatomy-of-a-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-a-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Anatomy of a project")]),e._v(" "),s("p",[e._v("Using "),s("a",{attrs:{href:"https://github.com/zowe/rest-api-jzos-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("rest-api-jzos sample"),s("OutboundLink")],1),e._v(" as a guide. Create a Dynamic web project (don't specify it as part of an EAR if using the wizard), or if using a\nMaven archetype choose one containing a simplified sample J2EE application.")]),e._v(" "),s("p",[s("em",[e._v("Alternatively, use the project as a template. Download the code, rename it and use as the basis of your new project.")])]),e._v(" "),s("p",[e._v("The image below indicates the type of structure you should be seeing although this contains more files and folders than you will have\ninitially it should give you the general idea. Don't worry about git or target at this stage they will appear later as you develop your project.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(303),alt:""}})]),e._v(" "),s("p",[e._v("Your project should be developed as a standalone war file and deployed either to a local server if you have no z dependencies (Hint: good to\nstart with). If using Eclipse and not yet using z/OS specific functionality consider setting up a test server within Eclipse and\nautomatically deploying your war to it. Fantastic for debugging.")]),e._v(" "),s("p",[e._v("The alternative is to drop the war into the Dropins folder of an existing Zowe installation.")]),e._v(" "),s("p",[e._v("It is possible to debug remotely using Eclipse but personally I have found this can lead to issues such as corrupt process locks in z/OS\nrequiring SysProg intervention. If you have quick access to SysProg rights you may be comfortable with this but often good old sysout is the\nbest debug support")]),e._v(" "),s("p",[e._v("The example project uses Maven for its build process which will run locally or as part of a Jenkins build process.")]),e._v(" "),s("p",[e._v("Further examples of implementations can be found looking at the code for the Zowe microservice.")]),e._v(" "),s("h3",{attrs:{id:"eclipse-hint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-hint","aria-hidden":"true"}},[e._v("#")]),e._v(" Eclipse hint..")]),e._v(" "),s("p",[e._v("Using Maven to build in an Eclipse environment can leave your files full of red x's. Generally this is caused because the Eclipse compiler\nmechanism has no visibility of dependencies described in the pom.xml file. There is a magic function to help with this. Right click on your\nproject and select the Maven Update option. This will allow the Eclipse project to be updated and get rid of many of the x's.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(304),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"generic-jar-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generic-jar-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Generic jar files")]),e._v(" "),s("p",[e._v("It is likely that the Zowe team will provide utility jar files that will either be present on the server or require specific inclusion as\ndescribed in 'Additional Jars'. Currently generic jar files such as Zowe utilities should be included in your war file. This may be revised\nlater based upon future requirements.")]),e._v(" "),s("h2",{attrs:{id:"unit-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing","aria-hidden":"true"}},[e._v("#")]),e._v(" Unit Testing")]),e._v(" "),s("p",[e._v("Aim for 100% coverage. In many cases it may be impossible or impractical to achieve either because code is auto-generated or covered in other\ntests. Use Jacoco to highlight where there are gaps.")]),e._v(" "),s("p",[e._v("Note the references to Jacoco in the atlas-jzos-sample pom.xml file. Remember it operates in two phases, initializing before the unit tests\nare run and reporting afterwards.")]),e._v(" "),s("p",[e._v("Examples of unit testing, the use of Mockito and PowerMock are in the src/test/java folder for the jzos sample.")]),e._v(" "),s("h3",{attrs:{id:"fv-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fv-testing","aria-hidden":"true"}},[e._v("#")]),e._v(" FV testing")]),e._v(" "),s("p",[e._v("For the purpose of testing applications in a live fully configured environment scenario it is necessary to create another testing specific\nproject. You will notice that only the src/main/tests folder is populated. When running a Maven build the tests contained here are\nexercised.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Using the maven-archetype-quickstart as your Maven template or by creating a new Java project and adding the pom.xml file in Eclipse,\ncreate a project to contain FV and/or Integration tests.")])]),e._v(" "),s("li",[s("p",[e._v("Alternatively, you can always download the code, rename it and use as the basis of your new project.")])])])])},[],!1,null,null,null);t.default=n.exports}}]);