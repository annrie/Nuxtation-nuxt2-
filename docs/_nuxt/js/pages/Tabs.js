(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5,6,7,8,9,10,11,13,16,17],{18:function(t,e,o){"use strict";o(40);e.a={asyncData:function(t){return{baseUrl:t.env.baseUrl,baseDir:t.env.baseDir,basePath:t.env.basePath,siteName:t.env.siteName,siteDesc:t.env.siteDesc,siteKeywords:t.env.siteKeywords,ogpImages:t.env.ogpImages,shortName:t.env.shortName}},head:function(){var head={meta:[]},title=this.meta.title,desc=this.meta.desc,t=this.meta.type,image=this.meta.image;if(title&&(head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:"".concat(title," - ").concat(this.siteName)})),desc)head.meta.push({hid:"description",name:"description",content:desc}),head.meta.push({hid:"og:description",property:"og:description",content:desc});else if(!desc&&title){var e="The ".concat(title," sample page on ").concat(this.shortName," site. ").concat(this.siteDesc);head.meta.push({hid:"description",name:"description",content:e}),head.meta.push({hid:"og:description",property:"og:description",content:e})}t?head.meta.push({hid:"og:type",property:"og:type",content:t}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"});var o="".concat(this.baseUrl).concat(this.$router.history.base).concat(this.$route.path);return head.meta.push({hid:'"og:url',property:"og:url",content:o}),image&&head.meta.push({hid:"og:image",property:"og:image",content:this.ogpImages+image}),head}}}}]);