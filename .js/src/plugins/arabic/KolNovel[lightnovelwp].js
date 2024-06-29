var e=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function n(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,n)}c((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var s,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function n(n){return function(c){return function(n){if(s)throw new TypeError("Generator is already executing.");for(;i&&(i=0,n[0]&&(o=0)),o;)try{if(s=1,r&&(a=2&n[0]?r.return:n[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,n[1])).done)return a;switch(r=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,r=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==n[0]&&2!==n[0])){o=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){o.label=n[1];break}if(6===n[0]&&o.label<a[1]){o.label=a[1],a=n;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(n);break}a[2]&&o.ops.pop(),o.trys.pop();continue}n=t.call(e,o)}catch(e){n=[6,e],r=0}finally{s=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var s=require("cheerio"),r=require("htmlparser2"),a=require("@libs/fetch"),i=require("@libs/novelStatus"),o=require("@libs/defaultCover");function n(e,t){var s=e.match(/(\d+)$/);s&&s[0]&&(t.chapterNumber=parseInt(s[0]))}var c=new(function(){function c(e){var t,s;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var r=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.1.".concat(1+r),this.options=null!==(s=e.options)&&void 0!==s?s:{},this.filters=e.filters}return c.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},c.prototype.safeFecth=function(s,r){return e(this,void 0,void 0,(function(){var e,i,o,n,c;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(s)];case 1:if(!(e=t.sent()).ok&&1!=r)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(i=t.sent(),o=null===(c=null===(n=i.match(/<title>(.*?)<\/title>/))||void 0===n?void 0:n[1])||void 0===c?void 0:c.trim(),this.getHostname(s)!=this.getHostname(e.url)||o&&("Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o))throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},c.prototype.parseNovels=function(e){var t=this,s=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var r=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],a=r[1],i=r[2];if(i&&a){var n=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/>/)||[];s.push({name:i,cover:n[2]||n[1]||o.defaultCover,path:a.replace(t.site,"")})}})),s},c.prototype.popularNovels=function(s,r){return e(this,arguments,void 0,(function(e,s){var r,a,i,o,n,c,l,u,p,h=s.filters,v=s.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(i in r=null!==(p=null===(u=this.options)||void 0===u?void 0:u.seriesPath)&&void 0!==p?p:"series/",a=this.site+r+"?page="+e,h||(h=this.filters||{}),v&&(a+="&order=latest"),h)if("object"==typeof h[i].value)for(o=0,n=h[i].value;o<n.length;o++)c=n[o],a+="&".concat(i,"=").concat(c);else h[i].value&&(a+="&".concat(i,"=").concat(h[i].value));return[4,this.safeFecth(a,!1)];case 1:return l=t.sent(),[2,this.parseNovels(l)]}}))}))},c.prototype.parseNovel=function(s){return e(this,void 0,void 0,(function(){var e,a,c,l,u,p,h,v,f,d,m,g,b,w,y,N,k,x,C;return t(this,(function(t){switch(t.label){case 0:return e=this.site,[4,this.safeFecth(e+s,!1)];case 1:return a=t.sent(),c={path:s,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},l=!1,u=!1,p=!1,h=!1,v=!1,f=!1,d=!1,m=!1,g=!1,b=!1,w=0,y=!1,N=[],k={},x=new r.Parser({onopentag:function(t,s){var r;!c.cover&&(null===(r=s.class)||void 0===r?void 0:r.includes("ts-post-image"))?(c.name=s.title,c.cover=s["data-src"]||s.src||o.defaultCover):"genxed"===s.class||"sertogenre"===s.class?l=!0:l&&"a"===t?u=!0:"div"!==t||"entry-content"!==s.class&&"description"!==s.itemprop?"spe"===s.class||"serl"===s.class?h=!0:h&&"span"===t?v=!0:"div"===t&&"sertostat"===s.class?(h=!0,v=!0,m=!0):"eplister eplisterfull"===s.class?g=!0:g&&"li"===t?b=!0:b&&("a"===t?k.path=s.href.replace(e,"").trim():"epl-num"===s.class?w=1:"epl-title"===s.class?w=2:"epl-date"===s.class?w=3:"epl-price"===s.class&&(w=4)):p=!0},ontext:function(e){var t,s;if(l)u&&(c.genres+=e+", ");else if(p)c.summary+=e.trim();else if(h){if(v){var r=e.toLowerCase().replace(":","").trim();if(f)c.author+=e||"Unknown";else if(d)c.artist+=e||"Unknown";else if(m)switch(r){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":c.status=i.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":c.status=i.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":c.status=i.NovelStatus.OnHiatus;break;default:c.status=i.NovelStatus.Unknown}switch(r){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":f=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":m=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":d=!0}}}else if(g&&b)if(1===w)n(e,k);else if(2===w)k.name=(null===(s=null===(t=e.match(RegExp("^".concat(c.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===t?void 0:t[1])||void 0===s?void 0:s.trim())||e.trim(),k.chapterNumber||n(e,k);else if(3===w)k.releaseTime=e;else if(4===w){switch(r=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":y=!1;break;default:y=!0}}},onclosetag:function(e){var t,s,r;l?u?u=!1:(l=!1,c.genres=null===(t=c.genres)||void 0===t?void 0:t.slice(0,-2)):p?"br"===e?c.summary+="\n":"div"===e&&(p=!1):h?v?"span"===e&&(v=!1,f&&c.author?f=!1:d&&c.artist?d=!1:m&&""!==c.status&&(m=!1)):"div"===e&&(h=!1,c.author=null===(s=c.author)||void 0===s?void 0:s.trim(),c.artist=null===(r=c.artist)||void 0===r?void 0:r.trim()):g&&(b?1===w||2===w||3===w||4===w?w=0:"li"===e&&(b=!1,k.chapterNumber||(k.chapterNumber=0),y||N.push(k),k={}):"ul"===e&&(g=!1))}}),x.write(a),x.end(),N.length&&((null===(C=this.options)||void 0===C?void 0:C.reverseChapters)&&N.reverse(),c.chapters=N),[2,c]}}))}))},c.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,a,i,o,n,c,l;return t(this,(function(t){switch(t.label){case 0:return[4,this.safeFecth(this.site+r,!1)];case 1:if(e=t.sent(),null===(o=this.options)||void 0===o?void 0:o.customJs)try{a=(0,s.load)(e),(i=a("article > style").text().trim().split(",")).push.apply(i,(null===(n=i.pop())||void 0===n?void 0:n.match(/^\.\w+/))||[]),i.map((function(e){return a("p".concat(e)).remove()})),e=a.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(l=null===(c=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===c?void 0:c[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===l?void 0:l.join("\n"))||""]}}))}))},c.prototype.searchNovels=function(s,r){return e(this,void 0,void 0,(function(){var e,a;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+r+"/?s="+s,[4,this.safeFecth(e,!0)];case 1:return a=t.sent(),[2,this.parseNovels(a)]}}))}))},c}())({id:"kolnovel",sourceSite:"https://kolnovel.club/",sourceName:"Kol Novel",options:{lang:"Arabic",reverseChapters:!0,customJs:"let ignore = $('article > style').text().trim().split(',');ignore.push(...(ignore.pop()?.match(/^\\.\\w+/) || []));ignore.map(tag => $(`p${tag}`).remove());"}});exports.default=c;