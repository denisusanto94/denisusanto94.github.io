(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab85e"],{1647:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",class:{"blur-content":t.showDialog}},[e("CCard",[e("CCardBody",[e("CRow",{staticClass:"row-content"},[e("c-col",{attrs:{sm:"6",align:"left"}},[e("h4",[t._v("DAFTAR STRUKTUR ORANISASI")])]),e("c-col",{attrs:{sm:"6",align:"right"}},[t._v("Terdapat "),e("b",[t._v(t._s(t.totalData))]),t._v(" Struktur Organisasi")])],1),e("CRow",[e("c-col",{attrs:{sm:"2",align:"left"}},[e("CSelect",{attrs:{options:["Pangkat","Kepala","Staff"]}})],1),e("c-col",{attrs:{sm:"2",align:"left"}},[e("CSelect",{attrs:{options:["Satatus","Aktif","Tidak Aktif"]}})],1),e("c-col",{attrs:{sm:"4"}}),e("c-col",{attrs:{sm:"4 input-box-search",align:"right"}},[e("md-field",{staticStyle:{padding:"0px"}},[e("md-input",{attrs:{placeholder:"CARI"},model:{value:t.searched,callback:function(a){t.searched=a},expression:"searched"}}),e("CButton",{on:{click:t.searchData}},[e("md-icon",[t._v(t._s(t.searchIcon))])],1)],1)],1)],1),e("CRow",[e("c-col",{attrs:{sm:"12"}},[e("md-table",{attrs:{"md-card":""},on:{"md-selected":t.onSelect},scopedSlots:t._u([{key:"md-table-alternate-header",fn:function(a){var s=a.count;return e("md-table-toolbar",{},[e("div",{staticClass:"md-toolbar-section-start"},[t._v(t._s(t.getAlternateLabel(s)))]),e("div",{staticClass:"md-toolbar-section-end"},[e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("delete")])],1)],1)])}},{key:"md-table-row",fn:function(a){var s=a.item;return e("md-table-row",{attrs:{"md-selectable":"multiple"}},[e("md-table-cell",{attrs:{"md-label":"ID","md-sort-by":"id"}},[t._v(t._s(s.id))]),e("md-table-cell",{attrs:{"md-label":"NAMA DEPAN","md-sort-by":"nama_depan"}},[t._v(t._s(s.nama_depan))]),e("md-table-cell",{attrs:{"md-label":"NAMA BELAKANG","md-sort-by":"nama_belakang"}},[t._v(t._s(s.nama_belakang))]),e("md-table-cell",{attrs:{"md-label":"NRP","md-sort-by":"nrp"}},[t._v(t._s(s.nrp))]),e("md-table-cell",{attrs:{"md-label":"PANGKAT","md-sort-by":"pangkat"}},[t._v(t._s(s.nrp))]),e("md-table-cell",{attrs:{"md-label":"SEBAGAI KEPALA","md-sort-by":"sebagai_kepala"}},[t._v(t._s(s.sebagai_kepala))]),e("md-table-cell",{attrs:{"md-label":"STATUS","md-sort-by":"status"}},[t._v(t._s(s.nrp))]),e("md-table-cell",{attrs:{"md-sort-by":"id"}},[e("md-menu",{attrs:{"md-direction":"bottom-start"}},[e("md-button",{attrs:{"md-menu-trigger":""}},[e("md-icon",[t._v("more_vert")])],1),e("md-menu-content",[e("md-menu-item",{on:{click:t.openDialog}},[t._v("Edit")]),e("md-menu-item",[t._v("Non Aktifkan")])],1)],1)],1)],1)}}]),model:{value:t.data,callback:function(a){t.data=a},expression:"data"}})],1)],1),e("CRow",{staticStyle:{"margin-top":"1rem","margin-bottom":"3rem"}},[e("CCol",{attrs:{sm:"12",align:"right"}},[e("CButton",[e("md-icon",[t._v("chevron_left")])],1),t._v(" Halaman "),e("b",[t._v("1")]),t._v(" dari 2 "),e("CButton",[e("md-icon",[t._v("chevron_right")])],1)],1)],1),e("CRow",[e("c-col",{attrs:{align:"right"}},[e("md-button",{staticClass:"md-fab md-primary",staticStyle:{"background-color":"green"},on:{click:t.openDialog}},[e("md-icon",[t._v("add")])],1)],1)],1)],1)],1),e("md-dialog",{attrs:{"md-active":t.showDialog,"md-fullscreen":!0,"md-backdrop":!1},on:{"update:mdActive":function(a){t.showDialog=a},"update:md-active":function(a){t.showDialog=a}}},[e("md-dialog-title",[e("h4",[t._v("TAMBAH DPB")])]),e("md-dialog-content",[e("CRow",[e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("md-input",{attrs:{placeholder:"Nama Depan*"}})],1)],1),e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("md-input",{attrs:{placeholder:"Nama Belakang"}})],1)],1)],1),e("CRow",[e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("md-input",{attrs:{placeholder:"NRP*"}})],1)],1),e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("md-input",{attrs:{placeholder:"Posisi / Jabatan*"}})],1)],1)],1),e("CRow",[e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("label",{attrs:{for:"movie"}},[t._v("Pilih POLDA")]),e("md-select",[e("md-option",{attrs:{value:"fight-club"}},[t._v("Polda Jabar")]),e("md-option",{attrs:{value:"godfather"}},[t._v("Polda Jateng")])],1)],1)],1),e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("label",{attrs:{for:"movie"}},[t._v("Pilih POLRES")]),e("md-select",[e("md-option",{attrs:{value:"fight-club"}},[t._v("Polres Jabar")]),e("md-option",{attrs:{value:"godfather"}},[t._v("Polres Jateng")])],1)],1)],1)],1),e("CRow",[e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("md-input",{attrs:{placeholder:"Sebagai Kepala"}})],1)],1),e("CCol",{attrs:{sm:"6 input-box"}},[e("md-field",[e("md-input",{attrs:{placeholder:"Pangkat"}})],1)],1)],1),e("CRow",[e("CCol",{attrs:{sm:"6",align:"left"}},[e("md-button",{staticClass:"md-raised"},[t._v("SIMPAN")])],1),e("CCol",{attrs:{sm:"6",align:"right"},on:{click:t.batalDialog}},[e("md-button",[t._v("BATAL")])],1)],1)],1)],1)],1)},l=[],o=e("bc3a"),n=e.n(o),d={name:"AdvancedTables",data:function(){return{searched:"",showDialog:!1,selected:[],data:[],searchIcon:null,totalData:"0"}},mounted:function(){var t=this;n.a.get("../data.json").then((function(a){t.data=a.data.struktur_organisasi.data,t.searchIcon="search",t.totalData=a.data.struktur_organisasi.total_data}))},methods:{onSelect:function(t){this.selected=t},getAlternateLabel:function(t){var a="";return t>1&&(a="s"),"".concat(t," user").concat(a," selected")},searchData:function(){for(var t=this,a=this.searched,e=[],s=0;s<this.data.length;s++)this.data[s].id!=a&&this.data[s].nama_depan!=a&&this.data[s].nama_belakang!=a&&this.data[s].nrp!=a&&this.data[s].pangkat!=a&&this.data[s].sebagai_kepala!=a&&this.data[s].status!=a||e.push(this.data[s]);this.data=e,"clear"==this.searchIcon?(this.searchIcon="search",this.searched=null,n.a.get("../data.json").then((function(a){t.data=a.data.struktur_organisasi.data}))):this.searchIcon="clear"},openDialog:function(){this.showDialog=!0,this.$store.commit("toggleSidebarDesktop")},batalDialog:function(){this.showDialog=!1,this.$store.commit("toggleSidebarDesktop")}}},i=d,r=e("2877"),c=Object(r["a"])(i,s,l,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ab85e.0b4e4dec.js.map