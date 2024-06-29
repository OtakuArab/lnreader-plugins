var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(a,i){function o(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,i=e.length;a<i;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@libs/fetch"),i=require("cheerio"),o=require("@libs/defaultCover"),s=require("@libs/novelStatus"),c=n(require("dayjs")),u=function(t,e){return new RegExp(e.join("|")).test(t)},l=new(function(){function n(t){var e;this.parseData=function(t){var e,r=(0,c.default)(),n=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",a=parseInt(n,10);if(!n)return t;if(u(t,["detik","segundo","second","วินาที"]))r.subtract(a,"second");else if(u(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))r.subtract(a,"minute");else if(u(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))r.subtract(a,"hours");else if(u(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))r.subtract(a,"days");else if(u(t,["week","semana"]))r.subtract(a,"week");else if(u(t,["month","mes"]))r.subtract(a,"month");else{if(!u(t,["year","año"]))return t;r.subtract(a,"year")}return r.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var r=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+r),this.options=t.options,this.filters=t.filters}return n.prototype.translateDragontea=function(t){if("dragontea"===this.id){var e=(0,i.load)(t.html()||""),n=e.html()||"";n=(n=n.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),t.html(n),t.find(":not(:has(*))").each((function(t,n){var a,i=e(n),o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),s="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),c=i.text().normalize("NFD").split(""),u=r([],c,!0).map((function(t){var e=t.normalize("NFC"),r=o.indexOf(e);return-1!==r?s[r]+t.slice(e.length):t})).join("");i.html((null===(a=i.html())||void 0===a?void 0:a.replace(i.text(),u).replace("\n","<br>"))||"")}))}return t},n.prototype.getHostname=function(t){var e=(t=t.split("/")[2]).split(".");return e.pop(),e.join(".")},n.prototype.getCheerio=function(r,n){return t(this,void 0,void 0,(function(){var t,o,s,c;return e(this,(function(e){switch(e.label){case 0:return[4,(0,a.fetchApi)(r)];case 1:if(!(t=e.sent()).ok&&1!=n)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return s=i.load,[4,t.text()];case 2:if(o=s.apply(void 0,[e.sent()]),c=o("title").text().trim(),this.getHostname(r)!=this.getHostname(t.url)||"Bot Verification"==c||"You are being redirected..."==c||"Un instant..."==c||"Just a moment..."==c||"Redirecting..."==c)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},n.prototype.parseNovels=function(t){var e=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(r,n){var a=t(n).find(".post-title").text().trim(),i=t(n).find(".post-title").find("a").attr("href")||"";if(a&&i){var o=t(n).find("img"),s={name:a,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset"),path:i.replace(/https?:\/\/.*?\//,"/")};e.push(s)}})),e},n.prototype.popularNovels=function(r,n){return t(this,arguments,void 0,(function(t,r){var n,a,i,o,s,c,u=r.filters,l=r.showLatestNovels;return e(this,(function(e){switch(e.label){case 0:for(a in n=this.site+"/page/"+t+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),l&&(n+="&m_orderby=latest"),u)if("object"==typeof u[a].value)for(i=0,o=u[a].value;i<o.length;i++)s=o[i],n+="&".concat(a,"=").concat(s);else u[a].value&&(n+="&".concat(a,"=").concat(u[a].value));return[4,this.getCheerio(n,!1)];case 1:return c=e.sent(),[2,this.parseNovels(c)]}}))}))},n.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,n,u,l,h,p,f,d,m,v=this;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return(t=e.sent())(".manga-title-badges, #manga-title span").remove(),(n={path:r,name:t(".post-title h1").text().trim()||t("#manga-title h1").text()}).cover=t(".summary_image > a > img").attr("data-lazy-src")||t(".summary_image > a > img").attr("data-src")||t(".summary_image > a > img").attr("src")||o.defaultCover,t(".post-content_item, .post-content").each((function(){var e=t(this).find("h5").text().trim(),r=t(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":n.genres=r;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":n.author=r;break;case"Status":case"Estado":n.status=r.includes("OnGoing")||r.includes("مستمرة")?s.NovelStatus.Ongoing:s.NovelStatus.Completed}})),t("div.summary__content .code-block,script").remove(),u=t("div.summary__content")||t("#tab-manga-about")||t('.post-content_item h5:contains("Summary")').next(),n.summary=this.translateDragontea(u).text().trim(),l=[],h="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,a.fetchApi)(this.site+r+"ajax/chapters/",{method:"POST"}).then((function(t){return t.text()}))]:[3,3];case 2:return h=e.sent(),[3,5];case 3:return p=t(".rating-post-id").attr("value")||t("#manga-chapters-holder").attr("data-id")||"",(f=new FormData).append("action","manga_get_chapters"),f.append("manga",p),[4,(0,a.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:f}).then((function(t){return t.text()}))];case 4:h=e.sent(),e.label=5;case 5:return"0"!==h&&(t=(0,i.load)(h)),d=t(".wp-manga-chapter").length,t(".wp-manga-chapter").each((function(e,r){var n=t(r).find("a").text().trim(),a=t(r).find("span.chapter-release-date").text().trim();a=a?v.parseData(a):(0,c.default)().format("LL");var i=t(r).find("a").attr("href")||"";l.push({name:n,path:i.replace(/https?:\/\/.*?\//,"/"),releaseTime:a||null,chapterNumber:d-e})})),n.chapters=l.reverse(),[2,n]}}))}))},n.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return t=e.sent(),n=t(".text-left")||t(".text-right")||t(".entry-content")||t(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&n.find('span[style*="opacity: 0; position: fixed;"]').remove(),n.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(n).html()||""]}}))}))},n.prototype.searchNovels=function(r,n){return t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/page/"+n+"/?s="+r+"&post_type=wp-manga",[4,this.getCheerio(t,!0)];case 1:return a=e.sent(),[2,this.parseNovels(a)]}}))}))},n}())({id:"turkcelightnovels",sourceSite:"https://turkcelightnovels.com/",sourceName:"TurkceLightNovels",options:{lang:"Turkish"}});exports.default=l;