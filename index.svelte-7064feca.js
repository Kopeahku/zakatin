import{S as Le,i as Se,s as He,e as g,t as E,j as b,v as sa,c as f,a as c,g as P,d as h,l as m,w as ra,b as i,f as Ne,D as t,x as oa,h as R,n as G,o as Te,p as O,A as ua,H as Re,u as Ve,m as qe}from"../../../chunks/vendor-0de30cc4.js";import{f as d}from"../../../chunks/formatRupiah-2ddf788e.js";import{B as Je,g as Me}from"../../../chunks/ButtonCalculator-fff37b80.js";import{I as qa}from"../../../chunks/InputTel-5f2d7516.js";import{_ as Ue}from"../../../chunks/i18n-7654ee3c.js";import{I as De}from"../../../chunks/InputText-02942120.js";import{p as Ze}from"../../../chunks/stores-d61b6f15.js";import"../../../chunks/variables-50bb92cf.js";import"../../../chunks/Button-c35a360e.js";import"../../../chunks/ShareSocial-3b78c944.js";import"../../../chunks/NotifAlert-716d2d7b.js";import"../../../chunks/WaIcon-37c46d70.js";import"../../../chunks/NavbarAction-a8586e79.js";import"../../../chunks/navbar-02aadfbe.js";import"../../../chunks/BackButton-467bf45a.js";import"../../../chunks/HistoryBack-c00fd5ba.js";function We(e){let r,n;return r=new De({props:{label:"wajib bayar",kind:e[6]?"disabled":"accent-outlined",value:e[19]("page.donasi.wajibMembayarZakat"),addClass:"text-left w-full text-xs md:text-sm bg-[#e9ecef] border-b-2 border-gray-400 font-semibold",removeClass:"border bg-gray-300 font-normal text-sm",disabled:e[6]}}),{c(){sa(r.$$.fragment)},l(o){ra(r.$$.fragment,o)},m(o,_){oa(r,o,_),n=!0},p(o,_){const v={};_[0]&64&&(v.kind=o[6]?"disabled":"accent-outlined"),_[0]&524288&&(v.value=o[19]("page.donasi.wajibMembayarZakat")),_[0]&64&&(v.disabled=o[6]),r.$set(v)},i(o){n||(O(r.$$.fragment,o),n=!0)},o(o){G(r.$$.fragment,o),n=!1},d(o){ua(r,o)}}}function Ke(e){let r,n;return r=new De({props:{label:"tidak wajib bayar",kind:e[6]?"disabled":"accent-outlined",value:e[19]("page.donasi.wajibBayar"),addClass:"text-left w-full text-xs md:text-sm bg-[#e9ecef] border-b-2 border-gray-400 text-[#ff0000] font-semibold",removeClass:"border bg-gray-300 font-normal text-sm",disabled:e[6]}}),{c(){sa(r.$$.fragment)},l(o){ra(r.$$.fragment,o)},m(o,_){oa(r,o,_),n=!0},p(o,_){const v={};_[0]&64&&(v.kind=o[6]?"disabled":"accent-outlined"),_[0]&524288&&(v.value=o[19]("page.donasi.wajibBayar")),_[0]&64&&(v.disabled=o[6]),r.$set(v)},i(o){n||(O(r.$$.fragment,o),n=!0)},o(o){G(r.$$.fragment,o),n=!1},d(o){ua(r,o)}}}function Ye(e){let r,n,o,_=e[19]("page.donasi.modalYangDiPutar")+"",v,ia,D,_a,V,Q,I=e[19]("page.donasi.keuntungan")+"",B,z,k,L,S,K,q=e[19]("page.donasi.piUtang")+"",J,x,j,ca,M,Y,aa=e[19]("page.donasi.utangJatuhTempo")+"",ga,ka,U,va,Z,C,ea=e[19]("page.donasi.kerugian")+"",fa,wa,T,Ea,H,W,pa=e[19]("page.donasi.wajib")+"",Pa,Na,A,N,s,Ia,u,ya,$a,xa,Ra=e[19]("page.donasi.updateEmas")+"",Ja,ae,ee,te,Da=e[19]("page.donasi.hargaEmas")+"",Ma,ne,le,se,Ba,za=(d(parseInt(e[5]))=="RpNaN"?"Rp":d(parseInt(e[5])))+"",Ua,re,oe,ue,La=e[19]("page.donasi.nishabPerTahun")+"",Za,ie,ge,fe,ja,Sa=(d(parseInt(e[8]*12))=="RpNaN"?"Rp":d(parseInt(e[8]*12)))+"",Wa,pe,de,be,da,Ha=e[19]("page.donasi.consultPerdagangan")+"",Ka,me,ta,ba,he,Ta=(e[9]?e[19]("page.donasi.nominalPerdagangan"):" ")+"",Ya,_e,Ca,Va=(e[9]?d(e[7]):0)+"",Fa,Ga,na,w;D=new qa({props:{label:"tabungan",kind:"",useProps:e[0],placeholder:e[19]("page.donasi.inputJumlahModalUsaha"),value:e[18],addClass:"text-left w-full font-normal text-2xl border-b-2 border-gray-200",removeClass:"border"}}),D.$on("input",e[28]),k=new qa({props:{label:"pendapatan",kind:"",useProps:e[1],placeholder:e[19]("page.donasi.inputJumlahKeuntungan"),value:e[17],addClass:"text-left w-full font-normal text-2xl border-b-2 border-gray-200",removeClass:"border"}}),k.$on("input",e[29]),j=new qa({props:{label:"piutang",kind:"",useProps:e[2],placeholder:e[19]("page.donasi.optionalCalculator"),value:e[16],addClass:"text-left w-full font-normal text-2xl border-b-2 border-gray-200",removeClass:"border"}}),j.$on("input",e[30]),U=new qa({props:{label:"hutang",kind:"",useProps:e[3],placeholder:e[19]("page.donasi.optionalCalculator"),value:e[15],addClass:"text-left w-full font-normal text-2xl border-b-2 border-gray-200",removeClass:"border"}}),U.$on("input",e[31]),T=new qa({props:{label:"kerugian",kind:"",useProps:e[4],placeholder:e[19]("page.donasi.optionalCalculator"),value:e[14],addClass:"text-left w-full font-normal text-2xl border-b-2 border-gray-200",removeClass:"border"}}),T.$on("input",e[32]);const ke=[Ke,We],la=[];function ve(a,l){return a[9]?1:0}return A=ve(e),N=la[A]=ke[A](e),na=new Je({props:{link:e[9]?e[10]?`/donasi/${e[11][0]}-zakat-perdagangan?hitungan=`+e[7]:"/donasi/zakat-perdagangan?hitungan="+e[7]+"&waktu="+ze+"&via=kalkulator"+e[20]:e[10]?`/donasi/${e[11][0]}-infaq?hitungan=`+e[7]:"/donasi/infaq?hitungan="+e[7]+"&via=kalkulator"+e[20],caption:e[7]!=0?e[9]?e[10]?"Donasi Sekarang Air Asia":e[19]("page.donasi.tunaiButton"):e[10]?"Infak Sekarang Air Asia":e[19]("page.donasi.infaqButton"):e[19]("page.donasi.requiredNominal"),kind:e[13],isDisabledBtn:e[12],isShareVisible:Fe}}),{c(){r=g("div"),n=g("div"),o=g("label"),v=E(_),ia=b(),sa(D.$$.fragment),_a=b(),V=g("div"),Q=g("label"),B=E(I),z=b(),sa(k.$$.fragment),L=b(),S=g("div"),K=g("label"),J=E(q),x=b(),sa(j.$$.fragment),ca=b(),M=g("div"),Y=g("label"),ga=E(aa),ka=b(),sa(U.$$.fragment),va=b(),Z=g("div"),C=g("label"),fa=E(ea),wa=b(),sa(T.$$.fragment),Ea=b(),H=g("div"),W=g("label"),Pa=E(pa),Na=b(),N.c(),s=b(),Ia=g("div"),u=g("p"),ya=E(`Note:
			`),$a=g("br"),xa=b(),Ja=E(Ra),ae=b(),ee=g("br"),te=b(),Ma=E(Da),ne=E(" (www.harga-emas.org) : "),le=g("br"),se=b(),Ba=g("span"),Ua=E(za),re=b(),oe=g("br"),ue=b(),Za=E(La),ie=E(": "),ge=g("br"),fe=b(),ja=g("span"),Wa=E(Sa),pe=b(),de=g("br"),be=b(),da=g("a"),Ka=E(Ha),me=b(),ta=g("div"),ba=g("h6"),he=E("Total "),Ya=E(Ta),_e=b(),Ca=g("h3"),Fa=E(Va),Ga=b(),sa(na.$$.fragment),this.h()},l(a){r=f(a,"DIV",{class:!0});var l=c(r);n=f(l,"DIV",{class:!0});var X=c(n);o=f(X,"LABEL",{for:!0,class:!0});var ma=c(o);v=P(ma,_),ma.forEach(h),ia=m(X),ra(D.$$.fragment,X),X.forEach(h),_a=m(l),V=f(l,"DIV",{class:!0});var y=c(V);Q=f(y,"LABEL",{for:!0,class:!0});var ha=c(Q);B=P(ha,I),ha.forEach(h),z=m(y),ra(k.$$.fragment,y),y.forEach(h),L=m(l),S=f(l,"DIV",{class:!0});var $=c(S);K=f($,"LABEL",{for:!0,class:!0});var Aa=c(K);J=P(Aa,q),Aa.forEach(h),x=m($),ra(j.$$.fragment,$),$.forEach(h),ca=m(l),M=f(l,"DIV",{class:!0});var F=c(M);Y=f(F,"LABEL",{for:!0,class:!0});var we=c(Y);ga=P(we,aa),we.forEach(h),ka=m(F),ra(U.$$.fragment,F),F.forEach(h),va=m(l),Z=f(l,"DIV",{class:!0});var Oa=c(Z);C=f(Oa,"LABEL",{for:!0,class:!0});var Ee=c(C);fa=P(Ee,ea),Ee.forEach(h),wa=m(Oa),ra(T.$$.fragment,Oa),Oa.forEach(h),Ea=m(l),H=f(l,"DIV",{class:!0});var Qa=c(H);W=f(Qa,"LABEL",{for:!0,class:!0});var Pe=c(W);Pa=P(Pe,pa),Pe.forEach(h),Na=m(Qa),N.l(Qa),Qa.forEach(h),s=m(l),Ia=f(l,"DIV",{class:!0});var Ie=c(Ia);u=f(Ie,"P",{class:!0});var p=c(u);ya=P(p,`Note:
			`),$a=f(p,"BR",{}),xa=m(p),Ja=P(p,Ra),ae=m(p),ee=f(p,"BR",{}),te=m(p),Ma=P(p,Da),ne=P(p," (www.harga-emas.org) : "),le=f(p,"BR",{}),se=m(p),Ba=f(p,"SPAN",{class:!0});var Be=c(Ba);Ua=P(Be,za),Be.forEach(h),re=m(p),oe=f(p,"BR",{}),ue=m(p),Za=P(p,La),ie=P(p,": "),ge=f(p,"BR",{}),fe=m(p),ja=f(p,"SPAN",{class:!0});var je=c(ja);Wa=P(je,Sa),je.forEach(h),pe=m(p),de=f(p,"BR",{}),be=m(p),da=f(p,"A",{href:!0,target:!0});var Ce=c(da);Ka=P(Ce,Ha),Ce.forEach(h),p.forEach(h),Ie.forEach(h),me=m(l),ta=f(l,"DIV",{class:!0});var Xa=c(ta);ba=f(Xa,"H6",{class:!0});var ce=c(ba);he=P(ce,"Total "),Ya=P(ce,Ta),ce.forEach(h),_e=m(Xa),Ca=f(Xa,"H3",{class:!0});var Ae=c(Ca);Fa=P(Ae,Va),Ae.forEach(h),Xa.forEach(h),l.forEach(h),Ga=m(a),ra(na.$$.fragment,a),this.h()},h(){i(o,"for","floatingPendapatan"),i(o,"class","svelte-n8izbb"),i(n,"class","mb-3"),i(Q,"for","floatingHutang"),i(Q,"class","svelte-n8izbb"),i(V,"class","mb-3"),i(K,"for","floatingHutang"),i(K,"class","svelte-n8izbb"),i(S,"class","mb-3"),i(Y,"for","floatingHutang"),i(Y,"class","svelte-n8izbb"),i(M,"class","mb-3"),i(C,"for","floatingHutang"),i(C,"class","svelte-n8izbb"),i(Z,"class","mb-3"),i(W,"for","floatingPenghasilan"),i(W,"class","ps-2 svelte-n8izbb"),i(H,"class","disabled-form mb-1 svelte-n8izbb"),i(Ba,"class","font-semibold"),i(ja,"class","font-semibold"),i(da,"href","https://api.whatsapp.com/send/?phone=6281573001555&text=Assalamualaikum%20Rumahzakat%20,%20saya%20mau%20konsultasi"),i(da,"target","_blank"),i(u,"class","svelte-n8izbb"),i(Ia,"class","bg-white"),i(ba,"class","total-zakat text-sm"),i(Ca,"class","font-bold"),i(ta,"class","text-center pt-3 md:mt-1 md:mb-[70px] mb-[55px] bg-white -mx-[16px]"),i(r,"class","p-4")},m(a,l){Ne(a,r,l),t(r,n),t(n,o),t(o,v),t(n,ia),oa(D,n,null),t(r,_a),t(r,V),t(V,Q),t(Q,B),t(V,z),oa(k,V,null),t(r,L),t(r,S),t(S,K),t(K,J),t(S,x),oa(j,S,null),t(r,ca),t(r,M),t(M,Y),t(Y,ga),t(M,ka),oa(U,M,null),t(r,va),t(r,Z),t(Z,C),t(C,fa),t(Z,wa),oa(T,Z,null),t(r,Ea),t(r,H),t(H,W),t(W,Pa),t(H,Na),la[A].m(H,null),t(r,s),t(r,Ia),t(Ia,u),t(u,ya),t(u,$a),t(u,xa),t(u,Ja),t(u,ae),t(u,ee),t(u,te),t(u,Ma),t(u,ne),t(u,le),t(u,se),t(u,Ba),t(Ba,Ua),t(u,re),t(u,oe),t(u,ue),t(u,Za),t(u,ie),t(u,ge),t(u,fe),t(u,ja),t(ja,Wa),t(u,pe),t(u,de),t(u,be),t(u,da),t(da,Ka),t(r,me),t(r,ta),t(ta,ba),t(ba,he),t(ba,Ya),t(ta,_e),t(ta,Ca),t(Ca,Fa),Ne(a,Ga,l),oa(na,a,l),w=!0},p(a,l){(!w||l[0]&524288)&&_!==(_=a[19]("page.donasi.modalYangDiPutar")+"")&&R(v,_);const X={};l[0]&1&&(X.useProps=a[0]),l[0]&524288&&(X.placeholder=a[19]("page.donasi.inputJumlahModalUsaha")),l[0]&262144&&(X.value=a[18]),D.$set(X),(!w||l[0]&524288)&&I!==(I=a[19]("page.donasi.keuntungan")+"")&&R(B,I);const ma={};l[0]&2&&(ma.useProps=a[1]),l[0]&524288&&(ma.placeholder=a[19]("page.donasi.inputJumlahKeuntungan")),l[0]&131072&&(ma.value=a[17]),k.$set(ma),(!w||l[0]&524288)&&q!==(q=a[19]("page.donasi.piUtang")+"")&&R(J,q);const y={};l[0]&4&&(y.useProps=a[2]),l[0]&524288&&(y.placeholder=a[19]("page.donasi.optionalCalculator")),l[0]&65536&&(y.value=a[16]),j.$set(y),(!w||l[0]&524288)&&aa!==(aa=a[19]("page.donasi.utangJatuhTempo")+"")&&R(ga,aa);const ha={};l[0]&8&&(ha.useProps=a[3]),l[0]&524288&&(ha.placeholder=a[19]("page.donasi.optionalCalculator")),l[0]&32768&&(ha.value=a[15]),U.$set(ha),(!w||l[0]&524288)&&ea!==(ea=a[19]("page.donasi.kerugian")+"")&&R(fa,ea);const $={};l[0]&16&&($.useProps=a[4]),l[0]&524288&&($.placeholder=a[19]("page.donasi.optionalCalculator")),l[0]&16384&&($.value=a[14]),T.$set($),(!w||l[0]&524288)&&pa!==(pa=a[19]("page.donasi.wajib")+"")&&R(Pa,pa);let Aa=A;A=ve(a),A===Aa?la[A].p(a,l):(qe(),G(la[Aa],1,1,()=>{la[Aa]=null}),Te(),N=la[A],N?N.p(a,l):(N=la[A]=ke[A](a),N.c()),O(N,1),N.m(H,null)),(!w||l[0]&524288)&&Ra!==(Ra=a[19]("page.donasi.updateEmas")+"")&&R(Ja,Ra),(!w||l[0]&524288)&&Da!==(Da=a[19]("page.donasi.hargaEmas")+"")&&R(Ma,Da),(!w||l[0]&32)&&za!==(za=(d(parseInt(a[5]))=="RpNaN"?"Rp":d(parseInt(a[5])))+"")&&R(Ua,za),(!w||l[0]&524288)&&La!==(La=a[19]("page.donasi.nishabPerTahun")+"")&&R(Za,La),(!w||l[0]&256)&&Sa!==(Sa=(d(parseInt(a[8]*12))=="RpNaN"?"Rp":d(parseInt(a[8]*12)))+"")&&R(Wa,Sa),(!w||l[0]&524288)&&Ha!==(Ha=a[19]("page.donasi.consultPerdagangan")+"")&&R(Ka,Ha),(!w||l[0]&524800)&&Ta!==(Ta=(a[9]?a[19]("page.donasi.nominalPerdagangan"):" ")+"")&&R(Ya,Ta),(!w||l[0]&640)&&Va!==(Va=(a[9]?d(a[7]):0)+"")&&R(Fa,Va);const F={};l[0]&3712&&(F.link=a[9]?a[10]?`/donasi/${a[11][0]}-zakat-perdagangan?hitungan=`+a[7]:"/donasi/zakat-perdagangan?hitungan="+a[7]+"&waktu="+ze+"&via=kalkulator"+a[20]:a[10]?`/donasi/${a[11][0]}-infaq?hitungan=`+a[7]:"/donasi/infaq?hitungan="+a[7]+"&via=kalkulator"+a[20]),l[0]&525952&&(F.caption=a[7]!=0?a[9]?a[10]?"Donasi Sekarang Air Asia":a[19]("page.donasi.tunaiButton"):a[10]?"Infak Sekarang Air Asia":a[19]("page.donasi.infaqButton"):a[19]("page.donasi.requiredNominal")),l[0]&8192&&(F.kind=a[13]),l[0]&4096&&(F.isDisabledBtn=a[12]),na.$set(F)},i(a){w||(O(D.$$.fragment,a),O(k.$$.fragment,a),O(j.$$.fragment,a),O(U.$$.fragment,a),O(T.$$.fragment,a),O(N),O(na.$$.fragment,a),w=!0)},o(a){G(D.$$.fragment,a),G(k.$$.fragment,a),G(j.$$.fragment,a),G(U.$$.fragment,a),G(T.$$.fragment,a),G(N),G(na.$$.fragment,a),w=!1},d(a){a&&h(r),ua(D),ua(k),ua(j),ua(U),ua(T),la[A].d(),a&&h(Ga),ua(na,a)}}}let ze=2,Fe=!1;function Ge(e,r,n){let o,_,v,ia,D,_a,V;Re(e,Ze,s=>n(39,_a=s)),Re(e,Ue,s=>n(19,V=s));let Q=_a.url.search.replace("?","&"),{penghasilan:I=""}=r,{pendapatan:B=""}=r,{piutang:z=""}=r,{hutang:k=""}=r,{rugi:L=""}=r,{hargaEmas:S}=r,{disabled:K=!0}=r,q=0,J=0,x=0,j=!1,ca=null,M=null,Y=null,aa=null,ga=null,ka=0;function U(){J>x*12||ka>x*12?n(9,j=!0):n(9,j=!1)}let va=!1,Z;Ve(async()=>{n(5,S=await Me());const s=new URLSearchParams(window.location.search);s.has("campaign")&&(n(10,va=!0),n(11,Z=s.get("campaign").split("-")))});function C(){M=I*.025,ca=B*.025,Y=z*.025,aa=L*.025,ga=k*.025,ka=parseInt(I+B+z-L-k),n(7,q=parseInt(M+ca+Y-ga-aa)),n(27,J=parseInt(I+B+z-L-k)),(q<0||J<0)&&(n(7,q=0),n(27,J=0))}function ea(s){n(0,I=Number(s.target.value.replace(/[^0-9]/g,""))),s.target.value=d(I),n(18,o=d(I,!0)),C()}function fa(s){n(1,B=Number(s.target.value.replace(/[^0-9]/g,""))),s.target.value=d(B),n(17,_=d(B,!0)),C()}function wa(s){n(2,z=Number(s.target.value.replace(/[^0-9]/g,""))),s.target.value=d(z),n(16,v=d(z,!0)),C()}function T(s){n(3,k=Number(s.target.value.replace(/[^0-9]/g,""))),s.target.value=d(k),n(15,ia=d(k,!0)),C()}function Ea(s){n(4,L=Number(s.target.value.replace(/[^0-9]/g,""))),s.target.value=d(L),n(14,D=d(L,!0)),C()}let H=!0,W="disabled";const pa=s=>ea(s),Pa=s=>fa(s),Na=s=>wa(s),A=s=>T(s),N=s=>Ea(s);return e.$$set=s=>{"penghasilan"in s&&n(0,I=s.penghasilan),"pendapatan"in s&&n(1,B=s.pendapatan),"piutang"in s&&n(2,z=s.piutang),"hutang"in s&&n(3,k=s.hutang),"rugi"in s&&n(4,L=s.rugi),"hargaEmas"in s&&n(5,S=s.hargaEmas),"disabled"in s&&n(6,K=s.disabled)},e.$$.update=()=>{e.$$.dirty[0]&134217728&&J&&U(),e.$$.dirty[0]&32&&n(8,x=S*85/12),e.$$.dirty[0]&1&&n(18,o=d(I,!0)),e.$$.dirty[0]&2&&n(17,_=d(B,!0)),e.$$.dirty[0]&4&&n(16,v=d(z,!0)),e.$$.dirty[0]&8&&n(15,ia=d(k,!0)),e.$$.dirty[0]&16&&n(14,D=d(L,!0)),e.$$.dirty[0]&128&&(q>0?(n(12,H=!1),n(13,W="primary")):(n(12,H=!0),n(13,W="disabled")))},[I,B,z,k,L,S,K,q,x,j,va,Z,H,W,D,ia,v,_,o,V,Q,ea,fa,wa,T,Ea,C,J,pa,Pa,Na,A,N]}class gt extends Le{constructor(r){super();Se(this,r,Ge,Ye,He,{penghasilan:0,pendapatan:1,piutang:2,hutang:3,rugi:4,hargaEmas:5,disabled:6,validate:26},null,[-1,-1])}get validate(){return this.$$.ctx[26]}}export{gt as default};
