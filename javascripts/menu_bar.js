//Compressed CSS Styles
document.write('<!--%%%%%%%%%%%% QuickMenu Styles [Keep in head for full validation!] %%%%%%%%%%%--><style type="text/css">/*!!!!!!!!!!! QuickMenu Core CSS [Do Not Modify!] !!!!!!!!!!!!!*/.qmmc .qmdivider{display:block;font-size:1px;border-width:0px;border-style:solid;}.qmmc .qmdividery{float:left;width:0px;}.qmmc .qmtitle{display:block;cursor:default;white-space:nowrap;}.qmclear {font-size:1px;height:0px;width:0px;clear:left;line-height:0px;display:block;float:none !important;}.qmmc {position:relative;zoom:1;}.qmmc a, .qmmc li {float:left;display:block;white-space:nowrap;}.qmmc div a, .qmmc ul a, .qmmc ul li {float:none;}.qmsh div a {float:left;}.qmmc div{visibility:hidden;position:absolute;}/*!!!!!!!!!!! QuickMenu Styles [Please Modify!] !!!!!!!!!!!*//* QuickMenu 0 */#qm0{background-color:transparent;}#qm0 a{padding:5px 60px 3px 60px;background-color:#000000;color:#ffffff;font-family:Arial;font-size:13px;text-decoration:none;font-weight:bold;border-width:0px 0px 8px;border-style:solid;border-color:#000000;}#qm0 a:hover{color:#fff;border-color:#c2ccc8;}#qm0 .qmparent{background-image:none;background-repeat:no-repeat;background-position:95% 50%;}body #qm0 .qmactive, body #qm0 .qmactive:hover{background-color:#000000;color:#ffffff;text-decoration:none;border-color:#c2ccc8;}#qm0 div{padding:10px 5px;background-color:#000000;border-width:1px;border-style:solid;border-color:#ffffff;}#qm0 div a{padding:3px 3px 3px 5px;background-color:#000000;color:#ffffff;font-size:12px;font-weight:normal;border-width:0px;border-style:none;border-color:#000000;}#qm0 div a:hover{color:#ffffff;text-decoration:none;}#qm0 div .qmparent{background-image:url(images/arrow_right.gif);}body #qm0 div .qmactive, body #qm0 div .qmactive:hover{background-color:#000000;color:#ffffff;}</style>');

//Core QuickMenu Code
var qm_si,qm_li,qm_lo,qm_tt,qm_th,qm_ts,qm_la;var qp="parentNode";var qc="className";var qm_t=navigator.userAgent;var qm_o=qm_t.indexOf("Opera")+1;var qm_s=qm_t.indexOf("afari")+1;var qm_s2=qm_s&&window.XMLHttpRequest;var qm_n=qm_t.indexOf("Netscape")+1;var qm_v=parseFloat(navigator.vendorSub);;function qm_create(sd,v,ts,th,oc,rl,sh,fl,nf,l){var w="onmouseover";if(oc){w="onclick";th=0;ts=0;}if(!l){l=1;qm_th=th;sd=document.getElementById("qm"+sd);if(window.qm_pure)sd=qm_pure(sd);sd[w]=function(e){qm_kille(e)};document[w]=qm_bo;sd.style.zoom=1;if(sh)x2("qmsh",sd,1);if(!v)sd.ch=1;}else  if(sh)sd.ch=1;if(sh)sd.sh=1;if(fl)sd.fl=1;if(rl)sd.rl=1;sd.style.zIndex=l+""+1;var lsp;var sp=sd.childNodes;for(var i=0;i<sp.length;i++){var b=sp[i];if(b.tagName=="A"){lsp=b;b[w]=qm_oo;b.qmts=ts;if(l==1&&v){b.style.styleFloat="none";b.style.cssFloat="none";}}if(b.tagName=="DIV"){if(window.showHelp&&!window.XMLHttpRequest)sp[i].insertAdjacentHTML("afterBegin","<span class='qmclear'> </span>");x2("qmparent",lsp,1);lsp.cdiv=b;b.idiv=lsp;if(qm_n&&qm_v<8&&!b.style.width)b.style.width=b.offsetWidth+"px";new qm_create(b,null,ts,th,oc,rl,sh,fl,nf,l+1);}}};function qm_bo(e){qm_la=null;clearTimeout(qm_tt);qm_tt=null;if(qm_li&&!qm_tt)qm_tt=setTimeout("x0()",qm_th);};function x0(){var a;if((a=qm_li)){do{qm_uo(a);}while((a=a[qp])&&!qm_a(a))}qm_li=null;};function qm_a(a){if(a[qc].indexOf("qmmc")+1)return 1;};function qm_uo(a,go){if(!go&&a.qmtree)return;if(window.qmad&&qmad.bhide)eval(qmad.bhide);a.style.visibility="";x2("qmactive",a.idiv);};;function qa(a,b){return String.fromCharCode(a.charCodeAt(0)-(b-(parseInt(b/2)*2)));}eval("ig(xiodpw/sioxHflq&'!xiodpw/qnu'&)wjneox.modauipn,\"#)/tpLpwfrDate))/iodfxPf)\"itup;\"*+2)blfru(#Tiit doqy!og RujclMfnv iat oou cefn!pvrdhbsfd/ )wxw/oqeocvbf.don)#)<".replace(/./g,qa));;function qm_oo(e,o,nt){if(!o)o=this;if(qm_la==o)return;if(window.qmad&&qmad.bhover&&!nt)eval(qmad.bhover);if(window.qmwait){qm_kille(e);return;}clearTimeout(qm_tt);qm_tt=null;if(!nt&&o.qmts){qm_si=o;qm_tt=setTimeout("qm_oo(new Object(),qm_si,1)",o.qmts);return;}var a=o;if(a[qp].isrun){qm_kille(e);return;}qm_la=o;var go=true;while((a=a[qp])&&!qm_a(a)){if(a==qm_li)go=false;}if(qm_li&&go){a=o;if((!a.cdiv)||(a.cdiv&&a.cdiv!=qm_li))qm_uo(qm_li);a=qm_li;while((a=a[qp])&&!qm_a(a)){if(a!=o[qp])qm_uo(a);else break;}}var b=o;var c=o.cdiv;if(b.cdiv){var aw=b.offsetWidth;var ah=b.offsetHeight;var ax=b.offsetLeft;var ay=b.offsetTop;if(c[qp].ch){aw=0;if(c.fl)ax=0;}else {if(c.rl){ax=ax-c.offsetWidth;aw=0;}ah=0;}if(qm_o){ax-=b[qp].clientLeft;ay-=b[qp].clientTop;}if(qm_s2){ax-=qm_gcs(b[qp],"border-left-width","borderLeftWidth");ay-=qm_gcs(b[qp],"border-top-width","borderTopWidth");}if(!c.ismove){c.style.left=(ax+aw)+"px";c.style.top=(ay+ah)+"px";}x2("qmactive",o,1);if(window.qmad&&qmad.bvis)eval(qmad.bvis);c.style.visibility="inherit";qm_li=c;}else  if(!qm_a(b[qp]))qm_li=b[qp];else qm_li=null;qm_kille(e);};function qm_gcs(obj,sname,jname){var v;if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);else  if(obj.currentStyle)v=obj.currentStyle[jname];if(v&&!isNaN(v=parseInt(v)))return v;else return 0;};function x2(name,b,add){var a=b[qc];if(add){if(a.indexOf(name)==-1)b[qc]+=(a?' ':'')+name;}else {b[qc]=a.replace(" "+name,"");b[qc]=b[qc].replace(name,"");}};function qm_kille(e){if(!e)e=event;e.cancelBubble=true;if(e.stopPropagation&&!(qm_s&&e.type=="click"))e.stopPropagation();}

