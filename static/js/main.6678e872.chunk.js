(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s=n(0),u=n(14),l=n.n(u),d=(n(116),n(15)),p=n(98),f=n(13),j=(n(117),n(8)),h=n.n(j),v=n(26),b=n(12),m=n(19),O=n(199),x=n(200),g=n(202),y=n(203),w=n(204),C=n(205),S=n(196),T=n(79),k=n(210),P=n(201),I=n(37),E=n(45),D=n(59),F=n.n(D);!function(e){e.Inch="INCH",e.Meter="METER",e.Mile="MILE",e.Kilometer="KILOMETER"}(r||(r={})),function(e){e[e.Daily=0]="Daily",e[e.Hourly=1]="Hourly"}(a||(a={})),function(e){e.Pascal="PASCAL",e.NewtonPerSquareMeter="NEWTON_PER_SQUARE_METER",e.PoundsPerSquareInch="POUNDS_PER_SQUARE_INCH",e.Bar="BAR"}(i||(i={})),function(e){e.KilometersPerHour="KILOMETERS_PER_HOUR",e.MetersPerSecond="METERS_PER_SECOND",e.MilesPerHour="MILES_PER_HOUR"}(c||(c={})),function(e){e.Celsius="CELSIUS",e.Fahrenheit="FAHRENHEIT",e.Kelvin="KELVIN"}(o||(o={}));var H=n(60),L=n(95),N=n(100),M=n(101),R=function(e){Object(L.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(I.a)(this,n),(r=t.call(this,"Unexpected unit code: ".concat(e))).unitCode=e,Error.captureStackTrace&&Error.captureStackTrace(Object(H.a)(r),n),r.name="UnexpectedUnitCodeException",r}return n}(Object(M.a)(Error)),A=new(function(){function e(t){Object(I.a)(this,e),this.apiClient=t}return Object(E.a)(e,[{key:"getActiveAlertsRaw",value:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiClient.get("/alerts/active",{params:t});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getActiveAlerts",value:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getActiveAlertsRaw(t);case 2:return e.abrupt("return",e.sent.features.map((function(e){var t=e.properties,n=t.id,r=t.sent,a=t.effective,i=t.onset,c=t.expires,o=t.ends,s=t.status,u=t.messageType,l=t.severity,d=t.certainty,p=t.urgency,f=Object(v.a)(t,["id","sent","effective","onset","expires","ends","status","messageType","severity","certainty","urgency"]);return Object(b.a)({id:n,sent:U(r),effective:U(a),onset:U(i),expires:U(c),ends:U(o),status:s.toLowerCase(),messageType:u.toLowerCase(),severity:l.toLowerCase(),certainty:d.toLowerCase(),urgency:p.toLowerCase()},f)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPointInfoRaw",value:function(){var e=Object(m.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiClient.get("/points/".concat(t,",").concat(n));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPointInfo",value:function(){var e=Object(m.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPointInfoRaw(t,n);case 2:return r=e.sent,e.abrupt("return",{coordinates:[r.geometry.coordinates[0],r.geometry.coordinates[1]],gridId:r.properties.gridId,gridX:r.properties.gridX,gridY:r.properties.gridY,timeZone:r.properties.timeZone,radarStation:r.properties.timeZone,relativeLocation:{city:r.properties.relativeLocation.properties.city,state:r.properties.relativeLocation.properties.state}});case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRawForecast",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wfo,r=t.x,a=t.y,e.next=3,this.apiClient.get("/gridpoints/".concat(n,"/").concat(r,",").concat(a,"/forecast"));case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getForecast",value:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=G,e.next=3,this.getRawForecast(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRawHourlyForecast",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wfo,r=t.x,a=t.y,e.next=3,this.apiClient.get("/gridpoints/".concat(n,"/").concat(r,",").concat(a,"/forecast/hourly"));case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHourlyForecast",value:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=G,e.next=3,this.getRawHourlyForecast(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRawStations",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wfo,r=t.x,a=t.y,e.next=3,this.apiClient.get("/gridpoints/".concat(n,"/").concat(r,",").concat(a,"/stations"));case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getStations",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRawStations(t);case 2:return n=e.sent,r=n.features,e.abrupt("return",r.map((function(e){var t=e.properties;return{id:t.stationIdentifier,name:t.name,timeZone:t.timeZone}})));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRawStationObservations",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.stationId,r=Object(v.a)(t,["stationId"]),e.next=3,this.apiClient.get("/stations/".concat(n,"/observations"),{params:r});case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getStationObservations",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRawStationObservations(t);case 2:return n=e.sent,r=n.features,e.abrupt("return",r.map((function(e){var t,n=e.properties;return{station:n.station,timestamp:new Date(n.timestamp),description:n.textDescription,icon:n.icon,temperature:J(n.temperature),windDirection:null!==(t=n.windDirection.value)&&void 0!==t?t:void 0,windSpeed:_(n.windSpeed),windGust:_(n.windGust),barometricPressure:Z(n.barometricPressure),seaLevelPressure:Z(n.seaLevelPressure),visibility:B(n.visibility),maxTemperatureLast24Hours:J(n.maxTemperatureLast24Hours),minTemperatureLast24Hours:J(n.minTemperatureLast24Hours),precipitationLastHour:B(n.precipitationLastHour),precipitationLast3Hours:B(n.precipitationLast3Hours),precipitationLast6Hours:B(n.precipitationLast6Hours),relativeHumidity:W(n.relativeHumidity),windChill:J(n.windChill),heatIndex:J(n.heatIndex)}})));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(F.a.create({baseURL:"https://api.weather.gov",headers:{Accept:"application/geo+json"}}));function U(e){return null===e?null:new Date(e)}function K(e){return{name:e.name,startTime:new Date(e.startTime),endTime:new Date(e.endTime),isDayTime:e.isDaytime,temperature:J({value:e.temperature,unitCode:e.temperatureUnit}),icon:e.icon,shortForecast:e.shortForecast,detailedForecast:e.detailedForecast}}function G(e){var t=e.properties;return{updatedTime:new Date(t.updateTime),type:a.Daily,periods:t.periods.map(K)}}function B(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:in"===n)return{value:t,unit:r.Inch};if("unit:m"===n)return{value:t,unit:r.Meter};if("unit:km"===n)return{value:t,unit:r.Kilometer};throw new R(n)}}function W(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:percent"===n)return t;throw new R(n)}}function _(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:km_h-1"===n)return{value:t,unit:c.KilometersPerHour};throw new R(n)}}function J(e){var t=e.value,n=e.unitCode;if(null!==t){if("C"===n||"unit:degC"===n)return{value:t,unit:o.Celsius};if("F"===n)return{value:t,unit:o.Fahrenheit};if("K"===n)return{value:t,unit:o.Kelvin};throw new R(n)}}function Z(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:Pa"===n)return{value:t,unit:i.Pascal};throw new R(n)}}var Y={setItem:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getItem:function(e,t){var n=localStorage.getItem(e);return null===n?null:JSON.parse(n,t)}};function z(e,t){switch(t.type){case"updateForecast":return Object(b.a)(Object(b.a)({},e),t.payload)}}var X=n(99),q=n(179),Q=n(2);function V(e){var t=e.open,n=void 0!==t&&t,r=e.anchorEl,a=e.anchorOrigin,i=e.onClose,c=e.onRefreshClicked,o=e.onSettingsClicked;return Object(Q.jsxs)(X.a,{open:n,anchorEl:r,anchorOrigin:a,onClose:i,children:[Object(Q.jsx)(q.a,{onClick:c,children:"Refresh"}),Object(Q.jsx)(q.a,{onClick:o,children:"Settings"})]})}var $=n(180),ee=Object($.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},body:{display:"flex",flexDirection:"column",overflowY:"auto",flexGrow:1},main:{flexGrow:1},hourlyForecastPage:{display:"flex",flexDirection:"column",gap:e.spacing(1)},bottomNavigation:{borderTop:"1px solid",borderColor:e.palette.divider,minHeight:"56px"}}})),te=n(52),ne=n(181);function re(e){var t=e.skeletonProps,n=e.className,r=Object(v.a)(e,["skeletonProps","className"]),a=Object(s.useRef)(null),i=Object(s.useState)(!1),c=Object(d.a)(i,2),o=c[0],u=c[1];return Object(s.useLayoutEffect)((function(){null!==a.current&&(a.current.complete?u(!0):(a.current.onload=function(){return u(!0)},a.current.onerror=function(){return u(!0)}))}),[]),Object(Q.jsxs)(Q.Fragment,{children:[!o&&Object(Q.jsx)(ne.a,Object(b.a)({className:n,variant:"rect"},t)),Object(Q.jsx)("img",Object(b.a)({ref:a,className:n,style:{display:o?void 0:"none"}},r))]})}var ae,ie=Object($.a)((function(e){return{root:{display:"grid",alignItems:"center",gridTemplateColumns:"repeat(4, auto)",gap:e.spacing(1)},temperature:{fontWeight:"bold"}}}));function ce(e){var t=e.value;switch(e.unit){case o.Celsius:return"".concat(t,"\u2103");case o.Fahrenheit:return"".concat(t,"\u2109");case o.Kelvin:return"".concat(t,"\u212a");default:return"".concat(t)}}function oe(e,t){var n=function(e){var t=e.value,n=e.unit;switch(n){case o.Celsius:return{value:t+273.15,unit:o.Kelvin};case o.Fahrenheit:return{value:5*(t-32)/9+273.15,unit:o.Kelvin};case o.Kelvin:return{value:t,unit:n}}}(e).value;switch(t){case o.Celsius:return{value:n-273.15,unit:t};case o.Fahrenheit:return{value:9*(n-273.15)/5+32,unit:t};case o.Kelvin:return{value:n,unit:t}}}function se(e){var t=e.forecast,n=ie();return Object(Q.jsx)("div",{className:n.root,children:t.map((function(e){var t=e.startTime,r=e.icon,a=e.shortForecast,i=e.temperature;return Object(Q.jsxs)(s.Fragment,{children:[Object(Q.jsx)(te.a,{className:n.temperature,children:t.toLocaleTimeString(void 0,{hour:"numeric"})}),Object(Q.jsx)(re,{src:r,alt:"",height:ae.Small,width:ae.Small,skeletonProps:{height:ae.Small,width:ae.Small}}),Object(Q.jsx)(te.a,{children:a}),Object(Q.jsx)(te.a,{children:ce(i)})]},t.toISOString())}))})}!function(e){e[e.Small=56]="Small",e[e.Medium=86]="Medium",e[e.large=134]="large"}(ae||(ae={}));var ue=n(182),le=n(183),de=n(208);function pe(e){var t=e.value;switch(e.unit){case c.KilometersPerHour:return"".concat(t," km/h");case c.MetersPerSecond:return"".concat(t," m/s");case c.MilesPerHour:return"".concat(t," mph");default:return"".concat(t)}}function fe(e,t){var n=function(e){var t=e.value,n=e.unit;switch(n){case c.KilometersPerHour:return{value:t/3.6,unit:c.MetersPerSecond};case c.MetersPerSecond:return{value:t,unit:n};case c.MilesPerHour:return{value:t/2.237,unit:c.MetersPerSecond}}}(e).value;switch(t){case c.KilometersPerHour:return{value:3.6*n,unit:t};case c.MetersPerSecond:return{value:n,unit:t};case c.MilesPerHour:return{value:2.237*n,unit:t}}}var je=Object($.a)({icon:{alignSelf:"flex-start"}});function he(e){var t=e.icon,n=e.shortForecast,r=e.temperature,a=e.windSpeed,i=e.relativeHumidity,c=e.updateTime,o=e.station,s=je();return Object(Q.jsx)(ue.a,{children:Object(Q.jsxs)(le.a,{children:[Object(Q.jsx)(te.a,{variant:"h5",children:n}),Object(Q.jsxs)(de.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(Q.jsx)(re,{className:s.icon,alt:"",src:t,height:ae.Medium,width:ae.Medium,skeletonProps:{height:ae.Medium,width:ae.Medium}}),Object(Q.jsxs)(de.a,{display:"flex",flexDirection:"column",alignItems:"flex-end",children:[Object(Q.jsx)(te.a,{variant:"h3",children:ce(r)}),void 0!==i&&Object(Q.jsx)(te.a,{children:"Humidity: ".concat(Math.round(i),"%")}),void 0!==a&&Object(Q.jsx)(te.a,{children:"Wind: ".concat(pe(a))}),c&&Object(Q.jsx)(de.a,{display:"flex",justifyContent:"flex-end",children:Object(Q.jsx)(te.a,{variant:"caption",children:c.toLocaleString()})}),c&&Object(Q.jsx)(de.a,{display:"flex",justifyContent:"flex-end",children:Object(Q.jsx)(te.a,{variant:"caption",children:o})})]})]})]})})}function ve(e){var t=e.currentWeather,n=e.hourlyForecast,r=e.updateTime,a=e.station,i=e.className;return Object(Q.jsxs)("div",{className:i,children:[Object(Q.jsx)(he,{icon:t.icon,shortForecast:t.shortForecast,temperature:t.temperature,windSpeed:t.windSpeed,relativeHumidity:t.relativeHumidity,updateTime:r,station:a}),Object(Q.jsx)(se,{forecast:n})]})}var be=n(57),me={speedUnit:c.MilesPerHour,temperatureUnit:o.Fahrenheit},Oe=Object(s.createContext)(me),xe=Object($.a)((function(e){return{root:{display:"flex",flexDirection:"column",gap:e.spacing(2)},forecastTile:{display:"grid",gridTemplateAreas:'\n    "forecastTileTitle forecastTileTitle forecastTileTitle"\n    "forecastTileIcon forecastTileDescription forecastTileTemperature"\n    ',alignItems:"center",columnGap:e.spacing(1)},forecastTileTitle:{gridArea:"forecastTileTitle",justifySelf:"start"},forecastTileIcon:{gridArea:"forecastTileIcon"},forecastTileDescription:{gridArea:"forecastTileDescription"},forecastTileTemperature:{gridArea:"forecastTileTemperature",justifySelf:"end"}}}));function ge(e){var t=e.forecast,n=xe();return Object(Q.jsx)("div",{className:n.root,children:t.map((function(e){return Object(Q.jsxs)("div",{className:n.forecastTile,children:[Object(Q.jsx)(te.a,{className:n.forecastTileTitle,variant:"h6",children:e.name}),Object(Q.jsx)(re,{className:n.forecastTileIcon,src:e.icon,alt:"",height:ae.Medium,width:ae.Medium,skeletonProps:{height:ae.Medium,width:ae.Medium}}),Object(Q.jsx)(te.a,{className:n.forecastTileDescription,children:e.shortForecast}),Object(Q.jsx)(te.a,{variant:"h6",className:n.forecastTileTemperature,children:ce(e.temperature)})]},e.startTime.toISOString())}))})}var ye=n(186),we=n(187),Ce=n(145),Se=n(188),Te=n(189),ke=n(190),Pe=n(191),Ie=n(207),Ee=n(185),De=n(209);var Fe=new(function(){function e(t){Object(I.a)(this,e),this.apiClient=t}return Object(E.a)(e,[{key:"suggest",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiClient.get("/suggest",{params:t});case 2:return n=e.sent,r=n.data.suggestions,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findAddressCandidates",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiClient.get("/findAddressCandidates",{params:t});case 2:return n=e.sent,r=n.data.candidates,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(F.a.create({baseURL:"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",paramsSerializer:function(e){return new URLSearchParams(e).toString()}}));function He(e){var t=e.suggestParams,n=e.startAdornment,r=e.autocompleteProps,a=e.autoFocus,i=e.placeholder,c=e.onSelectionChange,o=Object(s.useState)(null),u=Object(d.a)(o,2),l=u[0],p=u[1],f=Object(s.useState)(""),j=Object(d.a)(f,2),h=j[0],v=j[1],m=Object(s.useState)([]),O=Object(d.a)(m,2),x=O[0],g=O[1],y=function(e,t){var n=Object(s.useState)(e),r=Object(d.a)(n,2),a=r[0],i=r[1],c=Object(s.useRef)(Date.now());return Object(s.useEffect)((function(){var n=setTimeout((function(){i(e),c.current=Date.now()}),t-(Date.now()-c.current));return function(){return clearTimeout(n)}}),[e,t]),a}(h,100),w=Object(s.useRef)("");return Object(s.useEffect)((function(){y.length>0&&"input"===w.current?Fe.suggest(Object(b.a)({text:y,f:"json"},t)).then((function(e){return g(e)})):g([])}),[y,t]),Object(Q.jsx)(De.a,Object(b.a)({options:x,getOptionLabel:function(e){return e.text},getOptionSelected:function(e,t){return e.isCollection===t.isCollection&&e.magicKey===t.magicKey&&e.text===t.text},inputValue:h,onInputChange:function(e,t,n){w.current=n,v(t)},value:l,onChange:function(e,t){p(t),Fe.findAddressCandidates({f:"json",SingeLine:null===t||void 0===t?void 0:t.text,magicKey:null===t||void 0===t?void 0:t.magicKey,maxLocations:1,outFields:["City","RegionAbbr"]}).then((function(e){return null===c||void 0===c?void 0:c(e[0])}))},renderInput:function(e){return Object(Q.jsx)(Ie.a,Object(b.a)(Object(b.a)({},e),{},{InputProps:Object(b.a)(Object(b.a)({},e.InputProps),{},{startAdornment:n?Object(Q.jsx)(Ee.a,{position:"start",children:n}):void 0}),autoFocus:a,placeholder:i}))}},r))}var Le={getCurrentPosition:function(){return new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}))}},Ne=Object($.a)((function(e){return{searchContainer:{backgroundColor:e.palette.background.paper,width:"100%",padding:"".concat(e.spacing(.5),"px ").concat(e.spacing(1),"px"),display:"flex",alignItems:"center",gap:e.spacing(1),borderRadius:e.shape.borderRadius,flexGrow:1},searchOrLocateContainer:{width:"100%",display:"flex",alignItems:"center",gap:e.spacing(1)},searchExitButton:{padding:0},spacer:{flexGrow:1}}}));function Me(e){var t=e.location,n=e.onShowMenu,r=e.onLocationChange,a=Ne(),i=Object(s.useState)(!1),c=Object(d.a)(i,2),o=c[0],u=c[1];return Object(Q.jsx)(ye.a,{position:"sticky",children:Object(Q.jsx)(we.a,{children:o?Object(Q.jsxs)("div",{className:a.searchOrLocateContainer,children:[Object(Q.jsx)("div",{className:a.searchContainer,children:Object(Q.jsx)(He,{autoFocus:!0,placeholder:"Search location",autocompleteProps:{autoHighlight:!0,fullWidth:!0},startAdornment:Object(Q.jsx)(Ce.a,{className:a.searchExitButton,onClick:function(){return u(!1)},children:Object(Q.jsx)(ke.a,{})}),suggestParams:{category:["Postal","Populated Place"],countryCode:"USA"},onSelectionChange:function(e){var t=e.location,n=t.x,a=t.y;u(!1),null===r||void 0===r||r(a,n)}})}),Object(Q.jsx)(Ce.a,{color:"inherit",className:a.searchExitButton,onClick:function(){u(!1),r&&Le.getCurrentPosition().then((function(e){var t=e.coords;r(t.latitude,t.longitude)}))},children:Object(Q.jsx)(Pe.a,{})})]}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(te.a,{variant:"h6",children:null!==t&&void 0!==t?t:"Unknown"}),Object(Q.jsx)(Ce.a,{color:"inherit",onClick:function(){return u(!0)},children:Object(Q.jsx)(Se.a,{})}),Object(Q.jsx)(de.a,{className:a.spacer}),Object(Q.jsx)(Ce.a,{color:"inherit",edge:"end",onClick:n,children:Object(Q.jsx)(Te.a,{})})]})})})}var Re=n(211),Ae=n(192),Ue=n(194),Ke=n(193),Ge=n(195),Be=n(197),We=n(198),_e=Object($.a)((function(e){return{alertSummary:{display:"flex",alignItems:"center",columnGap:e.spacing(1)},alertDetails:{display:"flex",flexDirection:"column",rowGap:e.spacing(2),textAlign:"start"},preformattedElement:{whiteSpace:"pre-wrap"}}})),Je=Object($.a)((function(e){return{alertInfoGridHeadingCell:{justifySelf:"end",fontWeight:e.typography.fontWeightBold},alertInfoGridDataCell:{justifySelf:"start"}}}));function Ze(e){var t=e.heading,n=e.data,r=Je();return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{className:r.alertInfoGridHeadingCell,children:t}),Object(Q.jsx)("div",{className:r.alertInfoGridDataCell,children:n})]})}var Ye=Object($.a)((function(e){return{alertInfoGrid:{display:"grid",columnGap:e.spacing(1),gridTemplateColumns:"auto 1fr"}}}));function ze(e){var t=e.alert,n=Ye(),r=[["Effective",new Date(t.effective).toLocaleString()],["Expires",new Date(t.expires).toLocaleString()],["Status",t.status],["Message type",t.messageType],["Category",t.category],["Severity",t.severity],["Urgency",t.urgency],["Sender",t.senderName]];return Object(Q.jsx)("div",{className:n.alertInfoGrid,children:r.map((function(e){return Object(Q.jsx)(Ze,{heading:e[0],data:e[1]},e[0])}))})}function Xe(e){var t=e.alert,n=_e();return Object(Q.jsxs)(Re.a,{children:[Object(Q.jsx)(Ae.a,{expandIcon:Object(Q.jsx)(Ke.a,{}),children:Object(Q.jsxs)("div",{className:n.alertSummary,children:[qe(t.severity),Object(Q.jsx)("div",{children:t.event})]})}),Object(Q.jsx)(Ue.a,{children:Object(Q.jsxs)("div",{className:n.alertDetails,children:[Object(Q.jsx)(te.a,{variant:"h6",children:t.headline}),Object(Q.jsx)(te.a,{className:n.preformattedElement,children:t.description}),Object(Q.jsx)(te.a,{className:n.preformattedElement,children:t.instruction}),Object(Q.jsx)(ze,{alert:t})]})})]})}function qe(e){switch(e){case"extreme":case"severe":return Object(Q.jsx)(Ge.a,{});case"moderate":return Object(Q.jsx)(S.a,{});case"minor":return Object(Q.jsx)(Be.a,{});default:return Object(Q.jsx)(We.a,{})}}function Qe(e){var t=e.alerts;return Object(Q.jsx)(Q.Fragment,{children:t.map((function(e){return Object(Q.jsx)(Xe,{alert:e},e.id)}))})}function Ve(){var e;return null!==(e=Y.getItem("cachedForecast",(function(e,t){var n=e.toLocaleUpperCase();return n.includes("TIME")||n.includes("DATE")?new Date(t):t})))&&void 0!==e?e:{location:null,city:null,state:null,forecast:null,hourlyForecast:null,stationId:null,observations:null}}function $e(){return($e=Object(m.a)(h.a.mark((function e(t){var n,r,a,i,c,o,s,u,l,d,p,f,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.getPointInfo(t.latitude,t.longitude);case 3:return n=e.sent,r=n.relativeLocation,a=r.city,i=r.state,c=n.gridId,o=n.gridX,s=n.gridY,e.next=12,A.getForecast({wfo:c,x:o,y:s});case 12:return u=e.sent,e.next=15,A.getHourlyForecast({wfo:c,x:o,y:s});case 15:return l=e.sent,e.next=18,A.getStations({wfo:c,x:o,y:s});case 18:return d=e.sent,p=d[0].id,e.next=22,A.getStationObservations({stationId:p,limit:1});case 22:return f=e.sent,e.next=25,A.getActiveAlerts({point:"".concat(t.latitude,",").concat(t.longitude)});case 25:return j=e.sent,e.abrupt("return",{location:t,city:a,state:i,forecast:u,hourlyForecast:l,stationId:p,observations:f,alerts:j});case 29:return e.prev=29,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 32:case"end":return e.stop()}}),e,null,[[0,29]])})))).apply(this,arguments)}function et(){var e,t,n,r,a,i,u=ee(),l=Object(f.f)(),p=Object(s.useContext)(Oe),j=p.speedUnit,h=p.temperatureUnit,m=function(){var e=Object(s.useState)(window.navigator.onLine),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){function e(){r(!1)}function t(){r(!0)}return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),n}(),I=Object(s.useState)(!1),E=Object(d.a)(I,2),D=E[0],F=E[1],H=Object(s.useReducer)(z,void 0,Ve),L=Object(d.a)(H,2),N=L[0],M=L[1],R=N.location,A=N.city,U=N.state,K=N.forecast,G=N.hourlyForecast,B=N.observations,W=N.stationId,_=N.alerts,J=null!==(e=null===B||void 0===B?void 0:B[0])&&void 0!==e?e:null,Z=Object(s.useCallback)((function(e){F(!0),function(e){return $e.apply(this,arguments)}(e).then((function(e){return M({type:"updateForecast",payload:e})})).finally((function(){return F(!1)}))}),[]);Object(s.useEffect)((function(){R&&m&&Z(R)}),[m,R,Z]),a="cachedForecast",i=N,Object(s.useEffect)((function(){Y.setItem(a,i)}),[a,i]);var X=Object(s.useCallback)((function(e){return function(e){var t=e.value,n=Object(v.a)(e,["value"]);return Object(b.a)({value:Math.round(t)},n)}(oe(e,h))}),[h]),q=Object(s.useCallback)((function(e){return Object(b.a)(Object(b.a)({},e),{},{periods:e.periods.map((function(e){var t=e.temperature,n=Object(v.a)(e,["temperature"]);return Object(b.a)({temperature:X(t)},n)}))})}),[X]),$=Object(s.useMemo)((function(){return null!==K?q(K):null}),[K,q]),te=Object(s.useMemo)((function(){return null!==G?q(G):null}),[G,q]),ne=new Date,re=new Date(ne);re.setDate(re.getDate()+1),re.setHours(0,0,0,0);var ae,ie=null===te||void 0===te?void 0:te.periods.filter((function(e){var t=e.endTime,n=e.startTime;return new Date(t)>ne&&new Date(n)<re})).map((function(e){var t=e.temperature,n=Object(v.a)(e,["temperature"]);return Object(b.a)({temperature:X(t)},n)})),ce=Object(s.useState)(null),se=Object(d.a)(ce,2),ue=se[0],le=se[1],de=Object(s.useState)("hourly"),pe=Object(d.a)(de,2),je=pe[0],he=pe[1],me=(null!==_&&void 0!==_?_:[]).filter((function(e){return e.expires>ne}));return Object(Q.jsx)("div",{className:u.root,children:Object(Q.jsxs)(T.a,{value:je,children:[Object(Q.jsx)(Me,{location:A||U?"".concat(null!==A&&void 0!==A?A:"Unknown",", ").concat(null!==U&&void 0!==U?U:"Unknown"):void 0,onShowMenu:function(e){return le(e.currentTarget)},onLocationChange:function(e,t){M({type:"updateForecast",payload:{location:{latitude:e,longitude:t}}})}}),Object(Q.jsx)(V,{anchorEl:ue,open:Boolean(ue),onClose:function(){return le(null)},onRefreshClicked:function(){le(null),R&&m&&Z(R)},onSettingsClicked:function(){le(null),l.push(be.SETTINGS)}}),D&&Object(Q.jsx)(O.a,{color:"secondary"}),Object(Q.jsxs)("div",{className:u.body,children:["alerts"!==je&&me.length>0&&Object(Q.jsx)(k.a,{severity:"error",children:Object(Q.jsx)(x.a,{href:"#",color:"inherit",onClick:function(){return he("alerts")},children:"Active alerts"})}),Object(Q.jsxs)("main",{className:u.main,children:[Object(Q.jsx)(P.a,{value:"hourly",children:J&&(null===ie||void 0===ie?void 0:ie.length)&&Object(Q.jsx)(ve,{className:u.hourlyForecastPage,updateTime:new Date(J.timestamp),station:null!==W&&void 0!==W?W:"",currentWeather:{icon:J.icon,shortForecast:J.description,temperature:X({value:null!==(t=null===(n=J.temperature)||void 0===n?void 0:n.value)&&void 0!==t?t:0,unit:o.Celsius}),windSpeed:void 0!==(null===J||void 0===J?void 0:J.windSpeed)?(ae={value:J.windSpeed.value,unit:c.KilometersPerHour},function(e){var t=e.value,n=Object(v.a)(e,["value"]);return Object(b.a)({value:Math.round(t)},n)}(fe(ae,j))):void 0,relativeHumidity:J.relativeHumidity},hourlyForecast:ie})}),Object(Q.jsx)(P.a,{value:"daily",children:Object(Q.jsx)(ge,{forecast:null!==(r=null===$||void 0===$?void 0:$.periods)&&void 0!==r?r:[]})}),Object(Q.jsx)(P.a,{value:"alerts",children:Object(Q.jsx)(Qe,{alerts:me})})]})]}),Object(Q.jsxs)(g.a,{value:je,onChange:function(e,t){return he(t)},showLabels:!0,className:u.bottomNavigation,children:[Object(Q.jsx)(y.a,{icon:Object(Q.jsx)(w.a,{}),label:"Hourly",value:"hourly"}),Object(Q.jsx)(y.a,{icon:Object(Q.jsx)(C.a,{}),label:"Daily",value:"daily"}),Object(Q.jsx)(y.a,{icon:Object(Q.jsx)(S.a,{}),label:"Alerts",value:"alerts"})]})]})})}var tt=n(178),nt=n(184),rt=n(144),at=n(206);function it(e){var t=e.open,n=void 0!==t&&t,r=e.anchorEl,a=e.anchorOrigin,i=e.children,c=e.onClose;return Object(Q.jsx)(X.a,{open:n,anchorEl:r,anchorOrigin:a,onClose:c,children:i})}var ct=Object(s.createContext)((function(){}));function ot(e){switch(e){case c.KilometersPerHour:return"Kilometers per hour";case c.MetersPerSecond:return"Meters per second";case c.MilesPerHour:return"Miles per hour"}}function st(e){switch(e){case o.Celsius:return"Celsius";case o.Fahrenheit:return"Fahrenheit";case o.Kelvin:return"Kelvin"}}var ut=Object($.a)((function(e){return{listSubHeader:{color:e.palette.primary.main,fontSize:e.typography.body1.fontSize,fontWeight:e.typography.body1.fontWeight,textAlign:"start"}}})),lt=Object.keys(c).map((function(e){return c[e]})),dt=Object.keys(o).map((function(e){return o[e]}));function pt(){var e=ut(),t=Object(f.f)(),n=Object(s.useContext)(ct),r=Object(s.useState)(null),a=Object(d.a)(r,2),i=a[0],c=a[1],o=Object(s.useState)(null),u=Object(d.a)(o,2),l=u[0],p=u[1],j=Object(s.useContext)(Oe),h=j.speedUnit,v=j.temperatureUnit;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ye.a,{position:"sticky",children:Object(Q.jsxs)(we.a,{children:[Object(Q.jsx)(Ce.a,{edge:"start",color:"inherit",onClick:function(){return t.goBack()},children:Object(Q.jsx)(ke.a,{})}),Object(Q.jsx)(te.a,{variant:"h6",children:"Settings"})]})}),Object(Q.jsx)(it,{anchorEl:i,open:Boolean(i),onClose:function(){return c(null)},children:lt.map((function(e){return Object(Q.jsx)(q.a,{onClick:function(){n({speedUnit:e}),c(null)},children:ot(e)},e)}))}),Object(Q.jsx)(it,{anchorEl:l,open:Boolean(l),onClose:function(){return p(null)},children:dt.map((function(e){return Object(Q.jsx)(q.a,{onClick:function(){n({temperatureUnit:e}),p(null)},children:st(e)},e)}))}),Object(Q.jsxs)(tt.a,{children:[Object(Q.jsx)(nt.a,{inset:!0,className:e.listSubHeader,children:"Units"}),Object(Q.jsx)(rt.a,{button:!0,onClick:function(e){var t,n;return c(null!==(t=null===(n=e.currentTarget.firstElementChild)||void 0===n?void 0:n.firstElementChild)&&void 0!==t?t:null)},children:Object(Q.jsx)(at.a,{inset:!0,primary:"Speed unit",secondary:ot(h)})}),Object(Q.jsx)(rt.a,{button:!0,onClick:function(e){var t,n;return p(null!==(t=null===(n=e.currentTarget.firstElementChild)||void 0===n?void 0:n.firstElementChild)&&void 0!==t?t:null)},children:Object(Q.jsx)(at.a,{inset:!0,primary:"Temperature unit",secondary:st(v)})})]})]})}function ft(e,t){var n=t.type,r=t.update;switch(n){case"update":return Object(b.a)(Object(b.a)({},e),r)}}function jt(e){return"userPreferences::".concat(e)}var ht=new(function(){function e(){Object(I.a)(this,e)}return Object(E.a)(e,[{key:"save",value:function(e,t){Y.setItem(jt(e),t)}},{key:"load",value:function(e){var t;return null!==(t=Y.getItem(jt(e)))&&void 0!==t?t:null}},{key:"loadOrDefault",value:function(e,t){var n;return null!==(n=Y.getItem(jt(e)))&&void 0!==n?n:t}},{key:"loadAllOrDefault",value:function(){return{speedUnit:this.loadOrDefault("speedUnit",me.speedUnit),temperatureUnit:this.loadOrDefault("temperatureUnit",me.temperatureUnit)}}}]),e}());function vt(){var e=Object(s.useReducer)(ft,ht.loadAllOrDefault()),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(Q.jsx)(Oe.Provider,{value:n,children:Object(Q.jsx)(ct.Provider,{value:function(e){Object.keys(e).forEach((function(t){ht.save(t,e[t])})),r({type:"update",update:e})},children:Object(Q.jsx)("div",{className:"App",children:Object(Q.jsx)(p.a,{children:Object(Q.jsxs)(f.c,{children:[Object(Q.jsx)(f.a,{path:be.DASHBOARD,exact:!0,children:Object(Q.jsx)(et,{})}),Object(Q.jsx)(f.a,{path:be.SETTINGS,children:Object(Q.jsx)(pt,{})})]})})})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,214)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};l.a.render(Object(Q.jsx)(s.StrictMode,{children:Object(Q.jsx)(vt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),bt()},57:function(e){e.exports=JSON.parse('{"DASHBOARD":"/","SETTINGS":"/settings"}')}},[[142,1,2]]]);
//# sourceMappingURL=main.6678e872.chunk.js.map