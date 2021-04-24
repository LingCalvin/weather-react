(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(8),i=n.n(a),c=(n(93),n(16)),o=n(75),s=n(7),u=(n(94),n(9)),l=n.n(u),d=n(27),p=n(14),f=n(21),v=n(152),j=n(153),h=n(54),m=n(154),b=n(167),O=n(157),x=n(159),g=n(160),y=n(155),w=n(156),S=n(161),C=n(162),T=n(58),k=n(158);var P,E,I,H,F,D={getCurrentPosition:function(){return new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)}))}},L=n(32),N=n(47),M=n(69),R=n.n(M);!function(e){e.Inch="INCH",e.Meter="METER",e.Mile="MILE",e.Kilometer="KILOMETER"}(P||(P={})),function(e){e[e.Daily=0]="Daily",e[e.Hourly=1]="Hourly"}(E||(E={})),function(e){e.Pascal="PASCAL",e.NewtonPerSquareMeter="NEWTON_PER_SQUARE_METER",e.PoundsPerSquareInch="POUNDS_PER_SQUARE_INCH",e.Bar="BAR"}(I||(I={})),function(e){e.KilometersPerHour="KILOMETERS_PER_HOUR",e.MetersPerSecond="METERS_PER_SECOND",e.MilesPerHour="MILES_PER_HOUR"}(H||(H={})),function(e){e.Celsius="CELSIUS",e.Fahrenheit="FAHRENHEIT",e.Kelvin="KELVIN"}(F||(F={}));var U=n(48),K=n(70),A=n(76),_=n(77),B=function(e){Object(K.a)(n,e);var t=Object(A.a)(n);function n(e){var r;return Object(L.a)(this,n),(r=t.call(this,"Unexpected unit code: ".concat(e))).unitCode=e,Error.captureStackTrace&&Error.captureStackTrace(Object(U.a)(r),n),r.name="UnexpectedUnitCodeException",r}return n}(Object(_.a)(Error)),W=new(function(){function e(t){Object(L.a)(this,e),this.apiClient=t}return Object(N.a)(e,[{key:"getPointInfoRaw",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apiClient.get("/points/".concat(t,",").concat(n));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPointInfo",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPointInfoRaw(t,n);case 2:return r=e.sent,e.abrupt("return",{coordinates:[r.geometry.coordinates[0],r.geometry.coordinates[1]],gridId:r.properties.gridId,gridX:r.properties.gridX,gridY:r.properties.gridY,timeZone:r.properties.timeZone,radarStation:r.properties.timeZone,relativeLocation:{city:r.properties.relativeLocation.properties.city,state:r.properties.relativeLocation.properties.state}});case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRawForecast",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wfo,r=t.x,a=t.y,e.next=3,this.apiClient.get("/gridpoints/".concat(n,"/").concat(r,",").concat(a,"/forecast"));case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getForecast",value:function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=J,e.next=3,this.getRawForecast(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRawHourlyForecast",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wfo,r=t.x,a=t.y,e.next=3,this.apiClient.get("/gridpoints/".concat(n,"/").concat(r,",").concat(a,"/forecast/hourly"));case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHourlyForecast",value:function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=J,e.next=3,this.getRawHourlyForecast(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRawStations",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.wfo,r=t.x,a=t.y,e.next=3,this.apiClient.get("/gridpoints/".concat(n,"/").concat(r,",").concat(a,"/stations"));case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getStations",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRawStations(t);case 2:return n=e.sent,r=n.features,e.abrupt("return",r.map((function(e){var t=e.properties;return{id:t.stationIdentifier,name:t.name,timeZone:t.timeZone}})));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRawStationObservations",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.stationId,r=Object(d.a)(t,["stationId"]),e.next=3,this.apiClient.get("/stations/".concat(n,"/observations"),{params:r});case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getStationObservations",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRawStationObservations(t);case 2:return n=e.sent,r=n.features,e.abrupt("return",r.map((function(e){var t,n=e.properties;return{station:n.station,timestamp:new Date(n.timestamp),description:n.textDescription,icon:n.icon,temperature:q(n.temperature),windDirection:null!==(t=n.windDirection.value)&&void 0!==t?t:void 0,windSpeed:Y(n.windSpeed),windGust:Y(n.windGust),barometricPressure:z(n.barometricPressure),seaLevelPressure:z(n.seaLevelPressure),visibility:Z(n.visibility),maxTemperatureLast24Hours:q(n.maxTemperatureLast24Hours),minTemperatureLast24Hours:q(n.minTemperatureLast24Hours),precipitationLastHour:Z(n.precipitationLastHour),precipitationLast3Hours:Z(n.precipitationLast3Hours),precipitationLast6Hours:Z(n.precipitationLast6Hours),relativeHumidity:X(n.relativeHumidity),windChill:q(n.windChill),heatIndex:q(n.heatIndex)}})));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(R.a.create({baseURL:"https://api.weather.gov",headers:{Accept:"application/geo+json"}}));function G(e){return{name:e.name,startTime:new Date(e.startTime),endTime:new Date(e.endTime),isDayTime:e.isDaytime,temperature:q({value:e.temperature,unitCode:e.temperatureUnit}),icon:e.icon,shortForecast:e.shortForecast,detailedForecast:e.detailedForecast}}function J(e){var t=e.properties;return{updatedTime:new Date(t.updateTime),type:E.Daily,periods:t.periods.map(G)}}function Z(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:in"===n)return{value:t,unit:P.Inch};if("unit:m"===n)return{value:t,unit:P.Meter};if("unit:km"===n)return{value:t,unit:P.Kilometer};throw new B(n)}}function X(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:percent"===n)return t;throw new B(n)}}function Y(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:km_h-1"===n)return{value:t,unit:H.KilometersPerHour};throw new B(n)}}function q(e){var t=e.value,n=e.unitCode;if(null!==t){if("C"===n||"unit:degC"===n)return{value:t,unit:F.Celsius};if("F"===n)return{value:t,unit:F.Fahrenheit};if("K"===n)return{value:t,unit:F.Kelvin};throw new B(n)}}function z(e){var t=e.value,n=e.unitCode;if(null!==t){if("unit:Pa"===n)return{value:t,unit:I.Pascal};throw new B(n)}}var Q={setItem:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getItem:function(e,t){var n=localStorage.getItem(e);return null===n?null:JSON.parse(n,t)}};function V(e,t){switch(t.type){case"updateForecast":return Object(p.a)(Object(p.a)({},e),t.payload)}}var $=n(166),ee=n(146),te=n(2);function ne(e){var t=e.open,n=void 0!==t&&t,r=e.anchorEl,a=e.anchorOrigin,i=e.onClose,c=e.onRefreshClicked,o=e.onSettingsClicked;return Object(te.jsxs)($.a,{open:n,anchorEl:r,anchorOrigin:a,onClose:i,children:[Object(te.jsx)(ee.a,{onClick:c,children:"Refresh"}),Object(te.jsx)(ee.a,{onClick:o,children:"Settings"})]})}var re,ae=n(147),ie=Object(ae.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},spacer:{flexGrow:1},main:{overflowY:"auto",flexGrow:1},hourlyForecastPage:{display:"flex",flexDirection:"column",gap:e.spacing(1)},bottomNavigation:{borderTop:"1px solid",borderColor:e.palette.divider,minHeight:"56px"}}})),ce=n(149),oe=n(150),se=n(151),ue=n(148);function le(e){var t=e.src,n=e.alt,a=e.skeletonProps,i=e.className,o=Object(r.useState)(!1),s=Object(c.a)(o,2),u=s[0],l=s[1];return Object(te.jsxs)(te.Fragment,{children:[!u&&Object(te.jsx)(ue.a,Object(p.a)({className:i,variant:"rect"},a)),Object(te.jsx)("img",{className:i,style:{display:u?void 0:"none"},src:t,alt:n,onLoad:function(){return l(!0)}})]})}function de(e){var t=e.value;switch(e.unit){case F.Celsius:return"".concat(t,"\u2103");case F.Fahrenheit:return"".concat(t,"\u2109");case F.Kelvin:return"".concat(t,"\u212a");default:return"".concat(t)}}function pe(e,t){var n=function(e){var t=e.value,n=e.unit;switch(n){case F.Celsius:return{value:t+273.15,unit:F.Kelvin};case F.Fahrenheit:return{value:5*(t-32)/9+273.15,unit:F.Kelvin};case F.Kelvin:return{value:t,unit:n}}}(e).value;switch(t){case F.Celsius:return{value:n-273.15,unit:t};case F.Fahrenheit:return{value:9*(n-273.15)/5+32,unit:t};case F.Kelvin:return{value:n,unit:t}}}!function(e){e[e.Small=56]="Small",e[e.Medium=86]="Medium",e[e.large=134]="large"}(re||(re={}));var fe=Object(ae.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",gap:e.spacing(1)}}}));function ve(e){var t=e.temperature,n=e.time,r=e.icon,a=fe();return Object(te.jsxs)("div",{className:a.root,children:[Object(te.jsx)(h.a,{children:n.toLocaleTimeString()}),Object(te.jsx)(le,{src:r,alt:"",skeletonProps:{height:re.Small,width:re.Small}}),Object(te.jsx)(h.a,{variant:"h6",children:de(t)})]})}var je=Object(ae.a)((function(e){var t=e.spacing(2);return{gridList:{display:"grid",gridAutoFlow:"column",justifyItems:"center",gap:t},gridListContainer:{display:"flex",overflowX:"auto",paddingLeft:0,paddingRight:0},spacer:{display:"inline-block",minWidth:t}}}));function he(e){var t=e.periods,n=je();return Object(te.jsx)(ce.a,{children:Object(te.jsxs)(oe.a,{className:n.gridListContainer,children:[Object(te.jsx)("div",{className:n.spacer}),Object(te.jsx)("div",{className:n.gridList,children:t.map((function(e,n){var a=e.temperature,i=e.startTime,c=e.icon;return Object(te.jsxs)(r.Fragment,{children:[Object(te.jsx)(ve,{temperature:a,time:i,icon:c}),n!==t.length-1&&Object(te.jsx)(se.a,{orientation:"vertical"})]},i.toISOString())}))}),Object(te.jsx)("div",{className:n.spacer})]})})}function me(e){var t=e.value;switch(e.unit){case H.KilometersPerHour:return"".concat(t," km/h");case H.MetersPerSecond:return"".concat(t," m/s");case H.MilesPerHour:return"".concat(t," mph");default:return"".concat(t)}}function be(e,t){var n=function(e){var t=e.value,n=e.unit;switch(n){case H.KilometersPerHour:return{value:t/3.6,unit:H.MetersPerSecond};case H.MetersPerSecond:return{value:t,unit:n};case H.MilesPerHour:return{value:t/2.237,unit:H.MetersPerSecond}}}(e).value;switch(t){case H.KilometersPerHour:return{value:3.6*n,unit:t};case H.MetersPerSecond:return{value:n,unit:t};case H.MilesPerHour:return{value:2.237*n,unit:t}}}var Oe=Object(ae.a)({icon:{alignSelf:"flex-start"}});function xe(e){var t=e.icon,n=e.shortForecast,r=e.temperature,a=e.windSpeed,i=e.relativeHumidity,c=e.updateTime,o=e.station,s=Oe();return Object(te.jsx)(ce.a,{children:Object(te.jsxs)(oe.a,{children:[Object(te.jsx)(h.a,{variant:"h5",children:n}),Object(te.jsxs)(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(te.jsx)(le,{className:s.icon,alt:"",src:t,skeletonProps:{height:re.Medium,width:re.Medium}}),Object(te.jsxs)(b.a,{display:"flex",flexDirection:"column",alignItems:"flex-end",children:[Object(te.jsx)(h.a,{variant:"h3",children:de(r)}),void 0!==i&&Object(te.jsx)(h.a,{children:"Humidity: ".concat(Math.round(i),"%")}),void 0!==a&&Object(te.jsx)(h.a,{children:"Wind: ".concat(me(a))}),c&&Object(te.jsx)(b.a,{display:"flex",justifyContent:"flex-end",children:Object(te.jsx)(h.a,{variant:"caption",children:c.toLocaleString()})}),c&&Object(te.jsx)(b.a,{display:"flex",justifyContent:"flex-end",children:Object(te.jsx)(h.a,{variant:"caption",children:o})})]})]})]})})}function ge(e){var t=e.currentWeather,n=e.hourlyForecast,r=e.updateTime,a=e.station,i=e.className;return Object(te.jsxs)("div",{className:i,children:[Object(te.jsx)(xe,{icon:t.icon,shortForecast:t.shortForecast,temperature:t.temperature,windSpeed:t.windSpeed,relativeHumidity:t.relativeHumidity,updateTime:r,station:a}),Object(te.jsx)(he,{periods:n})]})}var ye=n(43),we={speedUnit:H.MilesPerHour,temperatureUnit:F.Fahrenheit},Se=Object(r.createContext)(we),Ce=Object(ae.a)((function(e){return{root:{display:"flex",flexDirection:"column",gap:e.spacing(2)},forecastTile:{display:"grid",gridTemplateAreas:'\n    "forecastTileTitle forecastTileTitle forecastTileTitle"\n    "forecastTileIcon forecastTileDescription forecastTileTemperature"\n    ',alignItems:"center",columnGap:e.spacing(1)},forecastTileTitle:{gridArea:"forecastTileTitle",justifySelf:"start"},forecastTileIcon:{gridArea:"forecastTileIcon"},forecastTileDescription:{gridArea:"forecastTileDescription"},forecastTileTemperature:{gridArea:"forecastTileTemperature",justifySelf:"end"}}}));function Te(e){var t=e.forecast,n=Ce();return Object(te.jsx)("div",{className:n.root,children:t.map((function(e){return Object(te.jsxs)("div",{className:n.forecastTile,children:[Object(te.jsx)(h.a,{className:n.forecastTileTitle,variant:"h6",children:e.name}),Object(te.jsx)(le,{className:n.forecastTileIcon,src:e.icon,alt:"",skeletonProps:{height:re.Medium,width:re.Medium}}),Object(te.jsx)(h.a,{className:n.forecastTileDescription,children:e.shortForecast}),Object(te.jsx)(h.a,{variant:"h6",className:n.forecastTileTemperature,children:de(e.temperature)})]},e.startTime.toISOString())}))})}function ke(){var e;return null!==(e=Q.getItem("cachedForecast",(function(e,t){var n=e.toLocaleUpperCase();return n.includes("TIME")||n.includes("DATE")?new Date(t):t})))&&void 0!==e?e:{location:null,city:null,state:null,forecast:null,hourlyForecast:null,stationId:null,observations:null}}function Pe(){return(Pe=Object(f.a)(l.a.mark((function e(t){var n,r,a,i,c,o,s,u,d,p,f,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getPointInfo(t.latitude,t.longitude);case 2:return n=e.sent,r=n.relativeLocation,a=r.city,i=r.state,c=n.gridId,o=n.gridX,s=n.gridY,e.next=11,W.getForecast({wfo:c,x:o,y:s});case 11:return u=e.sent,e.next=14,W.getHourlyForecast({wfo:c,x:o,y:s});case 14:return d=e.sent,e.next=17,W.getStations({wfo:c,x:o,y:s});case 17:return p=e.sent,f=p[0].id,e.next=21,W.getStationObservations({stationId:f,limit:1});case 21:return v=e.sent,e.abrupt("return",{location:t,city:a,state:i,forecast:u,hourlyForecast:d,stationId:f,observations:v});case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(){var e,t,n,a,i,o,u=ie(),l=Object(s.f)(),f=Object(r.useContext)(Se),P=f.speedUnit,E=f.temperatureUnit,I=function(){var e=Object(r.useState)(window.navigator.onLine),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a(!1)}function t(){a(!0)}return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}}),[]),n}(),L=Object(r.useState)(!1),N=Object(c.a)(L,2),M=N[0],R=N[1],U=Object(r.useReducer)(V,void 0,ke),K=Object(c.a)(U,2),A=K[0],_=K[1],B=A.location,W=A.city,G=A.state,J=A.forecast,Z=A.hourlyForecast,X=A.observations,Y=A.stationId,q=null!==(e=null===X||void 0===X?void 0:X[0])&&void 0!==e?e:null,z=Object(r.useCallback)((function(e){R(!0),function(e){return Pe.apply(this,arguments)}(e).then((function(e){return _({type:"updateForecast",payload:e})})).finally((function(){return R(!1)}))}),[]);Object(r.useEffect)((function(){B&&I&&z(B)}),[I,B,z]),i="cachedForecast",o=A,Object(r.useEffect)((function(){Q.setItem(i,o)}),[i,o]);var $=Object(r.useCallback)((function(e){return function(e){var t=e.value,n=Object(d.a)(e,["value"]);return Object(p.a)({value:Math.round(t)},n)}(pe(e,E))}),[E]),ee=Object(r.useCallback)((function(e){return Object(p.a)(Object(p.a)({},e),{},{periods:e.periods.map((function(e){var t=e.temperature,n=Object(d.a)(e,["temperature"]);return Object(p.a)({temperature:$(t)},n)}))})}),[$]),re=Object(r.useMemo)((function(){return null!==J?ee(J):null}),[J,ee]),ae=Object(r.useMemo)((function(){return null!==Z?ee(Z):null}),[Z,ee]),ce=new Date,oe=new Date(ce);oe.setDate(oe.getDate()+1),oe.setHours(0,0,0,0);var se,ue=null===ae||void 0===ae?void 0:ae.periods.filter((function(e){var t=e.endTime,n=e.startTime;return new Date(t)>ce&&new Date(n)<oe})).map((function(e){var t=e.temperature,n=Object(d.a)(e,["temperature"]);return Object(p.a)({temperature:$(t)},n)})),le=Object(r.useState)(null),de=Object(c.a)(le,2),fe=de[0],ve=de[1],je=Object(r.useState)("hourly"),he=Object(c.a)(je,2),me=he[0],Oe=he[1];return Object(te.jsx)("div",{className:u.root,children:Object(te.jsxs)(T.a,{value:me,children:[Object(te.jsx)(v.a,{position:"sticky",children:Object(te.jsxs)(j.a,{children:[Object(te.jsx)(h.a,{variant:"h6",children:W||G?"".concat(null!==W&&void 0!==W?W:"Unknown",", ").concat(null!==G&&void 0!==G?G:"Unknown"):"Unknown"}),Object(te.jsx)(m.a,{color:"inherit",onClick:function(){D.getCurrentPosition().then((function(e){var t=e.coords;_({type:"updateForecast",payload:{location:{latitude:t.latitude,longitude:t.longitude}}})}))},children:Object(te.jsx)(y.a,{})}),Object(te.jsx)(b.a,{className:u.spacer}),Object(te.jsx)(m.a,{color:"inherit",edge:"end",onClick:function(e){return ve(e.currentTarget)},children:Object(te.jsx)(w.a,{})})]})}),Object(te.jsx)(ne,{anchorEl:fe,open:Boolean(fe),onClose:function(){return ve(null)},onRefreshClicked:function(){ve(null),B&&I&&z(B)},onSettingsClicked:function(){ve(null),l.push(ye.SETTINGS)}}),M&&Object(te.jsx)(O.a,{color:"secondary"}),Object(te.jsxs)("main",{className:u.main,children:[Object(te.jsx)(k.a,{value:"hourly",children:q&&(null===ue||void 0===ue?void 0:ue.length)&&Object(te.jsx)(ge,{className:u.hourlyForecastPage,updateTime:new Date(q.timestamp),station:null!==Y&&void 0!==Y?Y:"",currentWeather:{icon:q.icon,shortForecast:q.description,temperature:$({value:null!==(t=null===(n=q.temperature)||void 0===n?void 0:n.value)&&void 0!==t?t:0,unit:F.Celsius}),windSpeed:void 0!==(null===q||void 0===q?void 0:q.windSpeed)?(se={value:q.windSpeed.value,unit:H.KilometersPerHour},function(e){var t=e.value,n=Object(d.a)(e,["value"]);return Object(p.a)({value:Math.round(t)},n)}(be(se,P))):void 0,relativeHumidity:q.relativeHumidity},hourlyForecast:ue})}),Object(te.jsx)(k.a,{value:"daily",children:Object(te.jsx)(Te,{forecast:null!==(a=null===re||void 0===re?void 0:re.periods)&&void 0!==a?a:[]})})]}),Object(te.jsxs)(x.a,{value:me,onChange:function(e,t){return Oe(t)},showLabels:!0,className:u.bottomNavigation,children:[Object(te.jsx)(g.a,{icon:Object(te.jsx)(S.a,{}),label:"Hourly",value:"hourly"}),Object(te.jsx)(g.a,{icon:Object(te.jsx)(C.a,{}),label:"Daily",value:"daily"})]})]})})}var Ie=n(145),He=n(164),Fe=n(123),De=n(165),Le=n(163);function Ne(e){var t=e.open,n=void 0!==t&&t,r=e.anchorEl,a=e.anchorOrigin,i=e.children,c=e.onClose;return Object(te.jsx)($.a,{open:n,anchorEl:r,anchorOrigin:a,onClose:c,children:i})}var Me=Object(r.createContext)((function(){}));function Re(e){switch(e){case H.KilometersPerHour:return"Kilometers per hour";case H.MetersPerSecond:return"Meters per second";case H.MilesPerHour:return"Miles per hour"}}function Ue(e){switch(e){case F.Celsius:return"Celsius";case F.Fahrenheit:return"Fahrenheit";case F.Kelvin:return"Kelvin"}}var Ke=Object(ae.a)((function(e){return{listSubHeader:{color:e.palette.primary.main,fontSize:e.typography.body1.fontSize,fontWeight:e.typography.body1.fontWeight,textAlign:"start"}}})),Ae=Object.keys(H).map((function(e){return H[e]})),_e=Object.keys(F).map((function(e){return F[e]}));function Be(){var e=Ke(),t=Object(s.f)(),n=Object(r.useContext)(Me),a=Object(r.useState)(null),i=Object(c.a)(a,2),o=i[0],u=i[1],l=Object(r.useState)(null),d=Object(c.a)(l,2),p=d[0],f=d[1],b=Object(r.useContext)(Se),O=b.speedUnit,x=b.temperatureUnit;return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(v.a,{position:"sticky",children:Object(te.jsxs)(j.a,{children:[Object(te.jsx)(m.a,{edge:"start",color:"inherit",onClick:function(){return t.goBack()},children:Object(te.jsx)(Le.a,{})}),Object(te.jsx)(h.a,{variant:"h6",children:"Settings"})]})}),Object(te.jsx)(Ne,{anchorEl:o,open:Boolean(o),onClose:function(){return u(null)},children:Ae.map((function(e){return Object(te.jsx)(ee.a,{onClick:function(){n({speedUnit:e}),u(null)},children:Re(e)},e)}))}),Object(te.jsx)(Ne,{anchorEl:p,open:Boolean(p),onClose:function(){return f(null)},children:_e.map((function(e){return Object(te.jsx)(ee.a,{onClick:function(){n({temperatureUnit:e}),f(null)},children:Ue(e)},e)}))}),Object(te.jsxs)(Ie.a,{children:[Object(te.jsx)(He.a,{inset:!0,className:e.listSubHeader,children:"Units"}),Object(te.jsx)(Fe.a,{button:!0,onClick:function(e){var t,n;return u(null!==(t=null===(n=e.currentTarget.firstElementChild)||void 0===n?void 0:n.firstElementChild)&&void 0!==t?t:null)},children:Object(te.jsx)(De.a,{inset:!0,primary:"Speed unit",secondary:Re(O)})}),Object(te.jsx)(Fe.a,{button:!0,onClick:function(e){var t,n;return f(null!==(t=null===(n=e.currentTarget.firstElementChild)||void 0===n?void 0:n.firstElementChild)&&void 0!==t?t:null)},children:Object(te.jsx)(De.a,{inset:!0,primary:"Temperature unit",secondary:Ue(x)})})]})]})}function We(e,t){var n=t.type,r=t.update;switch(n){case"update":return Object(p.a)(Object(p.a)({},e),r)}}function Ge(e){return"userPreferences::".concat(e)}var Je=new(function(){function e(){Object(L.a)(this,e)}return Object(N.a)(e,[{key:"save",value:function(e,t){Q.setItem(Ge(e),t)}},{key:"load",value:function(e){var t;return null!==(t=Q.getItem(Ge(e)))&&void 0!==t?t:null}},{key:"loadOrDefault",value:function(e,t){var n;return null!==(n=Q.getItem(Ge(e)))&&void 0!==n?n:t}},{key:"loadAllOrDefault",value:function(){return{speedUnit:this.loadOrDefault("speedUnit",we.speedUnit),temperatureUnit:this.loadOrDefault("temperatureUnit",we.temperatureUnit)}}}]),e}());function Ze(){var e=Object(r.useReducer)(We,Je.loadAllOrDefault()),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(te.jsx)(Se.Provider,{value:n,children:Object(te.jsx)(Me.Provider,{value:function(e){Object.keys(e).forEach((function(t){Je.save(t,e[t])})),a({type:"update",update:e})},children:Object(te.jsx)("div",{className:"App",children:Object(te.jsx)(o.a,{children:Object(te.jsxs)(s.c,{children:[Object(te.jsx)(s.a,{path:ye.DASHBOARD,exact:!0,children:Object(te.jsx)(Ee,{})}),Object(te.jsx)(s.a,{path:ye.SETTINGS,children:Object(te.jsx)(Be,{})})]})})})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};i.a.render(Object(te.jsx)(r.StrictMode,{children:Object(te.jsx)(Ze,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Xe()},43:function(e){e.exports=JSON.parse('{"DASHBOARD":"/","SETTINGS":"/settings"}')},93:function(e,t,n){},94:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.cabc6b5b.chunk.js.map