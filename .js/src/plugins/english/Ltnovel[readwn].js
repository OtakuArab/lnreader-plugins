var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),i=require("@libs/novelStatus"),o=require("cheerio"),a=n(require("dayjs")),s=n(require("qs")),u=new(function(){function n(t){var e;this.id=t.id,this.name=t.sourceName,this.icon="multisrc/readwn/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var n=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+n),this.filters=t.filters}return n.prototype.popularNovels=function(n,i){return t(this,arguments,void 0,(function(t,n){var i,a,s,u,l,c,h,d=this,f=n.filters,v=n.showLatestNovels;return e(this,(function(e){switch(e.label){case 0:return i=this.site+"/list/",i+=((null===(u=null==f?void 0:f.genres)||void 0===u?void 0:u.value)||"all")+"/",i+=((null===(l=null==f?void 0:f.status)||void 0===l?void 0:l.value)||"all")+"-",i+=v?"lastdotime":(null===(c=null==f?void 0:f.sort)||void 0===c?void 0:c.value)||"newstime",i+="-"+(t-1)+".html",(null===(h=null==f?void 0:f.tags)||void 0===h?void 0:h.value)&&(i=this.site+"/tags/"+f.tags.value+"-0.html"),[4,(0,r.fetchApi)(i).then((function(t){return t.text()}))];case 1:return a=e.sent(),s=(0,o.load)(a),[2,s("li.novel-item").map((function(t,e){return{name:s(e).find("h4").text()||"",cover:d.site+s(e).find(".novel-cover > img").attr("data-src"),path:s(e).find("a").attr("href")||""}})).get().filter((function(t){return t.name&&t.path}))]}}))}))},n.prototype.parseNovel=function(n){return t(this,void 0,void 0,(function(){var t,s,u,l,c,h,d,f;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+n).then((function(t){return t.text()}))];case 1:if(t=e.sent(),s=(0,o.load)(t),(u={path:n,name:s("h1.novel-title").text()||""}).author=s("span[itemprop=author]").text(),u.cover=this.site+s("figure.cover > img").attr("data-src"),u.summary=s(".summary").text().replace("Summary","").trim(),u.genres=s("div.categories > ul > li").map((function(t,e){var n;return null===(n=s(e).text())||void 0===n?void 0:n.trim()})).get().join(","),s("div.header-stats > span").each((function(){"Status"===s(this).find("small").text()&&(u.status="Ongoing"===s(this).find("strong").text()?i.NovelStatus.Ongoing:i.NovelStatus.Completed)})),l=parseInt(s(".header-stats").find("span > strong").first().text().trim()),c=s(".chapter-list li").map((function(t,e){var n,r,i,o=s(e).find("a .chapter-title").text().trim(),u=null===(n=s(e).find("a").attr("href"))||void 0===n?void 0:n.trim();if(!o||!u)return null;var l=s(e).find("a .chapter-update").text().trim();if(null===(r=null==l?void 0:l.includes)||void 0===r?void 0:r.call(l,"ago")){var c=(null===(i=l.match(/\d+/))||void 0===i?void 0:i[0])||"0",h=parseInt(c,10);if(h){var d=(0,a.default)();(l.includes("hours ago")||l.includes("hour ago"))&&d.subtract(h,"hours"),(l.includes("days ago")||l.includes("day ago"))&&d.subtract(h,"days"),(l.includes("months ago")||l.includes("month ago"))&&d.subtract(h,"months"),l=d.format("LL")}}return{name:o,path:u,releaseTime:l,chapterNumber:t+1}})).get().filter((function(t){return t})),l>c.length)for(h=parseInt((null===(f=c[c.length-1].path.match(/_(\d+)\.html/))||void 0===f?void 0:f[1])||"",10),d=(h||c.length)+1;d<=l;d++)c.push({name:"Chapter "+d,path:n.replace(".html","_"+d+".html"),releaseTime:null,chapterNumber:d});return u.chapters=c,[2,u]}}))}))},n.prototype.parseChapter=function(n){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+n).then((function(t){return t.text()}))];case 1:return t=e.sent(),i=(0,o.load)(t),[2,i(".chapter-content").html()||""]}}))}))},n.prototype.searchNovels=function(n){return t(this,void 0,void 0,(function(){var t,i,a=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+"/e/search/index.php",{headers:{"Content-Type":"application/x-www-form-urlencoded",Referer:this.site+"/search.html",Origin:this.site},method:"POST",body:s.default.stringify({show:"title",tempid:1,tbname:"news",keyboard:n})}).then((function(t){return t.text()}))];case 1:return t=e.sent(),i=(0,o.load)(t),[2,i("li.novel-item").map((function(t,e){return{name:i(e).find("h4").text()||"",cover:a.site+i(e).find("img").attr("data-src"),path:i(e).find("a").attr("href")||""}})).get().filter((function(t){return t.name&&t.path}))]}}))}))},n}())({id:"ltnovel",sourceSite:"https://www.ltnovels.com",sourceName:"Ltnovel",options:{versionIncrements:1}});exports.default=u;