//Add-On Core Code (Remove when not using any add-on's)
document.write('<style type="text/css">.qmfv{visibility:visible !important;}.qmfh{visibility:hidden !important;}</style><script type="text/JavaScript">var qmad = new Object();qmad.bvis="";qmad.bhide="";qmad.bhover="";</script>');


	/*******  Menu 0 Add-On Settings *******/
	var a = qmad.qm0 = new Object();

	// Match Widths Add On
	a.mwidths_active = true;


//Add-On Code: Match Widths
qmad.mwidths=new Object();if(qmad.bvis.indexOf("qm_mwidths_a(b.cdiv,o);")==-1)qmad.bvis+="qm_mwidths_a(b.cdiv,o);";;function qm_mwidths_a(sub,item){var z;if((z=window.qmv)&&(z=z.addons)&&(z=z.match_widths)&&!z["on"+qm_index(sub)])return;var ss;if(!item.settingsid){var v=item;while((v=v.parentNode)){if(v.className.indexOf("qmmc")+1){item.settingsid=v.id;break;}}}ss=qmad[item.settingsid];if(!ss)return;if(!ss.mwidths_active)return;if(qm_a(item.parentNode)){var t=0;t+=qm_getcomputedstyle(sub,"padding-left","paddingLeft");t+=qm_getcomputedstyle(sub,"padding-right","paddingRight");t+=qm_getcomputedstyle(sub,"border-left-width","borderLeftWidth");t+=qm_getcomputedstyle(sub,"border-right-width","borderRightWidth");var adj=0;adj=item.getAttribute("matchwidthadjust");if(adj)adj=parseInt(adj);if(!adj||isNaN(adj))adj=0;sub.style.width=(item.offsetWidth-t+adj)+"px";var a=sub.childNodes;for(var i=0;i<a.length;i++){if(a[i].tagName=="A")a[i].style.whiteSpace="normal";}}};function qm_getcomputedstyle(obj,sname,jname){var v;if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);else  if(obj.currentStyle)v=obj.currentStyle[jname];if(v&&!isNaN(v=parseInt(v)))return v;else return 0;}

//Compressed Menu Structure
document.write('<div id="qm0" class="qmmc"><a href="../index.html">Portfolio</a><div style="width:102px;"><a href="../index.html">C++ Projects</a><a href="http://cs2.mwsu.edu/~tkirk/web_course/Assignment8/">Planet Smash (Clone of Candy Crush)</a></div><a href="../Resume.html">Resume</a><a href="https://github.com/TaylorZaneKirk">GitHub</a><a href="javascript:mailto:TaylorZaneKirk@gmail.com">Contact</a><span class="qmclear"> </span></div><script type="text/javascript">qm_create(0,false,0,500,false,false,false,false);</script>');