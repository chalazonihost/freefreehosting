<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><script type="text/javascript">

et=1425406813;function f0(d){return ld[d.getUTCDay()]+', '+d.getUTCDate()+' '+lm[d.getUTCMonth()]+' '+d.getUTCFullYear()+', '+p2(d.getUTCHours())+':'+p2(d.getUTCMinutes())+':'+p2(d.getUTCSeconds());}

cks={t1:{t:[{o:7200,a:'EET'}],f:f0}};lm=[];lm[2]='Μαρτίου';ld=[];ld[0]='Κυριακή';ld[1]='Δευτέρα';ld[2]='Τρίτη';//Copyright timeanddate.com 2005-2009, do not use without permission



var ltn=0;var lt0;function dt(){return new Date().getTime();}

function gf(i){var d=document;if(d.getElementById){return d.getElementById(i);}

if(d.all){return d.all[i];}

return null;}

function ih(n,h){if(n){n.innerHTML=h;}}

function rf(i,m){ih(gf("c1"),"refresh...");setTimeout("location.reload()",Math.floor(1E3*(i+Math.random()*m)));}

function pf(v,d){while((v="0000"+v)&&v.length<d){}return v.substring(v.length-d);}

function p2(v){return((v<10)?"0"+v:v);}

function upd(){var t,c,s,o,a,d,b,n=dt()+sa;if(ltn>n){rf(7,0);return;}

ltn=n;t=Math.floor(n/1000);if(t>et){rf(10,0);return;}else{if(t!=lt0){lt0=t;for(b in cks){c=cks[b];s=c.t;o="";a="";for(var i=0;i<s.length;i++){if(s[i].t>t){break;}

o=s[i].o;a=s[i].a;}}

if(o!==""&&c.d1){d=new Date((t+o)*1000);ih(c.d1,c.f(d));if(c.pa!=a&&c.d2){c.pa=a;ih(c.d2,a);}}

n=dt()+sa;}}

setTimeout(upd,1000-(n%1000));}

function coo(v){document.cookie='tads='+v+"; path=/";}

function sync(w){var m,y,o,b,i,u,f,c=document.cookie,s;if(c){m=c.match(/tads\=(\d+)_(\d+)/);if(m){y=dt();o=m[1]-y;if(o>-1E4){sa=m[2]-0;upd();return;}}

if(w<1E3&&c.indexOf('tads=c')>=0){w=w*2+10;setTimeout("sync("+w+")",w);return;}}

coo("c");b=null;i=window;try{if(i.XMLHttpRequest){b=new XMLHttpRequest();}}catch(e){}

if(!b){try{if(i.ActiveXObject){b=new ActiveXObject("Msxml2.XMLHTTP");}}catch(r){}}

if(!b){try{if(i.ActiveXObject){b=new ActiveXObject("Microsoft.XMLHTTP");}}catch(a){}}

if(!b){return;}

try{s=dt();u=document.URL.replace(/clock.*/,"ts.php?t="+s);b.open("GET",u,true);b.onreadystatechange=function(){f=dt();if(b&&b.readyState==4&&b.status==200){sa=Math.floor(parseFloat(b.responseText)*1E3-(s+f)/2);coo(f+"_"+sa);b=null;upd();}};s=dt();b.send("");}

catch(d){return;}}

function init(){var a,c;lt0=0;if(typeof(cks)!=="undefined"){for(a in cks){c=cks[a];c.d1=gf(a);c.d2=gf(a+"a");c.pa="";}

sync(0);}}

</script><style type="text/css">

#c1 {text-align:center;display:block;margin:0px auto;background-color:transparent;padding:1px;border:none;}

#t1c,#t1 {white-space:nowrap;font-family:'Comic Sans MS',sans-serif;font-size:14px;color:#fff;font-weight:bold;text-decoration:none;}

.t100 {width:100%;height:100%;}

.tab {margin: 0 auto;}

body {border:none;margin:0px;padding:0px;overflow:hidden;background-color:transparent;}

</style><title>Time in Kalamata</title></head>

<body onload="init()" allowTransparency=true style="background:transparent"><table cellpadding=0 cellspacing=0 border=0 class="tab t100" id=c2><tr><td id=c1 valign=middle><a id=t1c href="chalazoni.blogspot" target=_blank title="chalazoni.blogspot"><span id=t1>Κυριακή, 1 Μαρτίου 2015, 20:36:53</span></a></td></tr></table></body></html>

