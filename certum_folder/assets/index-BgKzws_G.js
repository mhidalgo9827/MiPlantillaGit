(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const F of document.querySelectorAll('link[rel="modulepreload"]'))T(F);new MutationObserver(F=>{for(const W of F)if(W.type==="childList")for(const of of W.addedNodes)of.tagName==="LINK"&&of.rel==="modulepreload"&&T(of)}).observe(document,{childList:!0,subtree:!0});function d(F){const W={};return F.integrity&&(W.integrity=F.integrity),F.referrerPolicy&&(W.referrerPolicy=F.referrerPolicy),F.crossOrigin==="use-credentials"?W.credentials="include":F.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function T(F){if(F.ep)return;F.ep=!0;const W=d(F);fetch(F.href,W)}})();async function Kt(){return console.log("Simulación: conectando wallet..."),{publicKey:"ABC123_public_key_simulada"}}async function Ft(S,v){return console.log("Simulación: firmando hash..."),"firma_simulada_ed25519ph"}async function Nt(S,v,d){return alert("Simulación: registrando en blockchain..."),console.log("Simulación: registrando en contrato inteligente..."),{Rhash:S,firma:v,clavePublica:d,txid:"0xFAKE1234567890",timestamp:new Date().toISOString(),blockNumber:123456}}function zt(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}function Dt(S){if(Object.prototype.hasOwnProperty.call(S,"__esModule"))return S;var v=S.default;if(typeof v=="function"){var d=function T(){return this instanceof T?Reflect.construct(v,arguments,this.constructor):v.apply(this,arguments)};d.prototype=v.prototype}else d={};return Object.defineProperty(d,"__esModule",{value:!0}),Object.keys(S).forEach(function(T){var F=Object.getOwnPropertyDescriptor(S,T);Object.defineProperty(d,T,F.get?F:{enumerable:!0,get:function(){return S[T]}})}),d}function Ht(S){throw new Error('Could not dynamically require "'+S+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var tt={exports:{}};const Zt={},Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"})),$t=Dt(Gt);var mt;function qt(){return mt||(mt=1,function(S){(function(v){var d=function(t){var r,e=new Float64Array(16);if(t)for(r=0;r<t.length;r++)e[r]=t[r];return e},T=function(){throw new Error("no PRNG")},F=new Uint8Array(16),W=new Uint8Array(32);W[0]=9;var of=d(),cf=d([1]),xf=d([56129,1]),et=d([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),St=d([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),rt=d([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),nt=d([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),Ot=d([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function xt(t,r,e,f){t[r]=e>>24&255,t[r+1]=e>>16&255,t[r+2]=e>>8&255,t[r+3]=e&255,t[r+4]=f>>24&255,t[r+5]=f>>16&255,t[r+6]=f>>8&255,t[r+7]=f&255}function Yf(t,r,e,f,n){var a,o=0;for(a=0;a<n;a++)o|=t[r+a]^e[f+a];return(1&o-1>>>8)-1}function at(t,r,e,f){return Yf(t,r,e,f,16)}function Kf(t,r,e,f){return Yf(t,r,e,f,32)}function Lt(t,r,e,f){for(var n=f[0]&255|(f[1]&255)<<8|(f[2]&255)<<16|(f[3]&255)<<24,a=e[0]&255|(e[1]&255)<<8|(e[2]&255)<<16|(e[3]&255)<<24,o=e[4]&255|(e[5]&255)<<8|(e[6]&255)<<16|(e[7]&255)<<24,u=e[8]&255|(e[9]&255)<<8|(e[10]&255)<<16|(e[11]&255)<<24,y=e[12]&255|(e[13]&255)<<8|(e[14]&255)<<16|(e[15]&255)<<24,B=f[4]&255|(f[5]&255)<<8|(f[6]&255)<<16|(f[7]&255)<<24,g=r[0]&255|(r[1]&255)<<8|(r[2]&255)<<16|(r[3]&255)<<24,$=r[4]&255|(r[5]&255)<<8|(r[6]&255)<<16|(r[7]&255)<<24,w=r[8]&255|(r[9]&255)<<8|(r[10]&255)<<16|(r[11]&255)<<24,L=r[12]&255|(r[13]&255)<<8|(r[14]&255)<<16|(r[15]&255)<<24,j=f[8]&255|(f[9]&255)<<8|(f[10]&255)<<16|(f[11]&255)<<24,P=e[16]&255|(e[17]&255)<<8|(e[18]&255)<<16|(e[19]&255)<<24,R=e[20]&255|(e[21]&255)<<8|(e[22]&255)<<16|(e[23]&255)<<24,C=e[24]&255|(e[25]&255)<<8|(e[26]&255)<<16|(e[27]&255)<<24,M=e[28]&255|(e[29]&255)<<8|(e[30]&255)<<16|(e[31]&255)<<24,I=f[12]&255|(f[13]&255)<<8|(f[14]&255)<<16|(f[15]&255)<<24,E=n,U=a,_=o,A=u,m=y,p=B,i=g,c=$,l=w,s=L,h=j,b=P,O=R,Y=C,N=M,K=I,x,D=0;D<20;D+=2)x=E+O|0,m^=x<<7|x>>>25,x=m+E|0,l^=x<<9|x>>>23,x=l+m|0,O^=x<<13|x>>>19,x=O+l|0,E^=x<<18|x>>>14,x=p+U|0,s^=x<<7|x>>>25,x=s+p|0,Y^=x<<9|x>>>23,x=Y+s|0,U^=x<<13|x>>>19,x=U+Y|0,p^=x<<18|x>>>14,x=h+i|0,N^=x<<7|x>>>25,x=N+h|0,_^=x<<9|x>>>23,x=_+N|0,i^=x<<13|x>>>19,x=i+_|0,h^=x<<18|x>>>14,x=K+b|0,A^=x<<7|x>>>25,x=A+K|0,c^=x<<9|x>>>23,x=c+A|0,b^=x<<13|x>>>19,x=b+c|0,K^=x<<18|x>>>14,x=E+A|0,U^=x<<7|x>>>25,x=U+E|0,_^=x<<9|x>>>23,x=_+U|0,A^=x<<13|x>>>19,x=A+_|0,E^=x<<18|x>>>14,x=p+m|0,i^=x<<7|x>>>25,x=i+p|0,c^=x<<9|x>>>23,x=c+i|0,m^=x<<13|x>>>19,x=m+c|0,p^=x<<18|x>>>14,x=h+s|0,b^=x<<7|x>>>25,x=b+h|0,l^=x<<9|x>>>23,x=l+b|0,s^=x<<13|x>>>19,x=s+l|0,h^=x<<18|x>>>14,x=K+N|0,O^=x<<7|x>>>25,x=O+K|0,Y^=x<<9|x>>>23,x=Y+O|0,N^=x<<13|x>>>19,x=N+Y|0,K^=x<<18|x>>>14;E=E+n|0,U=U+a|0,_=_+o|0,A=A+u|0,m=m+y|0,p=p+B|0,i=i+g|0,c=c+$|0,l=l+w|0,s=s+L|0,h=h+j|0,b=b+P|0,O=O+R|0,Y=Y+C|0,N=N+M|0,K=K+I|0,t[0]=E>>>0&255,t[1]=E>>>8&255,t[2]=E>>>16&255,t[3]=E>>>24&255,t[4]=U>>>0&255,t[5]=U>>>8&255,t[6]=U>>>16&255,t[7]=U>>>24&255,t[8]=_>>>0&255,t[9]=_>>>8&255,t[10]=_>>>16&255,t[11]=_>>>24&255,t[12]=A>>>0&255,t[13]=A>>>8&255,t[14]=A>>>16&255,t[15]=A>>>24&255,t[16]=m>>>0&255,t[17]=m>>>8&255,t[18]=m>>>16&255,t[19]=m>>>24&255,t[20]=p>>>0&255,t[21]=p>>>8&255,t[22]=p>>>16&255,t[23]=p>>>24&255,t[24]=i>>>0&255,t[25]=i>>>8&255,t[26]=i>>>16&255,t[27]=i>>>24&255,t[28]=c>>>0&255,t[29]=c>>>8&255,t[30]=c>>>16&255,t[31]=c>>>24&255,t[32]=l>>>0&255,t[33]=l>>>8&255,t[34]=l>>>16&255,t[35]=l>>>24&255,t[36]=s>>>0&255,t[37]=s>>>8&255,t[38]=s>>>16&255,t[39]=s>>>24&255,t[40]=h>>>0&255,t[41]=h>>>8&255,t[42]=h>>>16&255,t[43]=h>>>24&255,t[44]=b>>>0&255,t[45]=b>>>8&255,t[46]=b>>>16&255,t[47]=b>>>24&255,t[48]=O>>>0&255,t[49]=O>>>8&255,t[50]=O>>>16&255,t[51]=O>>>24&255,t[52]=Y>>>0&255,t[53]=Y>>>8&255,t[54]=Y>>>16&255,t[55]=Y>>>24&255,t[56]=N>>>0&255,t[57]=N>>>8&255,t[58]=N>>>16&255,t[59]=N>>>24&255,t[60]=K>>>0&255,t[61]=K>>>8&255,t[62]=K>>>16&255,t[63]=K>>>24&255}function jt(t,r,e,f){for(var n=f[0]&255|(f[1]&255)<<8|(f[2]&255)<<16|(f[3]&255)<<24,a=e[0]&255|(e[1]&255)<<8|(e[2]&255)<<16|(e[3]&255)<<24,o=e[4]&255|(e[5]&255)<<8|(e[6]&255)<<16|(e[7]&255)<<24,u=e[8]&255|(e[9]&255)<<8|(e[10]&255)<<16|(e[11]&255)<<24,y=e[12]&255|(e[13]&255)<<8|(e[14]&255)<<16|(e[15]&255)<<24,B=f[4]&255|(f[5]&255)<<8|(f[6]&255)<<16|(f[7]&255)<<24,g=r[0]&255|(r[1]&255)<<8|(r[2]&255)<<16|(r[3]&255)<<24,$=r[4]&255|(r[5]&255)<<8|(r[6]&255)<<16|(r[7]&255)<<24,w=r[8]&255|(r[9]&255)<<8|(r[10]&255)<<16|(r[11]&255)<<24,L=r[12]&255|(r[13]&255)<<8|(r[14]&255)<<16|(r[15]&255)<<24,j=f[8]&255|(f[9]&255)<<8|(f[10]&255)<<16|(f[11]&255)<<24,P=e[16]&255|(e[17]&255)<<8|(e[18]&255)<<16|(e[19]&255)<<24,R=e[20]&255|(e[21]&255)<<8|(e[22]&255)<<16|(e[23]&255)<<24,C=e[24]&255|(e[25]&255)<<8|(e[26]&255)<<16|(e[27]&255)<<24,M=e[28]&255|(e[29]&255)<<8|(e[30]&255)<<16|(e[31]&255)<<24,I=f[12]&255|(f[13]&255)<<8|(f[14]&255)<<16|(f[15]&255)<<24,E=n,U=a,_=o,A=u,m=y,p=B,i=g,c=$,l=w,s=L,h=j,b=P,O=R,Y=C,N=M,K=I,x,D=0;D<20;D+=2)x=E+O|0,m^=x<<7|x>>>25,x=m+E|0,l^=x<<9|x>>>23,x=l+m|0,O^=x<<13|x>>>19,x=O+l|0,E^=x<<18|x>>>14,x=p+U|0,s^=x<<7|x>>>25,x=s+p|0,Y^=x<<9|x>>>23,x=Y+s|0,U^=x<<13|x>>>19,x=U+Y|0,p^=x<<18|x>>>14,x=h+i|0,N^=x<<7|x>>>25,x=N+h|0,_^=x<<9|x>>>23,x=_+N|0,i^=x<<13|x>>>19,x=i+_|0,h^=x<<18|x>>>14,x=K+b|0,A^=x<<7|x>>>25,x=A+K|0,c^=x<<9|x>>>23,x=c+A|0,b^=x<<13|x>>>19,x=b+c|0,K^=x<<18|x>>>14,x=E+A|0,U^=x<<7|x>>>25,x=U+E|0,_^=x<<9|x>>>23,x=_+U|0,A^=x<<13|x>>>19,x=A+_|0,E^=x<<18|x>>>14,x=p+m|0,i^=x<<7|x>>>25,x=i+p|0,c^=x<<9|x>>>23,x=c+i|0,m^=x<<13|x>>>19,x=m+c|0,p^=x<<18|x>>>14,x=h+s|0,b^=x<<7|x>>>25,x=b+h|0,l^=x<<9|x>>>23,x=l+b|0,s^=x<<13|x>>>19,x=s+l|0,h^=x<<18|x>>>14,x=K+N|0,O^=x<<7|x>>>25,x=O+K|0,Y^=x<<9|x>>>23,x=Y+O|0,N^=x<<13|x>>>19,x=N+Y|0,K^=x<<18|x>>>14;t[0]=E>>>0&255,t[1]=E>>>8&255,t[2]=E>>>16&255,t[3]=E>>>24&255,t[4]=p>>>0&255,t[5]=p>>>8&255,t[6]=p>>>16&255,t[7]=p>>>24&255,t[8]=h>>>0&255,t[9]=h>>>8&255,t[10]=h>>>16&255,t[11]=h>>>24&255,t[12]=K>>>0&255,t[13]=K>>>8&255,t[14]=K>>>16&255,t[15]=K>>>24&255,t[16]=i>>>0&255,t[17]=i>>>8&255,t[18]=i>>>16&255,t[19]=i>>>24&255,t[20]=c>>>0&255,t[21]=c>>>8&255,t[22]=c>>>16&255,t[23]=c>>>24&255,t[24]=l>>>0&255,t[25]=l>>>8&255,t[26]=l>>>16&255,t[27]=l>>>24&255,t[28]=s>>>0&255,t[29]=s>>>8&255,t[30]=s>>>16&255,t[31]=s>>>24&255}function Uf(t,r,e,f){Lt(t,r,e,f)}function Sf(t,r,e,f){jt(t,r,e,f)}var bf=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function ot(t,r,e,f,n,a,o){var u=new Uint8Array(16),y=new Uint8Array(64),B,g;for(g=0;g<16;g++)u[g]=0;for(g=0;g<8;g++)u[g]=a[g];for(;n>=64;){for(Uf(y,u,o,bf),g=0;g<64;g++)t[r+g]=e[f+g]^y[g];for(B=1,g=8;g<16;g++)B=B+(u[g]&255)|0,u[g]=B&255,B>>>=8;n-=64,r+=64,f+=64}if(n>0)for(Uf(y,u,o,bf),g=0;g<n;g++)t[r+g]=e[f+g]^y[g];return 0}function it(t,r,e,f,n){var a=new Uint8Array(16),o=new Uint8Array(64),u,y;for(y=0;y<16;y++)a[y]=0;for(y=0;y<8;y++)a[y]=f[y];for(;e>=64;){for(Uf(o,a,n,bf),y=0;y<64;y++)t[r+y]=o[y];for(u=1,y=8;y<16;y++)u=u+(a[y]&255)|0,a[y]=u&255,u>>>=8;e-=64,r+=64}if(e>0)for(Uf(o,a,n,bf),y=0;y<e;y++)t[r+y]=o[y];return 0}function ct(t,r,e,f,n){var a=new Uint8Array(32);Sf(a,f,n,bf);for(var o=new Uint8Array(8),u=0;u<8;u++)o[u]=f[u+16];return it(t,r,e,o,a)}function Ff(t,r,e,f,n,a,o){var u=new Uint8Array(32);Sf(u,a,o,bf);for(var y=new Uint8Array(8),B=0;B<8;B++)y[B]=a[B+16];return ot(t,r,e,f,n,y,u)}var Of=function(t){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var r,e,f,n,a,o,u,y;r=t[0]&255|(t[1]&255)<<8,this.r[0]=r&8191,e=t[2]&255|(t[3]&255)<<8,this.r[1]=(r>>>13|e<<3)&8191,f=t[4]&255|(t[5]&255)<<8,this.r[2]=(e>>>10|f<<6)&7939,n=t[6]&255|(t[7]&255)<<8,this.r[3]=(f>>>7|n<<9)&8191,a=t[8]&255|(t[9]&255)<<8,this.r[4]=(n>>>4|a<<12)&255,this.r[5]=a>>>1&8190,o=t[10]&255|(t[11]&255)<<8,this.r[6]=(a>>>14|o<<2)&8191,u=t[12]&255|(t[13]&255)<<8,this.r[7]=(o>>>11|u<<5)&8065,y=t[14]&255|(t[15]&255)<<8,this.r[8]=(u>>>8|y<<8)&8191,this.r[9]=y>>>5&127,this.pad[0]=t[16]&255|(t[17]&255)<<8,this.pad[1]=t[18]&255|(t[19]&255)<<8,this.pad[2]=t[20]&255|(t[21]&255)<<8,this.pad[3]=t[22]&255|(t[23]&255)<<8,this.pad[4]=t[24]&255|(t[25]&255)<<8,this.pad[5]=t[26]&255|(t[27]&255)<<8,this.pad[6]=t[28]&255|(t[29]&255)<<8,this.pad[7]=t[30]&255|(t[31]&255)<<8};Of.prototype.blocks=function(t,r,e){for(var f=this.fin?0:2048,n,a,o,u,y,B,g,$,w,L,j,P,R,C,M,I,E,U,_,A=this.h[0],m=this.h[1],p=this.h[2],i=this.h[3],c=this.h[4],l=this.h[5],s=this.h[6],h=this.h[7],b=this.h[8],O=this.h[9],Y=this.r[0],N=this.r[1],K=this.r[2],x=this.r[3],D=this.r[4],q=this.r[5],X=this.r[6],z=this.r[7],Z=this.r[8],G=this.r[9];e>=16;)n=t[r+0]&255|(t[r+1]&255)<<8,A+=n&8191,a=t[r+2]&255|(t[r+3]&255)<<8,m+=(n>>>13|a<<3)&8191,o=t[r+4]&255|(t[r+5]&255)<<8,p+=(a>>>10|o<<6)&8191,u=t[r+6]&255|(t[r+7]&255)<<8,i+=(o>>>7|u<<9)&8191,y=t[r+8]&255|(t[r+9]&255)<<8,c+=(u>>>4|y<<12)&8191,l+=y>>>1&8191,B=t[r+10]&255|(t[r+11]&255)<<8,s+=(y>>>14|B<<2)&8191,g=t[r+12]&255|(t[r+13]&255)<<8,h+=(B>>>11|g<<5)&8191,$=t[r+14]&255|(t[r+15]&255)<<8,b+=(g>>>8|$<<8)&8191,O+=$>>>5|f,w=0,L=w,L+=A*Y,L+=m*(5*G),L+=p*(5*Z),L+=i*(5*z),L+=c*(5*X),w=L>>>13,L&=8191,L+=l*(5*q),L+=s*(5*D),L+=h*(5*x),L+=b*(5*K),L+=O*(5*N),w+=L>>>13,L&=8191,j=w,j+=A*N,j+=m*Y,j+=p*(5*G),j+=i*(5*Z),j+=c*(5*z),w=j>>>13,j&=8191,j+=l*(5*X),j+=s*(5*q),j+=h*(5*D),j+=b*(5*x),j+=O*(5*K),w+=j>>>13,j&=8191,P=w,P+=A*K,P+=m*N,P+=p*Y,P+=i*(5*G),P+=c*(5*Z),w=P>>>13,P&=8191,P+=l*(5*z),P+=s*(5*X),P+=h*(5*q),P+=b*(5*D),P+=O*(5*x),w+=P>>>13,P&=8191,R=w,R+=A*x,R+=m*K,R+=p*N,R+=i*Y,R+=c*(5*G),w=R>>>13,R&=8191,R+=l*(5*Z),R+=s*(5*z),R+=h*(5*X),R+=b*(5*q),R+=O*(5*D),w+=R>>>13,R&=8191,C=w,C+=A*D,C+=m*x,C+=p*K,C+=i*N,C+=c*Y,w=C>>>13,C&=8191,C+=l*(5*G),C+=s*(5*Z),C+=h*(5*z),C+=b*(5*X),C+=O*(5*q),w+=C>>>13,C&=8191,M=w,M+=A*q,M+=m*D,M+=p*x,M+=i*K,M+=c*N,w=M>>>13,M&=8191,M+=l*Y,M+=s*(5*G),M+=h*(5*Z),M+=b*(5*z),M+=O*(5*X),w+=M>>>13,M&=8191,I=w,I+=A*X,I+=m*q,I+=p*D,I+=i*x,I+=c*K,w=I>>>13,I&=8191,I+=l*N,I+=s*Y,I+=h*(5*G),I+=b*(5*Z),I+=O*(5*z),w+=I>>>13,I&=8191,E=w,E+=A*z,E+=m*X,E+=p*q,E+=i*D,E+=c*x,w=E>>>13,E&=8191,E+=l*K,E+=s*N,E+=h*Y,E+=b*(5*G),E+=O*(5*Z),w+=E>>>13,E&=8191,U=w,U+=A*Z,U+=m*z,U+=p*X,U+=i*q,U+=c*D,w=U>>>13,U&=8191,U+=l*x,U+=s*K,U+=h*N,U+=b*Y,U+=O*(5*G),w+=U>>>13,U&=8191,_=w,_+=A*G,_+=m*Z,_+=p*z,_+=i*X,_+=c*q,w=_>>>13,_&=8191,_+=l*D,_+=s*x,_+=h*K,_+=b*N,_+=O*Y,w+=_>>>13,_&=8191,w=(w<<2)+w|0,w=w+L|0,L=w&8191,w=w>>>13,j+=w,A=L,m=j,p=P,i=R,c=C,l=M,s=I,h=E,b=U,O=_,r+=16,e-=16;this.h[0]=A,this.h[1]=m,this.h[2]=p,this.h[3]=i,this.h[4]=c,this.h[5]=l,this.h[6]=s,this.h[7]=h,this.h[8]=b,this.h[9]=O},Of.prototype.finish=function(t,r){var e=new Uint16Array(10),f,n,a,o;if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(f=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=f,f=this.h[o]>>>13,this.h[o]&=8191;for(this.h[0]+=f*5,f=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=f,f=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=f,e[0]=this.h[0]+5,f=e[0]>>>13,e[0]&=8191,o=1;o<10;o++)e[o]=this.h[o]+f,f=e[o]>>>13,e[o]&=8191;for(e[9]-=8192,n=(f^1)-1,o=0;o<10;o++)e[o]&=n;for(n=~n,o=0;o<10;o++)this.h[o]=this.h[o]&n|e[o];for(this.h[0]=(this.h[0]|this.h[1]<<13)&65535,this.h[1]=(this.h[1]>>>3|this.h[2]<<10)&65535,this.h[2]=(this.h[2]>>>6|this.h[3]<<7)&65535,this.h[3]=(this.h[3]>>>9|this.h[4]<<4)&65535,this.h[4]=(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14)&65535,this.h[5]=(this.h[6]>>>2|this.h[7]<<11)&65535,this.h[6]=(this.h[7]>>>5|this.h[8]<<8)&65535,this.h[7]=(this.h[8]>>>8|this.h[9]<<5)&65535,a=this.h[0]+this.pad[0],this.h[0]=a&65535,o=1;o<8;o++)a=(this.h[o]+this.pad[o]|0)+(a>>>16)|0,this.h[o]=a&65535;t[r+0]=this.h[0]>>>0&255,t[r+1]=this.h[0]>>>8&255,t[r+2]=this.h[1]>>>0&255,t[r+3]=this.h[1]>>>8&255,t[r+4]=this.h[2]>>>0&255,t[r+5]=this.h[2]>>>8&255,t[r+6]=this.h[3]>>>0&255,t[r+7]=this.h[3]>>>8&255,t[r+8]=this.h[4]>>>0&255,t[r+9]=this.h[4]>>>8&255,t[r+10]=this.h[5]>>>0&255,t[r+11]=this.h[5]>>>8&255,t[r+12]=this.h[6]>>>0&255,t[r+13]=this.h[6]>>>8&255,t[r+14]=this.h[7]>>>0&255,t[r+15]=this.h[7]>>>8&255},Of.prototype.update=function(t,r,e){var f,n;if(this.leftover){for(n=16-this.leftover,n>e&&(n=e),f=0;f<n;f++)this.buffer[this.leftover+f]=t[r+f];if(e-=n,r+=n,this.leftover+=n,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(e>=16&&(n=e-e%16,this.blocks(t,r,n),r+=n,e-=n),e){for(f=0;f<e;f++)this.buffer[this.leftover+f]=t[r+f];this.leftover+=e}};function Nf(t,r,e,f,n,a){var o=new Of(a);return o.update(e,f,n),o.finish(t,r),0}function st(t,r,e,f,n,a){var o=new Uint8Array(16);return Nf(o,0,e,f,n,a),at(t,r,o,0)}function zf(t,r,e,f,n){var a;if(e<32)return-1;for(Ff(t,0,r,0,e,f,n),Nf(t,16,t,32,e-32,t),a=0;a<16;a++)t[a]=0;return 0}function Df(t,r,e,f,n){var a,o=new Uint8Array(32);if(e<32||(ct(o,0,32,f,n),st(r,16,r,32,e-32,o)!==0))return-1;for(Ff(t,0,r,0,e,f,n),a=0;a<32;a++)t[a]=0;return 0}function lf(t,r){var e;for(e=0;e<16;e++)t[e]=r[e]|0}function Hf(t){var r,e,f=1;for(r=0;r<16;r++)e=t[r]+f+65535,f=Math.floor(e/65536),t[r]=e-f*65536;t[0]+=f-1+37*(f-1)}function pf(t,r,e){for(var f,n=~(e-1),a=0;a<16;a++)f=n&(t[a]^r[a]),t[a]^=f,r[a]^=f}function gf(t,r){var e,f,n,a=d(),o=d();for(e=0;e<16;e++)o[e]=r[e];for(Hf(o),Hf(o),Hf(o),f=0;f<2;f++){for(a[0]=o[0]-65517,e=1;e<15;e++)a[e]=o[e]-65535-(a[e-1]>>16&1),a[e-1]&=65535;a[15]=o[15]-32767-(a[14]>>16&1),n=a[15]>>16&1,a[14]&=65535,pf(o,a,1-n)}for(e=0;e<16;e++)t[2*e]=o[e]&255,t[2*e+1]=o[e]>>8}function ut(t,r){var e=new Uint8Array(32),f=new Uint8Array(32);return gf(e,t),gf(f,r),Kf(e,0,f,0)}function ht(t){var r=new Uint8Array(32);return gf(r,t),r[0]&1}function Zf(t,r){var e;for(e=0;e<16;e++)t[e]=r[2*e]+(r[2*e+1]<<8);t[15]&=32767}function uf(t,r,e){for(var f=0;f<16;f++)t[f]=r[f]+e[f]}function hf(t,r,e){for(var f=0;f<16;f++)t[f]=r[f]-e[f]}function H(t,r,e){var f,n,a=0,o=0,u=0,y=0,B=0,g=0,$=0,w=0,L=0,j=0,P=0,R=0,C=0,M=0,I=0,E=0,U=0,_=0,A=0,m=0,p=0,i=0,c=0,l=0,s=0,h=0,b=0,O=0,Y=0,N=0,K=0,x=e[0],D=e[1],q=e[2],X=e[3],z=e[4],Z=e[5],G=e[6],ff=e[7],V=e[8],J=e[9],Q=e[10],k=e[11],tf=e[12],ef=e[13],rf=e[14],nf=e[15];f=r[0],a+=f*x,o+=f*D,u+=f*q,y+=f*X,B+=f*z,g+=f*Z,$+=f*G,w+=f*ff,L+=f*V,j+=f*J,P+=f*Q,R+=f*k,C+=f*tf,M+=f*ef,I+=f*rf,E+=f*nf,f=r[1],o+=f*x,u+=f*D,y+=f*q,B+=f*X,g+=f*z,$+=f*Z,w+=f*G,L+=f*ff,j+=f*V,P+=f*J,R+=f*Q,C+=f*k,M+=f*tf,I+=f*ef,E+=f*rf,U+=f*nf,f=r[2],u+=f*x,y+=f*D,B+=f*q,g+=f*X,$+=f*z,w+=f*Z,L+=f*G,j+=f*ff,P+=f*V,R+=f*J,C+=f*Q,M+=f*k,I+=f*tf,E+=f*ef,U+=f*rf,_+=f*nf,f=r[3],y+=f*x,B+=f*D,g+=f*q,$+=f*X,w+=f*z,L+=f*Z,j+=f*G,P+=f*ff,R+=f*V,C+=f*J,M+=f*Q,I+=f*k,E+=f*tf,U+=f*ef,_+=f*rf,A+=f*nf,f=r[4],B+=f*x,g+=f*D,$+=f*q,w+=f*X,L+=f*z,j+=f*Z,P+=f*G,R+=f*ff,C+=f*V,M+=f*J,I+=f*Q,E+=f*k,U+=f*tf,_+=f*ef,A+=f*rf,m+=f*nf,f=r[5],g+=f*x,$+=f*D,w+=f*q,L+=f*X,j+=f*z,P+=f*Z,R+=f*G,C+=f*ff,M+=f*V,I+=f*J,E+=f*Q,U+=f*k,_+=f*tf,A+=f*ef,m+=f*rf,p+=f*nf,f=r[6],$+=f*x,w+=f*D,L+=f*q,j+=f*X,P+=f*z,R+=f*Z,C+=f*G,M+=f*ff,I+=f*V,E+=f*J,U+=f*Q,_+=f*k,A+=f*tf,m+=f*ef,p+=f*rf,i+=f*nf,f=r[7],w+=f*x,L+=f*D,j+=f*q,P+=f*X,R+=f*z,C+=f*Z,M+=f*G,I+=f*ff,E+=f*V,U+=f*J,_+=f*Q,A+=f*k,m+=f*tf,p+=f*ef,i+=f*rf,c+=f*nf,f=r[8],L+=f*x,j+=f*D,P+=f*q,R+=f*X,C+=f*z,M+=f*Z,I+=f*G,E+=f*ff,U+=f*V,_+=f*J,A+=f*Q,m+=f*k,p+=f*tf,i+=f*ef,c+=f*rf,l+=f*nf,f=r[9],j+=f*x,P+=f*D,R+=f*q,C+=f*X,M+=f*z,I+=f*Z,E+=f*G,U+=f*ff,_+=f*V,A+=f*J,m+=f*Q,p+=f*k,i+=f*tf,c+=f*ef,l+=f*rf,s+=f*nf,f=r[10],P+=f*x,R+=f*D,C+=f*q,M+=f*X,I+=f*z,E+=f*Z,U+=f*G,_+=f*ff,A+=f*V,m+=f*J,p+=f*Q,i+=f*k,c+=f*tf,l+=f*ef,s+=f*rf,h+=f*nf,f=r[11],R+=f*x,C+=f*D,M+=f*q,I+=f*X,E+=f*z,U+=f*Z,_+=f*G,A+=f*ff,m+=f*V,p+=f*J,i+=f*Q,c+=f*k,l+=f*tf,s+=f*ef,h+=f*rf,b+=f*nf,f=r[12],C+=f*x,M+=f*D,I+=f*q,E+=f*X,U+=f*z,_+=f*Z,A+=f*G,m+=f*ff,p+=f*V,i+=f*J,c+=f*Q,l+=f*k,s+=f*tf,h+=f*ef,b+=f*rf,O+=f*nf,f=r[13],M+=f*x,I+=f*D,E+=f*q,U+=f*X,_+=f*z,A+=f*Z,m+=f*G,p+=f*ff,i+=f*V,c+=f*J,l+=f*Q,s+=f*k,h+=f*tf,b+=f*ef,O+=f*rf,Y+=f*nf,f=r[14],I+=f*x,E+=f*D,U+=f*q,_+=f*X,A+=f*z,m+=f*Z,p+=f*G,i+=f*ff,c+=f*V,l+=f*J,s+=f*Q,h+=f*k,b+=f*tf,O+=f*ef,Y+=f*rf,N+=f*nf,f=r[15],E+=f*x,U+=f*D,_+=f*q,A+=f*X,m+=f*z,p+=f*Z,i+=f*G,c+=f*ff,l+=f*V,s+=f*J,h+=f*Q,b+=f*k,O+=f*tf,Y+=f*ef,N+=f*rf,K+=f*nf,a+=38*U,o+=38*_,u+=38*A,y+=38*m,B+=38*p,g+=38*i,$+=38*c,w+=38*l,L+=38*s,j+=38*h,P+=38*b,R+=38*O,C+=38*Y,M+=38*N,I+=38*K,n=1,f=a+n+65535,n=Math.floor(f/65536),a=f-n*65536,f=o+n+65535,n=Math.floor(f/65536),o=f-n*65536,f=u+n+65535,n=Math.floor(f/65536),u=f-n*65536,f=y+n+65535,n=Math.floor(f/65536),y=f-n*65536,f=B+n+65535,n=Math.floor(f/65536),B=f-n*65536,f=g+n+65535,n=Math.floor(f/65536),g=f-n*65536,f=$+n+65535,n=Math.floor(f/65536),$=f-n*65536,f=w+n+65535,n=Math.floor(f/65536),w=f-n*65536,f=L+n+65535,n=Math.floor(f/65536),L=f-n*65536,f=j+n+65535,n=Math.floor(f/65536),j=f-n*65536,f=P+n+65535,n=Math.floor(f/65536),P=f-n*65536,f=R+n+65535,n=Math.floor(f/65536),R=f-n*65536,f=C+n+65535,n=Math.floor(f/65536),C=f-n*65536,f=M+n+65535,n=Math.floor(f/65536),M=f-n*65536,f=I+n+65535,n=Math.floor(f/65536),I=f-n*65536,f=E+n+65535,n=Math.floor(f/65536),E=f-n*65536,a+=n-1+37*(n-1),n=1,f=a+n+65535,n=Math.floor(f/65536),a=f-n*65536,f=o+n+65535,n=Math.floor(f/65536),o=f-n*65536,f=u+n+65535,n=Math.floor(f/65536),u=f-n*65536,f=y+n+65535,n=Math.floor(f/65536),y=f-n*65536,f=B+n+65535,n=Math.floor(f/65536),B=f-n*65536,f=g+n+65535,n=Math.floor(f/65536),g=f-n*65536,f=$+n+65535,n=Math.floor(f/65536),$=f-n*65536,f=w+n+65535,n=Math.floor(f/65536),w=f-n*65536,f=L+n+65535,n=Math.floor(f/65536),L=f-n*65536,f=j+n+65535,n=Math.floor(f/65536),j=f-n*65536,f=P+n+65535,n=Math.floor(f/65536),P=f-n*65536,f=R+n+65535,n=Math.floor(f/65536),R=f-n*65536,f=C+n+65535,n=Math.floor(f/65536),C=f-n*65536,f=M+n+65535,n=Math.floor(f/65536),M=f-n*65536,f=I+n+65535,n=Math.floor(f/65536),I=f-n*65536,f=E+n+65535,n=Math.floor(f/65536),E=f-n*65536,a+=n-1+37*(n-1),t[0]=a,t[1]=o,t[2]=u,t[3]=y,t[4]=B,t[5]=g,t[6]=$,t[7]=w,t[8]=L,t[9]=j,t[10]=P,t[11]=R,t[12]=C,t[13]=M,t[14]=I,t[15]=E}function sf(t,r){H(t,r,r)}function lt(t,r){var e=d(),f;for(f=0;f<16;f++)e[f]=r[f];for(f=253;f>=0;f--)sf(e,e),f!==2&&f!==4&&H(e,e,r);for(f=0;f<16;f++)t[f]=e[f]}function dt(t,r){var e=d(),f;for(f=0;f<16;f++)e[f]=r[f];for(f=250;f>=0;f--)sf(e,e),f!==1&&H(e,e,r);for(f=0;f<16;f++)t[f]=e[f]}function Lf(t,r,e){var f=new Uint8Array(32),n=new Float64Array(80),a,o,u=d(),y=d(),B=d(),g=d(),$=d(),w=d();for(o=0;o<31;o++)f[o]=r[o];for(f[31]=r[31]&127|64,f[0]&=248,Zf(n,e),o=0;o<16;o++)y[o]=n[o],g[o]=u[o]=B[o]=0;for(u[0]=g[0]=1,o=254;o>=0;--o)a=f[o>>>3]>>>(o&7)&1,pf(u,y,a),pf(B,g,a),uf($,u,B),hf(u,u,B),uf(B,y,g),hf(y,y,g),sf(g,$),sf(w,u),H(u,B,u),H(B,y,$),uf($,u,B),hf(u,u,B),sf(y,u),hf(B,g,w),H(u,B,xf),uf(u,u,g),H(B,B,u),H(u,g,w),H(g,y,n),sf(y,$),pf(u,y,a),pf(B,g,a);for(o=0;o<16;o++)n[o+16]=u[o],n[o+32]=B[o],n[o+48]=y[o],n[o+64]=g[o];var L=n.subarray(32),j=n.subarray(16);return lt(L,L),H(j,j,L),gf(t,j),0}function jf(t,r){return Lf(t,r,W)}function bt(t,r){return T(r,32),jf(t,r)}function Cf(t,r,e){var f=new Uint8Array(32);return Lf(f,e,r),Sf(t,F,f,bf)}var yt=zf,Ct=Df;function It(t,r,e,f,n,a){var o=new Uint8Array(32);return Cf(o,n,a),yt(t,r,e,f,o)}function Mt(t,r,e,f,n,a){var o=new Uint8Array(32);return Cf(o,n,a),Ct(t,r,e,f,o)}var vt=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function pt(t,r,e,f){for(var n=new Int32Array(16),a=new Int32Array(16),o,u,y,B,g,$,w,L,j,P,R,C,M,I,E,U,_,A,m,p,i,c,l,s,h,b,O=t[0],Y=t[1],N=t[2],K=t[3],x=t[4],D=t[5],q=t[6],X=t[7],z=r[0],Z=r[1],G=r[2],ff=r[3],V=r[4],J=r[5],Q=r[6],k=r[7],tf=0;f>=128;){for(m=0;m<16;m++)p=8*m+tf,n[m]=e[p+0]<<24|e[p+1]<<16|e[p+2]<<8|e[p+3],a[m]=e[p+4]<<24|e[p+5]<<16|e[p+6]<<8|e[p+7];for(m=0;m<80;m++)if(o=O,u=Y,y=N,B=K,g=x,$=D,w=q,L=X,j=z,P=Z,R=G,C=ff,M=V,I=J,E=Q,U=k,i=X,c=k,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=(x>>>14|V<<18)^(x>>>18|V<<14)^(V>>>9|x<<23),c=(V>>>14|x<<18)^(V>>>18|x<<14)^(x>>>9|V<<23),l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,i=x&D^~x&q,c=V&J^~V&Q,l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,i=vt[m*2],c=vt[m*2+1],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,i=n[m%16],c=a[m%16],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,_=h&65535|b<<16,A=l&65535|s<<16,i=_,c=A,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=(O>>>28|z<<4)^(z>>>2|O<<30)^(z>>>7|O<<25),c=(z>>>28|O<<4)^(O>>>2|z<<30)^(O>>>7|z<<25),l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,i=O&Y^O&N^Y&N,c=z&Z^z&G^Z&G,l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,L=h&65535|b<<16,U=l&65535|s<<16,i=B,c=C,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=_,c=A,l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,B=h&65535|b<<16,C=l&65535|s<<16,Y=o,N=u,K=y,x=B,D=g,q=$,X=w,O=L,Z=j,G=P,ff=R,V=C,J=M,Q=I,k=E,z=U,m%16===15)for(p=0;p<16;p++)i=n[p],c=a[p],l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=n[(p+9)%16],c=a[(p+9)%16],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,_=n[(p+1)%16],A=a[(p+1)%16],i=(_>>>1|A<<31)^(_>>>8|A<<24)^_>>>7,c=(A>>>1|_<<31)^(A>>>8|_<<24)^(A>>>7|_<<25),l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,_=n[(p+14)%16],A=a[(p+14)%16],i=(_>>>19|A<<13)^(A>>>29|_<<3)^_>>>6,c=(A>>>19|_<<13)^(_>>>29|A<<3)^(A>>>6|_<<26),l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,n[p]=h&65535|b<<16,a[p]=l&65535|s<<16;i=O,c=z,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[0],c=r[0],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[0]=O=h&65535|b<<16,r[0]=z=l&65535|s<<16,i=Y,c=Z,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[1],c=r[1],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[1]=Y=h&65535|b<<16,r[1]=Z=l&65535|s<<16,i=N,c=G,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[2],c=r[2],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[2]=N=h&65535|b<<16,r[2]=G=l&65535|s<<16,i=K,c=ff,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[3],c=r[3],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[3]=K=h&65535|b<<16,r[3]=ff=l&65535|s<<16,i=x,c=V,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[4],c=r[4],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[4]=x=h&65535|b<<16,r[4]=V=l&65535|s<<16,i=D,c=J,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[5],c=r[5],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[5]=D=h&65535|b<<16,r[5]=J=l&65535|s<<16,i=q,c=Q,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[6],c=r[6],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[6]=q=h&65535|b<<16,r[6]=Q=l&65535|s<<16,i=X,c=k,l=c&65535,s=c>>>16,h=i&65535,b=i>>>16,i=t[7],c=r[7],l+=c&65535,s+=c>>>16,h+=i&65535,b+=i>>>16,s+=l>>>16,h+=s>>>16,b+=h>>>16,t[7]=X=h&65535|b<<16,r[7]=k=l&65535|s<<16,tf+=128,f-=128}return f}function yf(t,r,e){var f=new Int32Array(8),n=new Int32Array(8),a=new Uint8Array(256),o,u=e;for(f[0]=1779033703,f[1]=3144134277,f[2]=1013904242,f[3]=2773480762,f[4]=1359893119,f[5]=2600822924,f[6]=528734635,f[7]=1541459225,n[0]=4089235720,n[1]=2227873595,n[2]=4271175723,n[3]=1595750129,n[4]=2917565137,n[5]=725511199,n[6]=4215389547,n[7]=327033209,pt(f,n,r,e),e%=128,o=0;o<e;o++)a[o]=r[u-e+o];for(a[e]=128,e=256-128*(e<112?1:0),a[e-9]=0,xt(a,e-8,u/536870912|0,u<<3),pt(f,n,a,e),o=0;o<8;o++)xt(t,8*o,f[o],n[o]);return 0}function If(t,r){var e=d(),f=d(),n=d(),a=d(),o=d(),u=d(),y=d(),B=d(),g=d();hf(e,t[1],t[0]),hf(g,r[1],r[0]),H(e,e,g),uf(f,t[0],t[1]),uf(g,r[0],r[1]),H(f,f,g),H(n,t[3],r[3]),H(n,n,St),H(a,t[2],r[2]),uf(a,a,a),hf(o,f,e),hf(u,a,n),uf(y,a,n),uf(B,f,e),H(t[0],o,u),H(t[1],B,y),H(t[2],y,u),H(t[3],o,B)}function gt(t,r,e){var f;for(f=0;f<4;f++)pf(t[f],r[f],e)}function Gf(t,r){var e=d(),f=d(),n=d();lt(n,r[2]),H(e,r[0],n),H(f,r[1],n),gf(t,f),t[31]^=ht(e)<<7}function $f(t,r,e){var f,n;for(lf(t[0],of),lf(t[1],cf),lf(t[2],cf),lf(t[3],of),n=255;n>=0;--n)f=e[n/8|0]>>(n&7)&1,gt(t,r,f),If(r,t),If(t,t),gt(t,r,f)}function Mf(t,r){var e=[d(),d(),d(),d()];lf(e[0],rt),lf(e[1],nt),lf(e[2],cf),H(e[3],rt,nt),$f(t,e,r)}function qf(t,r,e){var f=new Uint8Array(64),n=[d(),d(),d(),d()],a;for(e||T(r,32),yf(f,r,32),f[0]&=248,f[31]&=127,f[31]|=64,Mf(n,f),Gf(t,n),a=0;a<32;a++)r[a+32]=t[a];return 0}var Rf=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function Xf(t,r){var e,f,n,a;for(f=63;f>=32;--f){for(e=0,n=f-32,a=f-12;n<a;++n)r[n]+=e-16*r[f]*Rf[n-(f-32)],e=Math.floor((r[n]+128)/256),r[n]-=e*256;r[n]+=e,r[f]=0}for(e=0,n=0;n<32;n++)r[n]+=e-(r[31]>>4)*Rf[n],e=r[n]>>8,r[n]&=255;for(n=0;n<32;n++)r[n]-=e*Rf[n];for(f=0;f<32;f++)r[f+1]+=r[f]>>8,t[f]=r[f]&255}function Vf(t){var r=new Float64Array(64),e;for(e=0;e<64;e++)r[e]=t[e];for(e=0;e<64;e++)t[e]=0;Xf(t,r)}function _t(t,r,e,f){var n=new Uint8Array(64),a=new Uint8Array(64),o=new Uint8Array(64),u,y,B=new Float64Array(64),g=[d(),d(),d(),d()];yf(n,f,32),n[0]&=248,n[31]&=127,n[31]|=64;var $=e+64;for(u=0;u<e;u++)t[64+u]=r[u];for(u=0;u<32;u++)t[32+u]=n[32+u];for(yf(o,t.subarray(32),e+32),Vf(o),Mf(g,o),Gf(t,g),u=32;u<64;u++)t[u]=f[u];for(yf(a,t,e+64),Vf(a),u=0;u<64;u++)B[u]=0;for(u=0;u<32;u++)B[u]=o[u];for(u=0;u<32;u++)for(y=0;y<32;y++)B[u+y]+=a[u]*n[y];return Xf(t.subarray(32),B),$}function Rt(t,r){var e=d(),f=d(),n=d(),a=d(),o=d(),u=d(),y=d();return lf(t[2],cf),Zf(t[1],r),sf(n,t[1]),H(a,n,et),hf(n,n,t[2]),uf(a,t[2],a),sf(o,a),sf(u,o),H(y,u,o),H(e,y,n),H(e,e,a),dt(e,e),H(e,e,n),H(e,e,a),H(e,e,a),H(t[0],e,a),sf(f,t[0]),H(f,f,a),ut(f,n)&&H(t[0],t[0],Ot),sf(f,t[0]),H(f,f,a),ut(f,n)?-1:(ht(t[0])===r[31]>>7&&hf(t[0],of,t[0]),H(t[3],t[0],t[1]),0)}function Wf(t,r,e,f){var n,a=new Uint8Array(32),o=new Uint8Array(64),u=[d(),d(),d(),d()],y=[d(),d(),d(),d()];if(e<64||Rt(y,f))return-1;for(n=0;n<e;n++)t[n]=r[n];for(n=0;n<32;n++)t[n+32]=f[n];if(yf(o,t,e),Vf(o),$f(u,y,o),Mf(y,r.subarray(32)),If(u,y),Gf(a,u),e-=64,Kf(r,0,a,0)){for(n=0;n<e;n++)t[n]=0;return-1}for(n=0;n<e;n++)t[n]=r[n+64];return e}var Jf=32,Tf=24,Ef=32,_f=16,Af=32,Pf=32,mf=32,Bf=32,Qf=32,wt=Tf,Tt=Ef,Pt=_f,df=64,vf=32,wf=64,kf=32,ft=64;v.lowlevel={crypto_core_hsalsa20:Sf,crypto_stream_xor:Ff,crypto_stream:ct,crypto_stream_salsa20_xor:ot,crypto_stream_salsa20:it,crypto_onetimeauth:Nf,crypto_onetimeauth_verify:st,crypto_verify_16:at,crypto_verify_32:Kf,crypto_secretbox:zf,crypto_secretbox_open:Df,crypto_scalarmult:Lf,crypto_scalarmult_base:jf,crypto_box_beforenm:Cf,crypto_box_afternm:yt,crypto_box:It,crypto_box_open:Mt,crypto_box_keypair:bt,crypto_hash:yf,crypto_sign:_t,crypto_sign_keypair:qf,crypto_sign_open:Wf,crypto_secretbox_KEYBYTES:Jf,crypto_secretbox_NONCEBYTES:Tf,crypto_secretbox_ZEROBYTES:Ef,crypto_secretbox_BOXZEROBYTES:_f,crypto_scalarmult_BYTES:Af,crypto_scalarmult_SCALARBYTES:Pf,crypto_box_PUBLICKEYBYTES:mf,crypto_box_SECRETKEYBYTES:Bf,crypto_box_BEFORENMBYTES:Qf,crypto_box_NONCEBYTES:wt,crypto_box_ZEROBYTES:Tt,crypto_box_BOXZEROBYTES:Pt,crypto_sign_BYTES:df,crypto_sign_PUBLICKEYBYTES:vf,crypto_sign_SECRETKEYBYTES:wf,crypto_sign_SEEDBYTES:kf,crypto_hash_BYTES:ft,gf:d,D:et,L:Rf,pack25519:gf,unpack25519:Zf,M:H,A:uf,S:sf,Z:hf,pow2523:dt,add:If,set25519:lf,modL:Xf,scalarmult:$f,scalarbase:Mf};function Et(t,r){if(t.length!==Jf)throw new Error("bad key size");if(r.length!==Tf)throw new Error("bad nonce size")}function Yt(t,r){if(t.length!==mf)throw new Error("bad public key size");if(r.length!==Bf)throw new Error("bad secret key size")}function af(){for(var t=0;t<arguments.length;t++)if(!(arguments[t]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function At(t){for(var r=0;r<t.length;r++)t[r]=0}v.randomBytes=function(t){var r=new Uint8Array(t);return T(r,t),r},v.secretbox=function(t,r,e){af(t,r,e),Et(e,r);for(var f=new Uint8Array(Ef+t.length),n=new Uint8Array(f.length),a=0;a<t.length;a++)f[a+Ef]=t[a];return zf(n,f,f.length,r,e),n.subarray(_f)},v.secretbox.open=function(t,r,e){af(t,r,e),Et(e,r);for(var f=new Uint8Array(_f+t.length),n=new Uint8Array(f.length),a=0;a<t.length;a++)f[a+_f]=t[a];return f.length<32||Df(n,f,f.length,r,e)!==0?null:n.subarray(Ef)},v.secretbox.keyLength=Jf,v.secretbox.nonceLength=Tf,v.secretbox.overheadLength=_f,v.scalarMult=function(t,r){if(af(t,r),t.length!==Pf)throw new Error("bad n size");if(r.length!==Af)throw new Error("bad p size");var e=new Uint8Array(Af);return Lf(e,t,r),e},v.scalarMult.base=function(t){if(af(t),t.length!==Pf)throw new Error("bad n size");var r=new Uint8Array(Af);return jf(r,t),r},v.scalarMult.scalarLength=Pf,v.scalarMult.groupElementLength=Af,v.box=function(t,r,e,f){var n=v.box.before(e,f);return v.secretbox(t,r,n)},v.box.before=function(t,r){af(t,r),Yt(t,r);var e=new Uint8Array(Qf);return Cf(e,t,r),e},v.box.after=v.secretbox,v.box.open=function(t,r,e,f){var n=v.box.before(e,f);return v.secretbox.open(t,r,n)},v.box.open.after=v.secretbox.open,v.box.keyPair=function(){var t=new Uint8Array(mf),r=new Uint8Array(Bf);return bt(t,r),{publicKey:t,secretKey:r}},v.box.keyPair.fromSecretKey=function(t){if(af(t),t.length!==Bf)throw new Error("bad secret key size");var r=new Uint8Array(mf);return jf(r,t),{publicKey:r,secretKey:new Uint8Array(t)}},v.box.publicKeyLength=mf,v.box.secretKeyLength=Bf,v.box.sharedKeyLength=Qf,v.box.nonceLength=wt,v.box.overheadLength=v.secretbox.overheadLength,v.sign=function(t,r){if(af(t,r),r.length!==wf)throw new Error("bad secret key size");var e=new Uint8Array(df+t.length);return _t(e,t,t.length,r),e},v.sign.open=function(t,r){if(af(t,r),r.length!==vf)throw new Error("bad public key size");var e=new Uint8Array(t.length),f=Wf(e,t,t.length,r);if(f<0)return null;for(var n=new Uint8Array(f),a=0;a<n.length;a++)n[a]=e[a];return n},v.sign.detached=function(t,r){for(var e=v.sign(t,r),f=new Uint8Array(df),n=0;n<f.length;n++)f[n]=e[n];return f},v.sign.detached.verify=function(t,r,e){if(af(t,r,e),r.length!==df)throw new Error("bad signature size");if(e.length!==vf)throw new Error("bad public key size");var f=new Uint8Array(df+t.length),n=new Uint8Array(df+t.length),a;for(a=0;a<df;a++)f[a]=r[a];for(a=0;a<t.length;a++)f[a+df]=t[a];return Wf(n,f,f.length,e)>=0},v.sign.keyPair=function(){var t=new Uint8Array(vf),r=new Uint8Array(wf);return qf(t,r),{publicKey:t,secretKey:r}},v.sign.keyPair.fromSecretKey=function(t){if(af(t),t.length!==wf)throw new Error("bad secret key size");for(var r=new Uint8Array(vf),e=0;e<r.length;e++)r[e]=t[32+e];return{publicKey:r,secretKey:new Uint8Array(t)}},v.sign.keyPair.fromSeed=function(t){if(af(t),t.length!==kf)throw new Error("bad seed size");for(var r=new Uint8Array(vf),e=new Uint8Array(wf),f=0;f<32;f++)e[f]=t[f];return qf(r,e,!0),{publicKey:r,secretKey:e}},v.sign.publicKeyLength=vf,v.sign.secretKeyLength=wf,v.sign.seedLength=kf,v.sign.signatureLength=df,v.hash=function(t){af(t);var r=new Uint8Array(ft);return yf(r,t,t.length),r},v.hash.hashLength=ft,v.verify=function(t,r){return af(t,r),t.length===0||r.length===0||t.length!==r.length?!1:Yf(t,0,r,0,t.length)===0},v.setPRNG=function(t){T=t},function(){var t=typeof self<"u"?self.crypto||self.msCrypto:null;if(t&&t.getRandomValues){var r=65536;v.setPRNG(function(e,f){var n,a=new Uint8Array(f);for(n=0;n<f;n+=r)t.getRandomValues(a.subarray(n,n+Math.min(f-n,r)));for(n=0;n<f;n++)e[n]=a[n];At(a)})}else typeof Ht<"u"&&(t=$t,t&&t.randomBytes&&v.setPRNG(function(e,f){var n,a=t.randomBytes(f);for(n=0;n<f;n++)e[n]=a[n];At(a)}))}()})(S.exports?S.exports:self.nacl=self.nacl||{})}(tt)),tt.exports}var Xt=qt();const Vt=zt(Xt);document.getElementById("fileInput");document.getElementById("privateKeyInput");document.addEventListener("DOMContentLoaded",function(){document.getElementById("exportButton").addEventListener("click",r0),document.getElementById("fileInput").addEventListener("change",async function(){const S=document.getElementById("fileInput");if(S.files.length===0)return;const v=S.files[0];try{const d=await Wt(v);console.log("Hash calculado:",d);const T=document.getElementById("hashOutput");T.textContent=d,document.getElementById("hashOutputContainer").classList.remove("hidden"),document.getElementById("processButton").classList.remove("hidden")}catch(d){console.error("Error al calcular el hash:",d),alert("Hubo un problema al calcular el hash.")}}),document.getElementById("processButton").addEventListener("click",async()=>{await Jt()}),document.getElementById("generarParClaves").addEventListener("click",kt),document.getElementById("ClavesGeneradasToFile").addEventListener("click",t0)});function Wt(S){return new Promise((v,d)=>{const T=new FileReader;T.onload=async function(){const F=T.result,W=await crypto.subtle.digest("SHA-512",F),cf=Array.from(new Uint8Array(W)).map(xf=>xf.toString(16).padStart(2,"0")).join("");v(cf)},T.onerror=d,T.readAsArrayBuffer(S)})}async function Jt(){const S=document.getElementById("fileInput"),v=document.getElementById("hashOutput").textContent;if(!S||S.files.length===0){alert("Por favor, selecciona un archivo.");return}if(!v){alert("El hash del archivo no ha sido calculado.");return}const d=S.files[0];console.log("Archivo seleccionado:",d.name),console.log("Hash calculado:",v);try{const T=await Kt();alert("Conectado al wallet. Clave pública: "+T.publicKey),console.log("Conectado al wallet. Clave pública:",T.publicKey);const F=await Ft(v,T.publicKey);alert("Archivo firmado con la clave pública del wallet."+F),console.log("Firma obtenida:",F);const W=await Nt(v,F,T.publicKey);alert("Registro en contrato exitoso. ID de transacción: "+W.txid),console.log("Registro en contrato exitoso:",W),Qt(W)}catch(T){console.error("Error al procesar el archivo:",T),alert("Hubo un problema al procesar el archivo.")}}function Qt(S){const v=document.getElementById("hashOutput2"),d=document.getElementById("signatureOutput"),T=document.getElementById("publicKeyOutput"),F=document.getElementById("txidOutput"),W=document.getElementById("timestampOutput");v.textContent=S.Rhash,d.textContent=S.firma,T.textContent=S.clavePublica,F.textContent=S.txid,W.textContent=S.timestamp,document.getElementById("results").classList.remove("hidden")}function kt(){const S=Vt.sign.keyPair(),v=Ut(S.secretKey),d=Ut(S.publicKey);document.getElementById("generatedPrivateKey").textContent=v,document.getElementById("generatedPublicKey").textContent=d,document.getElementById("keyGenResults").classList.remove("hidden")}async function f0(S,v){const d=new TextEncoder,T=crypto.getRandomValues(new Uint8Array(16)),F=crypto.getRandomValues(new Uint8Array(12)),W=await crypto.subtle.importKey("raw",d.encode(v),{name:"PBKDF2"},!1,["deriveKey"]),of=await crypto.subtle.deriveKey({name:"PBKDF2",salt:T,iterations:1e5,hash:"SHA-256"},W,{name:"AES-GCM",length:256},!1,["encrypt"]),cf=await crypto.subtle.encrypt({name:"AES-GCM",iv:F},of,e0(S)),xf=new Uint8Array(T.byteLength+F.byteLength+cf.byteLength);return xf.set(T,0),xf.set(F,T.byteLength),xf.set(new Uint8Array(cf),T.byteLength+F.byteLength),xf}function Bt(S,v){const d=new Blob([v]),T=URL.createObjectURL(d),F=document.createElement("a");F.href=T,F.download=S,document.body.appendChild(F),F.click(),document.body.removeChild(F),URL.revokeObjectURL(T)}async function t0(){const S=document.getElementById("generatedPrivateKey").textContent,v=document.getElementById("generatedPublicKey").textContent,d=prompt("Introduce una contraseña para cifrar la clave privada:");if(!d){alert("Se requiere una contraseña para cifrar.");return}const T=await f0(S,d);Bt("clave_privada.enc",T),Bt("clave_publica.txt",new TextEncoder().encode(v))}function e0(S){if(S.length%2!==0)throw"Hex string must have even number of characters";const v=new Uint8Array(S.length/2);for(let d=0;d<S.length;d+=2)v[d/2]=parseInt(S.substr(d,2),16);return v}function Ut(S){return Array.from(S).map(v=>v.toString(16).padStart(2,"0")).join("")}function r0(){const S=document.getElementById("hashOutput").textContent,v=document.getElementById("signatureOutput").textContent,d=document.getElementById("publicKeyOutput").textContent,T=document.getElementById("txidOutput").textContent,F=document.getElementById("timestampOutput").textContent,W=`Resguardo de Registro en Blockchain:
Hash: ${S}
Firma: ${v}
Clave Pública: ${d}
TxID: ${T}
Fecha de Registro: ${F}`,of=new Blob([W],{type:"text/plain"}),cf=URL.createObjectURL(of),xf=document.createElement("a");xf.href=cf,xf.download="resguardo.txt",document.body.appendChild(xf),xf.click(),document.body.removeChild(xf),URL.revokeObjectURL(cf)}
