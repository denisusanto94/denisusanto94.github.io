(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43c5c170"],{"03c7":function(e,a,t){e.exports=t.p+"img/icon.df38cc36.png"},"0a2a":function(e,a,t){"use strict";t("9d76")},2377:function(e,a,t){},"5b7e":function(e,a,t){"use strict";t("2377")},9043:function(e,a,t){e.exports=t.p+"img/logo-sidebar.dcd0a85a.png"},"9d76":function(e,a,t){},f593:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"c-app"},[t("TheSidebar"),t("CWrapper",[t("TheHeader"),t("div",{staticClass:"c-body"},[t("main",{staticClass:"c-main"},[t("CContainer",{attrs:{fluid:""}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view",{key:e.$route.path})],1)],1)],1)]),t("TheFooter")],1)],1)},o=[],r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("CSidebar",{class:{"blur-content":this.componenBlur},attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(a){return e.$store.commit("set",["sidebarShow",a])}}},[n("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[n("img",{staticClass:"c-sidebar-brand-full",attrs:{size:"custom-size",name:"logo",src:t("9043"),width:"240"}}),n("img",{staticClass:"c-sidebar-brand-minimized",attrs:{size:"custom-size",name:"logo",src:t("03c7")}})]),n("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}})],1)},i=[],s=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"BERANDA",to:"/beranda",icon:"communication"},{_name:"CSidebarNavDropdown",name:"ANGGOTA",route:"/anggota",icon:"people",items:[{name:"DAFTAR ANGGOTA",to:"/anggota/daftar-anggota"},{name:"PENGGUNA APLIKASI",to:"/anggota/pengguna-aplikasi"}]},{_name:"CSidebarNavDropdown",name:"MANAJEMEN AKSES",route:"/manajemen-akses",icon:"lock",items:[{name:"MANAJEMEN AKSES",to:"/manajemen/manajemen-akses"},{name:"MANAJEMEN ROLE",to:"/manajemen/manajemen-role"}]},{_name:"CSidebarNavDropdown",name:"LAPORAN",route:"/laporan",icon:"report",items:[{name:"PERKARA",to:"/laporan/perkara"},{name:"PRODUKTIVITAS",to:"/laporan/produktivitas"},{name:"REKAP",to:"/laporan/rekap"}]},{_name:"CSidebarNavDropdown",name:"DPO / DPB",route:"/dpo-dpb",icon:"alert",items:[{name:"DPO",to:"/dpo-dpb/dpo"},{name:"DPB",to:"/dpo-dpb/dpb"}]},{_name:"CSidebarNavDropdown",name:"KATEGORI",route:"/kategori",icon:"kategori",items:[{name:"LAYANAN DARURAT",to:"/kategori/layanan-darurat"},{name:"DAFTAR WILAYAH",to:"/kategori/daftar-wilayah"},{name:"STRUKTUR ORGANISASI",to:"/kategori/struktur-organisasi"}]}]}],c={name:"TheSidebar",nav:s,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}},data:function(){return{componenBlur:this.$store.state.openDialog}}},m=c,d=t("2877"),l=Object(d["a"])(m,r,i,!1,null,null,null),u=l.exports,p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[t("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(a){return e.$store.commit("toggleSidebarMobile")}}},[t("md-icon",{staticStyle:{color:"white"}},[e._v("menu")])],1),t("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}}),t("CHeaderNav",{staticClass:"d-md-down-none mr-auto"}),t("CHeaderNav",{staticClass:"mr-4"},[t("TheHeaderDropdownAccnt")],1)],1)},g=[],h=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[t("CHeaderNavLink",[t("div",{staticClass:"c-avatar"},[t("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/6.jpg"}}),t("p",[e._v("Admin")]),t("md-icon",{staticStyle:{color:"white","margin-right":"40px","margin-left":"-10px"}},[e._v("expand_more")])],1)])]},proxy:!0}])},[t("CDropdownItem",{on:{click:function(a){return e.LogoutUser()}}},[t("CIcon",{attrs:{name:"cil-lock-locked"}}),e._v(" Logout ")],1)],1)},b=[],f={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}},methods:{LogoutUser:function(){localStorage.removeItem("LoggedUser"),location.href="/#/pages/login"}}},A=f,C=(t("0a2a"),Object(d["a"])(A,h,b,!1,null,"f53aebd0",null)),v=C.exports,w={name:"TheHeader",components:{TheHeaderDropdownAccnt:v}},_=w,S=Object(d["a"])(_,p,g,!1,null,null,null),N=S.exports,k=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("CFooter",{attrs:{fixed:!1}},[t("div",[t("a",{attrs:{href:"/",target:"_blank"}},[e._v("Admin")]),t("span",{staticClass:"ml-1"},[e._v("© "+e._s((new Date).getFullYear())+" Admin.")])]),t("div",{staticClass:"mfs-auto"},[t("span",{staticClass:"mr-1",attrs:{target:"_blank"}},[e._v("Powered by")]),t("a",{attrs:{href:"/"}},[e._v("Admin")])])])},T=[],D={name:"TheFooter"},E=D,R=Object(d["a"])(E,k,T,!1,null,null,null),x=R.exports,O={name:"TheContainer",components:{TheSidebar:u,TheHeader:N,TheFooter:x}},H=O,I=(t("5b7e"),Object(d["a"])(H,n,o,!1,null,"3b21ac01",null));a["default"]=I.exports}}]);
//# sourceMappingURL=chunk-43c5c170.3a6c66c9.js.map