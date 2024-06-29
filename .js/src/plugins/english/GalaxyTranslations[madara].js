var t=this&&this.__awaiter||function(t,e,r,a){return new(r||(r=Promise))((function(n,i){function s(t){try{c(a.next(t))}catch(t){i(t)}}function o(t){try{c(a.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,o)}c((a=a.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,a,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(s=0)),s;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,a=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var a,n=0,i=e.length;n<i;n++)!a&&n in e||(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),i=require("cheerio"),s=require("@libs/defaultCover"),o=require("@libs/novelStatus"),c=a(require("dayjs")),u=function(t,e){return new RegExp(e.join("|")).test(t)},l=new(function(){function a(t){var e;this.parseData=function(t){var e,r=(0,c.default)(),a=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",n=parseInt(a,10);if(!a)return t;if(u(t,["detik","segundo","second","วินาที"]))r.subtract(n,"second");else if(u(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))r.subtract(n,"minute");else if(u(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))r.subtract(n,"hours");else if(u(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))r.subtract(n,"days");else if(u(t,["week","semana"]))r.subtract(n,"week");else if(u(t,["month","mes"]))r.subtract(n,"month");else{if(!u(t,["year","año"]))return t;r.subtract(n,"year")}return r.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var r=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+r),this.options=t.options,this.filters=t.filters}return a.prototype.translateDragontea=function(t){if("dragontea"===this.id){var e=(0,i.load)(t.html()||""),a=e.html()||"";a=(a=a.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),t.html(a),t.find(":not(:has(*))").each((function(t,a){var n,i=e(a),s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),c=i.text().normalize("NFD").split(""),u=r([],c,!0).map((function(t){var e=t.normalize("NFC"),r=s.indexOf(e);return-1!==r?o[r]+t.slice(e.length):t})).join("");i.html((null===(n=i.html())||void 0===n?void 0:n.replace(i.text(),u).replace("\n","<br>"))||"")}))}return t},a.prototype.getHostname=function(t){var e=(t=t.split("/")[2]).split(".");return e.pop(),e.join(".")},a.prototype.getCheerio=function(r,a){return t(this,void 0,void 0,(function(){var t,s,o,c;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(r)];case 1:if(!(t=e.sent()).ok&&1!=a)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return o=i.load,[4,t.text()];case 2:if(s=o.apply(void 0,[e.sent()]),c=s("title").text().trim(),this.getHostname(r)!=this.getHostname(t.url)||"Bot Verification"==c||"You are being redirected..."==c||"Un instant..."==c||"Just a moment..."==c||"Redirecting..."==c)throw new Error("Captcha error, please open in webview");return[2,s]}}))}))},a.prototype.parseNovels=function(t){var e=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(r,a){var n=t(a).find(".post-title").text().trim(),i=t(a).find(".post-title").find("a").attr("href")||"";if(n&&i){var s=t(a).find("img"),o={name:n,cover:s.attr("data-src")||s.attr("src")||s.attr("data-lazy-srcset"),path:i.replace(/https?:\/\/.*?\//,"/")};e.push(o)}})),e},a.prototype.popularNovels=function(r,a){return t(this,arguments,void 0,(function(t,r){var a,n,i,s,o,c,u=r.filters,l=r.showLatestNovels;return e(this,(function(e){switch(e.label){case 0:for(n in a=this.site+"/page/"+t+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),l&&(a+="&m_orderby=latest"),u)if("object"==typeof u[n].value)for(i=0,s=u[n].value;i<s.length;i++)o=s[i],a+="&".concat(n,"=").concat(o);else u[n].value&&(a+="&".concat(n,"=").concat(u[n].value));return[4,this.getCheerio(a,!1)];case 1:return c=e.sent(),[2,this.parseNovels(c)]}}))}))},a.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,a,u,l,h,p,f,d,m,v=this;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return(t=e.sent())(".manga-title-badges, #manga-title span").remove(),(a={path:r,name:t(".post-title h1").text().trim()||t("#manga-title h1").text()}).cover=t(".summary_image > a > img").attr("data-lazy-src")||t(".summary_image > a > img").attr("data-src")||t(".summary_image > a > img").attr("src")||s.defaultCover,t(".post-content_item, .post-content").each((function(){var e=t(this).find("h5").text().trim(),r=t(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":a.genres=r;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":a.author=r;break;case"Status":case"Estado":a.status=r.includes("OnGoing")||r.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),t("div.summary__content .code-block,script").remove(),u=t("div.summary__content")||t("#tab-manga-about")||t('.post-content_item h5:contains("Summary")').next(),a.summary=this.translateDragontea(u).text().trim(),l=[],h="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+r+"ajax/chapters/",{method:"POST"}).then((function(t){return t.text()}))]:[3,3];case 2:return h=e.sent(),[3,5];case 3:return p=t(".rating-post-id").attr("value")||t("#manga-chapters-holder").attr("data-id")||"",(f=new FormData).append("action","manga_get_chapters"),f.append("manga",p),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:f}).then((function(t){return t.text()}))];case 4:h=e.sent(),e.label=5;case 5:return"0"!==h&&(t=(0,i.load)(h)),d=t(".wp-manga-chapter").length,t(".wp-manga-chapter").each((function(e,r){var a=t(r).find("a").text().trim(),n=t(r).find("span.chapter-release-date").text().trim();n=n?v.parseData(n):(0,c.default)().format("LL");var i=t(r).find("a").attr("href")||"";l.push({name:a,path:i.replace(/https?:\/\/.*?\//,"/"),releaseTime:n||null,chapterNumber:d-e})})),a.chapters=l.reverse(),[2,a]}}))}))},a.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return t=e.sent(),a=t(".text-left")||t(".text-right")||t(".entry-content")||t(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&a.find('span[style*="opacity: 0; position: fixed;"]').remove(),a.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(a).html()||""]}}))}))},a.prototype.searchNovels=function(r,a){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/page/"+a+"/?s="+r+"&post_type=wp-manga",[4,this.getCheerio(t,!0)];case 1:return n=e.sent(),[2,this.parseNovels(n)]}}))}))},a}())({id:"galaxytranslations",sourceSite:"https://galaxytranslations97.com/",sourceName:"Galaxy Translations",options:{useNewChapterEndpoint:!0,lang:"English"}});exports.default=l;