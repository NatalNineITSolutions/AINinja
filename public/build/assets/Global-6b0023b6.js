import{r as _,W as v,a as r,F as w,j as a,c as S,b as u}from"./app-7acf19d0.js";import{C as x}from"./Card-fb3ea49d.js";import{I as s}from"./Input-75ef1dc8.js";import{b as B,U as N,D}from"./Dashboard-7c449020.js";import{B as K}from"./Breadcrumb-9e4ecf35.js";import{I as R}from"./InputDropdown-737fd917.js";import"./ArrowDown-009da1a2.js";const G={"Pacific/Niue":"(GMT-11:00) Niue","Pacific/Pago_Pago":"(GMT-11:00) Pago Pago","Pacific/Honolulu":"(GMT-10:00) Hawaii Time","Pacific/Rarotonga":"(GMT-10:00) Rarotonga","Pacific/Tahiti":"(GMT-10:00) Tahiti","Pacific/Marquesas":"(GMT-09:30) Marquesas","America/Anchorage":"(GMT-09:00) Alaska Time","Pacific/Gambier":"(GMT-09:00) Gambier","America/Los_Angeles":"(GMT-08:00) Pacific Time","America/Tijuana":"(GMT-08:00) Pacific Time - Tijuana","America/Vancouver":"(GMT-08:00) Pacific Time - Vancouver","America/Whitehorse":"(GMT-08:00) Pacific Time - Whitehorse","Pacific/Pitcairn":"(GMT-08:00) Pitcairn","America/Dawson_Creek":"(GMT-07:00) Mountain Time - Dawson Creek","America/Denver":"(GMT-07:00) Mountain Time","America/Edmonton":"(GMT-07:00) Mountain Time - Edmonton","America/Hermosillo":"(GMT-07:00) Mountain Time - Hermosillo","America/Mazatlan":"(GMT-07:00) Mountain Time - Chihuahua, Mazatlan","America/Phoenix":"(GMT-07:00) Mountain Time - Arizona","America/Yellowknife":"(GMT-07:00) Mountain Time - Yellowknife","America/Belize":"(GMT-06:00) Belize","America/Chicago":"(GMT-06:00) Central Time","America/Costa_Rica":"(GMT-06:00) Costa Rica","America/El_Salvador":"(GMT-06:00) El Salvador","America/Guatemala":"(GMT-06:00) Guatemala","America/Managua":"(GMT-06:00) Managua","America/Mexico_City":"(GMT-06:00) Central Time - Mexico City","America/Regina":"(GMT-06:00) Central Time - Regina","America/Tegucigalpa":"(GMT-06:00) Central Time - Tegucigalpa","America/Winnipeg":"(GMT-06:00) Central Time - Winnipeg","Pacific/Galapagos":"(GMT-06:00) Galapagos","America/Bogota":"(GMT-05:00) Bogota","America/Cancun":"(GMT-05:00) America Cancun","America/Cayman":"(GMT-05:00) Cayman","America/Guayaquil":"(GMT-05:00) Guayaquil","America/Havana":"(GMT-05:00) Havana","America/Iqaluit":"(GMT-05:00) Eastern Time - Iqaluit","America/Jamaica":"(GMT-05:00) Jamaica","America/Lima":"(GMT-05:00) Lima","America/Nassau":"(GMT-05:00) Nassau","America/New_York":"(GMT-05:00) Eastern Time","America/Panama":"(GMT-05:00) Panama","America/Port-au-Prince":"(GMT-05:00) Port-au-Prince","America/Rio_Branco":"(GMT-05:00) Rio Branco","America/Toronto":"(GMT-05:00) Eastern Time - Toronto","Pacific/Easter":"(GMT-05:00) Easter Island","America/Caracas":"(GMT-04:30) Caracas","America/Asuncion":"(GMT-03:00) Asuncion","America/Barbados":"(GMT-04:00) Barbados","America/Boa_Vista":"(GMT-04:00) Boa Vista","America/Campo_Grande":"(GMT-03:00) Campo Grande","America/Cuiaba":"(GMT-03:00) Cuiaba","America/Curacao":"(GMT-04:00) Curacao","America/Grand_Turk":"(GMT-04:00) Grand Turk","America/Guyana":"(GMT-04:00) Guyana","America/Halifax":"(GMT-04:00) Atlantic Time - Halifax","America/La_Paz":"(GMT-04:00) La Paz","America/Manaus":"(GMT-04:00) Manaus","America/Martinique":"(GMT-04:00) Martinique","America/Port_of_Spain":"(GMT-04:00) Port of Spain","America/Porto_Velho":"(GMT-04:00) Porto Velho","America/Puerto_Rico":"(GMT-04:00) Puerto Rico","America/Santo_Domingo":"(GMT-04:00) Santo Domingo","America/Thule":"(GMT-04:00) Thule","Atlantic/Bermuda":"(GMT-04:00) Bermuda","America/St_Johns":"(GMT-03:30) Newfoundland Time - St. Johns","America/Araguaina":"(GMT-03:00) Araguaina","America/Argentina/Buenos_Aires":"(GMT-03:00) Buenos Aires","America/Bahia":"(GMT-03:00) Salvador","America/Belem":"(GMT-03:00) Belem","America/Cayenne":"(GMT-03:00) Cayenne","America/Fortaleza":"(GMT-03:00) Fortaleza","America/Godthab":"(GMT-03:00) Godthab","America/Maceio":"(GMT-03:00) Maceio","America/Miquelon":"(GMT-03:00) Miquelon","America/Montevideo":"(GMT-03:00) Montevideo","America/Paramaribo":"(GMT-03:00) Paramaribo","America/Recife":"(GMT-03:00) Recife","America/Santiago":"(GMT-03:00) Santiago","America/Sao_Paulo":"(GMT-02:00) Sao Paulo","Antarctica/Palmer":"(GMT-03:00) Palmer","Antarctica/Rothera":"(GMT-03:00) Rothera","Atlantic/Stanley":"(GMT-03:00) Stanley","America/Noronha":"(GMT-02:00) Noronha","Atlantic/South_Georgia":"(GMT-02:00) South Georgia","America/Scoresbysund":"(GMT-01:00) Scoresbysund","Atlantic/Azores":"(GMT-01:00) Azores","Atlantic/Cape_Verde":"(GMT-01:00) Cape Verde","Africa/Abidjan":"(GMT+00:00) Abidjan","Africa/Accra":"(GMT+00:00) Accra","Africa/Bissau":"(GMT+00:00) Bissau","Africa/Casablanca":"(GMT+00:00) Casablanca","Africa/El_Aaiun":"(GMT+00:00) El Aaiun","Africa/Monrovia":"(GMT+00:00) Monrovia","America/Danmarkshavn":"(GMT+00:00) Danmarkshavn","Atlantic/Canary":"(GMT+00:00) Canary Islands","Atlantic/Faroe":"(GMT+00:00) Faeroe","Atlantic/Reykjavik":"(GMT+00:00) Reykjavik","Etc/GMT":"(GMT+00:00) GMT (no daylight saving)","Europe/Dublin":"(GMT+00:00) Dublin","Europe/Lisbon":"(GMT+00:00) Lisbon","Europe/London":"(GMT+00:00) London","Africa/Algiers":"(GMT+01:00) Algiers","Africa/Ceuta":"(GMT+01:00) Ceuta","Africa/Lagos":"(GMT+01:00) Lagos","Africa/Ndjamena":"(GMT+01:00) Ndjamena","Africa/Tunis":"(GMT+01:00) Tunis","Africa/Windhoek":"(GMT+02:00) Windhoek","Europe/Amsterdam":"(GMT+01:00) Amsterdam","Europe/Andorra":"(GMT+01:00) Andorra","Europe/Belgrade":"(GMT+01:00) Central European Time - Belgrade","Europe/Berlin":"(GMT+01:00) Berlin","Europe/Brussels":"(GMT+01:00) Brussels","Europe/Budapest":"(GMT+01:00) Budapest","Europe/Copenhagen":"(GMT+01:00) Copenhagen","Europe/Gibraltar":"(GMT+01:00) Gibraltar","Europe/Luxembourg":"(GMT+01:00) Luxembourg","Europe/Madrid":"(GMT+01:00) Madrid","Europe/Malta":"(GMT+01:00) Malta","Europe/Monaco":"(GMT+01:00) Monaco","Europe/Oslo":"(GMT+01:00) Oslo","Europe/Paris":"(GMT+01:00) Paris","Europe/Prague":"(GMT+01:00) Central European Time - Prague","Europe/Rome":"(GMT+01:00) Rome","Europe/Stockholm":"(GMT+01:00) Stockholm","Europe/Tirane":"(GMT+01:00) Tirane","Europe/Vienna":"(GMT+01:00) Vienna","Europe/Warsaw":"(GMT+01:00) Warsaw","Europe/Zurich":"(GMT+01:00) Zurich","Africa/Cairo":"(GMT+02:00) Cairo","Africa/Johannesburg":"(GMT+02:00) Johannesburg","Africa/Maputo":"(GMT+02:00) Maputo","Africa/Tripoli":"(GMT+02:00) Tripoli","Asia/Amman":"(GMT+02:00) Amman","Asia/Beirut":"(GMT+02:00) Beirut","Asia/Damascus":"(GMT+02:00) Damascus","Asia/Gaza":"(GMT+02:00) Gaza","Asia/Jerusalem":"(GMT+02:00) Jerusalem","Asia/Nicosia":"(GMT+02:00) Nicosia","Europe/Athens":"(GMT+02:00) Athens","Europe/Bucharest":"(GMT+02:00) Bucharest","Europe/Chisinau":"(GMT+02:00) Chisinau","Europe/Helsinki":"(GMT+02:00) Helsinki","Europe/Istanbul":"(GMT+02:00) Istanbul","Europe/Kaliningrad":"(GMT+02:00) Moscow-01 - Kaliningrad","Europe/Kiev":"(GMT+02:00) Kiev","Europe/Riga":"(GMT+02:00) Riga","Europe/Sofia":"(GMT+02:00) Sofia","Europe/Tallinn":"(GMT+02:00) Tallinn","Europe/Vilnius":"(GMT+02:00) Vilnius","Africa/Khartoum":"(GMT+03:00) Khartoum","Africa/Nairobi":"(GMT+03:00) Nairobi","Antarctica/Syowa":"(GMT+03:00) Syowa","Asia/Baghdad":"(GMT+03:00) Baghdad","Asia/Qatar":"(GMT+03:00) Qatar","Asia/Riyadh":"(GMT+03:00) Riyadh","Europe/Minsk":"(GMT+03:00) Minsk","Europe/Moscow":"(GMT+03:00) Moscow+00 - Moscow","Asia/Tehran":"(GMT+03:30) Tehran","Asia/Baku":"(GMT+04:00) Baku","Asia/Dubai":"(GMT+04:00) Dubai","Asia/Tbilisi":"(GMT+04:00) Tbilisi","Asia/Yerevan":"(GMT+04:00) Yerevan","Europe/Samara":"(GMT+04:00) Moscow+01 - Samara","Indian/Mahe":"(GMT+04:00) Mahe","Indian/Mauritius":"(GMT+04:00) Mauritius","Indian/Reunion":"(GMT+04:00) Reunion","Asia/Kabul":"(GMT+04:30) Kabul","Antarctica/Mawson":"(GMT+05:00) Mawson","Asia/Aqtau":"(GMT+05:00) Aqtau","Asia/Aqtobe":"(GMT+05:00) Aqtobe","Asia/Ashgabat":"(GMT+05:00) Ashgabat","Asia/Dushanbe":"(GMT+05:00) Dushanbe","Asia/Karachi":"(GMT+05:00) Karachi","Asia/Tashkent":"(GMT+05:00) Tashkent","Asia/Yekaterinburg":"(GMT+05:00) Moscow+02 - Yekaterinburg","Indian/Kerguelen":"(GMT+05:00) Kerguelen","Indian/Maldives":"(GMT+05:00) Maldives","Asia/Calcutta":"(GMT+05:30) India Standard Time","Asia/Colombo":"(GMT+05:30) Colombo","Asia/Katmandu":"(GMT+05:45) Katmandu","Antarctica/Vostok":"(GMT+06:00) Vostok","Asia/Almaty":"(GMT+06:00) Almaty","Asia/Bishkek":"(GMT+06:00) Bishkek","Asia/Dhaka":"(GMT+06:00) Dhaka","Asia/Omsk":"(GMT+06:00) Moscow+03 - Omsk, Novosibirsk","Asia/Thimphu":"(GMT+06:00) Thimphu","Indian/Chagos":"(GMT+06:00) Chagos","Asia/Rangoon":"(GMT+06:30) Rangoon","Indian/Cocos":"(GMT+06:30) Cocos","Antarctica/Davis":"(GMT+07:00) Davis","Asia/Bangkok":"(GMT+07:00) Bangkok","Asia/Hovd":"(GMT+07:00) Hovd","Asia/Jakarta":"(GMT+07:00) Jakarta","Asia/Krasnoyarsk":"(GMT+07:00) Moscow+04 - Krasnoyarsk","Asia/Saigon":"(GMT+07:00) Hanoi","Asia/Ho_Chi_Minh":"(GMT+07:00) Ho Chi Minh","Indian/Christmas":"(GMT+07:00) Christmas","Antarctica/Casey":"(GMT+08:00) Casey","Asia/Brunei":"(GMT+08:00) Brunei","Asia/Choibalsan":"(GMT+08:00) Choibalsan","Asia/Hong_Kong":"(GMT+08:00) Hong Kong","Asia/Irkutsk":"(GMT+08:00) Moscow+05 - Irkutsk","Asia/Kuala_Lumpur":"(GMT+08:00) Kuala Lumpur","Asia/Macau":"(GMT+08:00) Macau","Asia/Makassar":"(GMT+08:00) Makassar","Asia/Manila":"(GMT+08:00) Manila","Asia/Shanghai":"(GMT+08:00) China Time - Beijing","Asia/Singapore":"(GMT+08:00) Singapore","Asia/Taipei":"(GMT+08:00) Taipei","Asia/Ulaanbaatar":"(GMT+08:00) Ulaanbaatar","Australia/Perth":"(GMT+08:00) Western Time - Perth","Asia/Pyongyang":"(GMT+08:30) Pyongyang","Asia/Dili":"(GMT+09:00) Dili","Asia/Jayapura":"(GMT+09:00) Jayapura","Asia/Seoul":"(GMT+09:00) Seoul","Asia/Tokyo":"(GMT+09:00) Tokyo","Asia/Yakutsk":"(GMT+09:00) Moscow+06 - Yakutsk","Pacific/Palau":"(GMT+09:00) Palau","Australia/Adelaide":"(GMT+10:30) Central Time - Adelaide","Australia/Darwin":"(GMT+09:30) Central Time - Darwin","Antarctica/DumontDUrville":"(GMT+10:00) Dumont D'Urville","Asia/Magadan":"(GMT+10:00) Moscow+07 - Magadan","Asia/Vladivostok":"(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk","Australia/Brisbane":"(GMT+10:00) Eastern Time - Brisbane","Australia/Hobart":"(GMT+11:00) Eastern Time - Hobart","Australia/Sydney":"(GMT+11:00) Eastern Time - Melbourne, Sydney","Pacific/Chuuk":"(GMT+10:00) Truk","Pacific/Guam":"(GMT+10:00) Guam","Pacific/Port_Moresby":"(GMT+10:00) Port Moresby","Pacific/Efate":"(GMT+11:00) Efate","Pacific/Guadalcanal":"(GMT+11:00) Guadalcanal","Pacific/Kosrae":"(GMT+11:00) Kosrae","Pacific/Norfolk":"(GMT+11:00) Norfolk","Pacific/Noumea":"(GMT+11:00) Noumea","Pacific/Pohnpei":"(GMT+11:00) Ponape","Asia/Kamchatka":"(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy","Pacific/Auckland":"(GMT+13:00) Auckland","Pacific/Fiji":"(GMT+13:00) Fiji","Pacific/Funafuti":"(GMT+12:00) Funafuti","Pacific/Kwajalein":"(GMT+12:00) Kwajalein","Pacific/Majuro":"(GMT+12:00) Majuro","Pacific/Nauru":"(GMT+12:00) Nauru","Pacific/Tarawa":"(GMT+12:00) Tarawa","Pacific/Wake":"(GMT+12:00) Wake","Pacific/Wallis":"(GMT+12:00) Wallis","Pacific/Apia":"(GMT+14:00) Apia","Pacific/Enderbury":"(GMT+13:00) Enderbury","Pacific/Fakaofo":"(GMT+13:00) Fakaofo","Pacific/Tongatapu":"(GMT+13:00) Tongatapu","Pacific/Kiritimati":"(GMT+14:00) Kiritimati"},I=c=>{const{name:m,email:A,logo:M,copyright:p,openai_key:d,aws_key:h,aws_secret:g}=c.app,[T,f]=_.useState(`/${M}`=="/null"?null:`/${M}`),{data:o,setData:l,post:b,errors:i,clearErrors:y}=v({app_name:m,app_email:A,app_logo:null,app_timezone:c.app.timezone,app_copyright:p,openai_key:d,aws_key:h,aws_secret:g}),n=e=>{l(e.target.name,e.target.value)},k=e=>{e.preventDefault(),y(),b(route("settings.global-update"))},P=Object.keys(G),C=Object.values(G).map((e,t)=>({key:e,value:P[t]})),E=e=>{const t=e.target.files;t&&t[0]&&(l("app_logo",t[0]),f(URL.createObjectURL(t[0])))};return r(w,{children:[a(S,{title:"Global Settings"}),a(K,{Icon:B,title:"Global Settings"}),r(x,{className:"max-w-[1000px] w-full mx-auto",children:[a("div",{className:"px-7 pt-7 pb-4 border-b border-b-gray-200",children:a("p",{className:"text18 font-bold text-gray-900",children:"Setup Global Settings"})}),r("form",{onSubmit:k,className:"p-7",children:[r("div",{className:"grid grid-cols-1 gap-7",children:[r("div",{className:"flex flex-col md:flex-row",children:[a("p",{className:"max-w-[164px] w-full font-medium text-gray-500 mb-1",children:"App Logo"}),r("div",{children:[T?a(u.Avatar,{src:T,alt:"item-1",size:"xs",variant:"circular",className:"h-[100px] w-[100px]"}):a(N,{className:"h-[100px] w-[100px] text-blue-gray-500"}),r("div",{className:"mt-1 flex items-center",children:[a("label",{for:"formFileSm",className:"text12 font-medium text-gray-900 px-2.5 py-1.5 border border-gray-700 bg-gray-100 whitespace-nowrap",children:"Choose Photo"}),a("input",{hidden:!0,id:"formFileSm",type:"file",onChange:E}),a("small",{className:"ml-3 text-gray-500",children:"JPG, JPEG, PNG, SVG File, Maximum 2MB"})]}),i.app_logo&&a("p",{className:"text-sm text-red-500 mt-1",children:i.app_logo})]})]}),a(s,{name:"app_name",label:"App Name",value:o.app_name,error:i.app_name,onChange:n,placeholder:"Enter your app name",fullWidth:!0,flexLabel:!0,required:!0}),a(s,{name:"app_email",label:"App Email Address",value:o.app_email,error:i.app_email,onChange:n,placeholder:"Enter your app email address",fullWidth:!0,flexLabel:!0,required:!0}),a(R,{required:!0,flexLabel:!0,fullWidth:!0,label:"App Timezone",error:i.app_timezone,defaultValue:c.app.timezone,itemList:C,onChange:e=>l("app_timezone",e.value)}),a(s,{name:"app_copyright",label:"App Copyright",value:o.app_copyright,error:i.app_copyright,onChange:n,placeholder:"Enter the copy right text. (Show on footer)",fullWidth:!0,flexLabel:!0,required:!0}),a(s,{type:"password",name:"openai_key",label:"Open AI API Key",value:o.openai_key,error:i.openai_key,onChange:n,placeholder:"Enter your open ai api key",fullWidth:!0,flexLabel:!0,required:!0}),a(s,{name:"aws_key",type:"password",label:"AWS Key",value:o.aws_key,error:i.aws_key,onChange:n,placeholder:"Enter aws credential key",fullWidth:!0,flexLabel:!0,required:!0}),a(s,{type:"password",name:"aws_secret",label:"AWS Secret",value:o.aws_secret,error:i.aws_secret,onChange:n,placeholder:"Enter aws credential secret",fullWidth:!0,flexLabel:!0,required:!0})]}),a("div",{className:"flex items-center mt-7 md:pl-[164px]",children:a(u.Button,{type:"submit",variant:"text",color:"white",className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14",children:"Save Changes"})})]})]})]})};I.layout=c=>a(D,{children:c});export{I as default};
