webpackJsonp([82],{"7KpM":function(e,t,n){var a=n("VU/8")(null,n("vkrk"),null,null,null);e.exports=a.exports},AoaZ:function(e,t,n){e.exports=n("7KpM")},vkrk:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",{attrs:{id:"SingletonPattern"}},[n("a",{staticClass:"anchor",attrs:{href:"#cube-SingletonPattern-anchor","aria-hidden":"true"}},[n("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" Singleton Pattern")]),e._v(" "),n("p",[e._v("You need to take the singleton and multiton pattern of components into account when invoking the component by API.")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("The components that are involved with api-invoking in cube-ui are all popups. Frequently used ones among them are listed below:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("In general cases, default behavior can meet the demand, except you have special need.")]),e._v(" "),e._m(5)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("p",[e._v("After 1.11")]),e._v(" "),n("p",[e._v("If the component is singleton, then there will be only one instance when instantiating it multiple times "),n("strong",[e._v("in same component")]),e._v(", and there is only one corresponding view layer; If the component is multiton, then a new instance will be created each time you instantiate it, and there are multiple corresponding view layers which don't affect each other.")])]),e._v(" "),n("li",[n("p",[e._v("Below 1.11")]),e._v(" "),n("p",[e._v("If the component is singleton, then there will be only one instance when instantiating it multiple times, and there is only one corresponding view layer; If the component is multiton, then a new instance will be created each time you instantiate it, and there are multiple corresponding view layers which don't affect each other.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"#/en-US/docs/toast"}},[e._v("Toast")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#/en-US/docs/picker"}},[e._v("Picker")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#/en-US/docs/time-picker"}},[e._v("TimePicker")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#/en-US/docs/dialog"}},[e._v("Dialog")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#/en-US/docs/action-sheet"}},[e._v("ActionSheet")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("All the api-invokings are implemented with the "),n("code",{pre:!0},[e._v("createAPI")]),e._v(" function exported by the "),n("a",{attrs:{href:"#/en-US/docs/create-api"}},[e._v("create-api")]),e._v(" module. It is decided whether the component is singleton in definition. See details in "),n("a",{attrs:{href:"#/en-US/docs/create-api"}},[e._v("create-api")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("By default, Toast, Dialog and ActionSheet is singleton, while Picker and TimePicker is multiton because their scenes tend to be more complex with a lot of extra data processing. If you want to change the default behavior at the time of instantiation,you can modify the parameter of "),n("code",{pre:!0},[e._v("$createX")]),e._v(". For example, we change the Dialog into multiton:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" dialog = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$createDialog({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'confirm'")]),e._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("title")]),e._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'title'")]),e._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("content")]),e._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'content'")]),e._v("\n}, "),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(")\ndialog.show()\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note:")]),e._v(" Considering the scenes of Picker and TimePicker, neither of them support singleton pattern.")])}]}}});