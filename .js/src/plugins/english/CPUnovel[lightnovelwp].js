var e=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function n(e){try{c(r.next(e))}catch(e){i(e)}}function o(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,o)}c((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var s,r,a,i,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(c){return function(o){if(s)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(n=0)),n;)try{if(s=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,r=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!(a=n.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],r=0}finally{s=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var s=require("cheerio"),r=require("htmlparser2"),a=require("@libs/fetch"),i=require("@libs/novelStatus"),n=require("@libs/defaultCover");function o(e,t){var s=e.match(/(\d+)$/);s&&s[0]&&(t.chapterNumber=parseInt(s[0]))}var c=new(function(){function c(e){var t,s;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var r=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.1.".concat(1+r),this.options=null!==(s=e.options)&&void 0!==s?s:{},this.filters=e.filters}return c.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},c.prototype.safeFecth=function(s,r){return e(this,void 0,void 0,(function(){var e,i,n,o,c;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(s)];case 1:if(!(e=t.sent()).ok&&1!=r)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(i=t.sent(),n=null===(c=null===(o=i.match(/<title>(.*?)<\/title>/))||void 0===o?void 0:o[1])||void 0===c?void 0:c.trim(),this.getHostname(s)!=this.getHostname(e.url)||n&&("Bot Verification"==n||"You are being redirected..."==n||"Un instant..."==n||"Just a moment..."==n||"Redirecting..."==n))throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},c.prototype.parseNovels=function(e){var t=this,s=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var r=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],a=r[1],i=r[2];if(i&&a){var o=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/>/)||[];s.push({name:i,cover:o[2]||o[1]||n.defaultCover,path:a.replace(t.site,"")})}})),s},c.prototype.popularNovels=function(s,r){return e(this,arguments,void 0,(function(e,s){var r,a,i,n,o,c,l,u,h,p=s.filters,v=s.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(i in r=null!==(h=null===(u=this.options)||void 0===u?void 0:u.seriesPath)&&void 0!==h?h:"series/",a=this.site+r+"?page="+e,p||(p=this.filters||{}),v&&(a+="&order=latest"),p)if("object"==typeof p[i].value)for(n=0,o=p[i].value;n<o.length;n++)c=o[n],a+="&".concat(i,"=").concat(c);else p[i].value&&(a+="&".concat(i,"=").concat(p[i].value));return[4,this.safeFecth(a,!1)];case 1:return l=t.sent(),[2,this.parseNovels(l)]}}))}))},c.prototype.parseNovel=function(s){return e(this,void 0,void 0,(function(){var e,a,c,l,u,h,p,v,f,d,m,b,g,w,y,N,k,C,x;return t(this,(function(t){switch(t.label){case 0:return e=this.site,[4,this.safeFecth(e+s,!1)];case 1:return a=t.sent(),c={path:s,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},l=!1,u=!1,h=!1,p=!1,v=!1,f=!1,d=!1,m=!1,b=!1,g=!1,w=0,y=!1,N=[],k={},C=new r.Parser({onopentag:function(t,s){var r;!c.cover&&(null===(r=s.class)||void 0===r?void 0:r.includes("ts-post-image"))?(c.name=s.title,c.cover=s["data-src"]||s.src||n.defaultCover):"genxed"===s.class||"sertogenre"===s.class?l=!0:l&&"a"===t?u=!0:"div"!==t||"entry-content"!==s.class&&"description"!==s.itemprop?"spe"===s.class||"serl"===s.class?p=!0:p&&"span"===t?v=!0:"div"===t&&"sertostat"===s.class?(p=!0,v=!0,m=!0):"eplister eplisterfull"===s.class?b=!0:b&&"li"===t?g=!0:g&&("a"===t?k.path=s.href.replace(e,"").trim():"epl-num"===s.class?w=1:"epl-title"===s.class?w=2:"epl-date"===s.class?w=3:"epl-price"===s.class&&(w=4)):h=!0},ontext:function(e){var t,s;if(l)u&&(c.genres+=e+", ");else if(h)c.summary+=e.trim();else if(p){if(v){var r=e.toLowerCase().replace(":","").trim();if(f)c.author+=e||"Unknown";else if(d)c.artist+=e||"Unknown";else if(m)switch(r){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":c.status=i.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":c.status=i.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":c.status=i.NovelStatus.OnHiatus;break;default:c.status=i.NovelStatus.Unknown}switch(r){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":f=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":m=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":d=!0}}}else if(b&&g)if(1===w)o(e,k);else if(2===w)k.name=(null===(s=null===(t=e.match(RegExp("^".concat(c.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===t?void 0:t[1])||void 0===s?void 0:s.trim())||e.trim(),k.chapterNumber||o(e,k);else if(3===w)k.releaseTime=e;else if(4===w){switch(r=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":y=!1;break;default:y=!0}}},onclosetag:function(e){var t,s,r;l?u?u=!1:(l=!1,c.genres=null===(t=c.genres)||void 0===t?void 0:t.slice(0,-2)):h?"br"===e?c.summary+="\n":"div"===e&&(h=!1):p?v?"span"===e&&(v=!1,f&&c.author?f=!1:d&&c.artist?d=!1:m&&""!==c.status&&(m=!1)):"div"===e&&(p=!1,c.author=null===(s=c.author)||void 0===s?void 0:s.trim(),c.artist=null===(r=c.artist)||void 0===r?void 0:r.trim()):b&&(g?1===w||2===w||3===w||4===w?w=0:"li"===e&&(g=!1,k.chapterNumber||(k.chapterNumber=0),y||N.push(k),k={}):"ul"===e&&(b=!1))}}),C.write(a),C.end(),N.length&&((null===(x=this.options)||void 0===x?void 0:x.reverseChapters)&&N.reverse(),c.chapters=N),[2,c]}}))}))},c.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,a,i,n,o;return t(this,(function(t){switch(t.label){case 0:return[4,this.safeFecth(this.site+r,!1)];case 1:if(e=t.sent(),null===(i=this.options)||void 0===i?void 0:i.customJs)try{a=(0,s.load)(e),e=a.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(o=null===(n=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===n?void 0:n[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===o?void 0:o.join("\n"))||""]}}))}))},c.prototype.searchNovels=function(s,r){return e(this,void 0,void 0,(function(){var e,a;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+r+"/?s="+s,[4,this.safeFecth(e,!0)];case 1:return a=t.sent(),[2,this.parseNovels(a)]}}))}))},c}())({id:"cpunovel",sourceSite:"https://cpunovel.com/",sourceName:"CPUnovel",options:{lang:"English",reverseChapters:!0}});exports.default=c;