0;upd();return;}}

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

<body onload="init()" allowTransparency=true style="background:transparent"><table cellpadding=0 cellspacing=0 border=0 class="tab t100" id=c2><tr><td id=c1 valign=middle><a id=t1c href="chalazoni.blogspot" target=_blank title="chalazoni.blogspot"><span id=t1>Κυριακή, 1 Μαρτίου 2015, 20:18:51</span></a></td></tr></table></body></html>

