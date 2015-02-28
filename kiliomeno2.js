function RecentPostsScrollerv2(json)
{var sHeadLines;var sPostURL;var objPost;var sMoqueeHTMLStart;var sMoqueeHTMLEnd;var sPoweredBy;var sHeadlineTerminator;var sPostLinkLocation;try
{sMoqueeHTMLStart="\<MARQUEE onmouseover=\"this.stop();\" onmouseout=\"this.start();\" ";if(nWidth)
{sMoqueeHTMLStart=sMoqueeHTMLStart+" width = \""+ nWidth+"%\"";}
else
{sMoqueeHTMLStart=sMoqueeHTMLStart+" width = \"100%\"";}
if(nScrollDelay)
{sMoqueeHTMLStart=sMoqueeHTMLStart+" scrolldelay = \""+ nScrollDelay+"\"";}
if(sDirection)
{sMoqueeHTMLStart=sMoqueeHTMLStart+" direction = \""+ sDirection+"\"";if(sDirection=="left"||sDirection=="right")
{sHeadlineTerminator="&nbsp;&nbsp;";}
else
{sHeadlineTerminator="\<br/\>";}}
if(sOpenLinkLocation=="N")
{sPostLinkLocation=" target= \"_blank\" ";}
else
{sPostLinkLocation=" ";}
sMoqueeHTMLEnd="\</MARQUEE\>"
sHeadLines="";for(var nFeedCounter=0;nFeedCounter<nMaxPosts;nFeedCounter++)
{objPost=json.feed.entry[nFeedCounter];for(var nCounter=0;nCounter<objPost.link.length;nCounter++)
{if(objPost.link[nCounter].rel=='alternate')
{sPostURL=objPost.link[nCounter].href;break;}}
sHeadLines=sHeadLines+"\<b\>"+sBulletChar+"\</b\> \<a "+ sPostLinkLocation+" href=\""+ sPostURL+"\">"+ objPost.title.$t+"\</a\>"+ sHeadlineTerminator;}
sPoweredBy=" Powered By \<a tareget =\"_blank\" href=\"http://chalazoni.blogspot.gr/l\"\>chalazoni.blogspot\</a\>";if(sDirection=="left")
{sHeadLines=sHeadLines+"&nbsp;"+ sPoweredBy;}
else if(sDirection=="right")
{sHeadLines=sPoweredBy+"&nbsp;"+ sHeadLines;}
else if(sDirection=="up")
{sHeadLines=sHeadLines+"\<br/\>"+ sPoweredBy;}
else
{sHeadLines=sPoweredBy+"\<br/\>"+ sHeadLines;}
document.write(sMoqueeHTMLStart+ sHeadLines+ sMoqueeHTMLEnd)}
catch(exception)
{alert(exception);}}