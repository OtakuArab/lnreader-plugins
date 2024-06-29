var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/filterInputs"),n=require("@libs/defaultCover"),i=require("@libs/fetch"),o=require("@libs/novelStatus"),s=require("cheerio"),a=function(){function a(){this.id="RV",this.name="Ruvers",this.site="https://ruvers.ru/",this.version="1.0.0",this.icon="src/ru/ruvers/icon.png",this.popularNovels=this.fetchNovels,this.filters={sort:{label:"Сортировка",value:"-rating",options:[{label:"По названию",value:"name"},{label:"По дате добавления",value:"-created_at"},{label:"По рейтингу",value:"-rating"}],type:r.FilterTypes.Picker}}}return a.prototype.fetchNovels=function(r,o,s){return t(this,arguments,void 0,(function(t,r,o){var s,a,u,c,l=this,h=r.filters;return e(this,(function(e){switch(e.label){case 0:return s=this.site+"api/books?page="+t,s+="&sort="+((null===(c=null==h?void 0:h.sort)||void 0===c?void 0:c.value)||"-rating"),o&&(s+="&search="+o),[4,(0,i.fetchApi)(s).then((function(t){return t.json()}))];case 1:return a=e.sent().data,u=[],a.forEach((function(t){return u.push({name:t.name,cover:t.images[0]?l.site+t.images[0]:n.defaultCover,path:t.slug})})),[2,u]}}))}))},a.prototype.searchNovels=function(r,n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){return t={filters:{}},[2,this.fetchNovels(n,t,r)]}))}))},a.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,n,a,u,c,l;return e(this,(function(e){switch(e.label){case 0:return[4,(0,i.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:return t=e.sent(),n=(0,s.load)(t),a={path:r,name:n("div.name > h1").text().trim(),cover:n(".slider_prods_single > img").attr("src"),summary:n(".book_description").text().trim(),genres:n(".genres > a").map((function(t,e){var r;return null===(r=n(e).text())||void 0===r?void 0:r.trim()})).get().join(","),status:n(".status_row > div:nth-child(1) > a").text().includes("В работе")?o.NovelStatus.Ongoing:o.NovelStatus.Completed},u=n("comments-list").attr("commentable-id"),[4,(0,i.fetchApi)(this.site+"api/books/"+u+"/chapters/all").then((function(t){return t.json()}))];case 2:return(c=e.sent()).data.length&&(l=[],c.data.forEach((function(t,e){t.is_published&&(t.is_free||t.purchased_by_user)&&l.push({name:"Глава "+t.number+" "+(t.name||""),path:r+"/"+t.id,chapterNumber:e+1})})),a.chapters=l),[2,a]}}))}))},a.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,n,o;return e(this,(function(e){switch(e.label){case 0:return[4,(0,i.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:if(t=e.sent(),!(n=null===(o=t.match(/(mobile-books|books)-chapters-text-component.*:text='"(.*?)"'/s))||void 0===o?void 0:o[2]))throw new Error("No chapter found");return[2,(s=n,s.replace(/\\u([\d\w]{4})/gi,(function(t,e){return String.fromCharCode(parseInt(e,16))})))]}var s}))}))},a}();exports.default=new a;