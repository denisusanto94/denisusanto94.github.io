(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fec9"],{b665:function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"content",class:{"blur-content":t.showDialog}},[o("CCard",[t.viewTable?o("div",[o("CCardBody",[o("CRow",[o("c-col",{attrs:{sm:"6",align:"left"}},[o("h4",[t._v("DAFTAR PRODUKTIFITAS")])]),o("c-col",{attrs:{sm:"6",align:"right"}},[t._v("Terdapat "),o("b",[t._v(t._s(t.totalData))]),t._v(" Produktifitas")])],1),o("CRow",[o("c-col",{attrs:{sm:"2",align:"left"}},[o("CSelect",{attrs:{options:["Polres"]}})],1),o("c-col",{attrs:{sm:"2",align:"left"}},[o("CSelect",{attrs:{options:["Status"]}})],1),o("c-col",{attrs:{sm:"8 input-box-search",align:"right"}},[o("md-field",{staticStyle:{padding:"0px"}},[o("md-input",{attrs:{placeholder:"CARI"},model:{value:t.searched,callback:function(a){t.searched=a},expression:"searched"}}),o("CButton",{on:{click:t.searchData}},[o("md-icon",[t._v(t._s(t.searchIcon))])],1)],1)],1)],1),o("CRow",[o("c-col",{attrs:{sm:"12"}},[o("md-table",{attrs:{"md-card":""},on:{"md-selected":t.onSelect},scopedSlots:t._u([{key:"md-table-alternate-header",fn:function(a){var s=a.count;return o("md-table-toolbar",{},[o("div",{staticClass:"md-toolbar-section-start"},[t._v(t._s(t.getAlternateLabel(s)))]),o("div",{staticClass:"md-toolbar-section-end"},[o("md-button",{staticClass:"md-icon-button"},[o("md-icon",[t._v("delete")])],1)],1)])}},{key:"md-table-row",fn:function(a){var s=a.item;return o("md-table-row",{attrs:{"md-selectable":"multiple"}},[o("md-table-cell",{attrs:{"md-label":"ID","md-sort-by":"id"}},[t._v(t._s(s.id))]),o("md-table-cell",{attrs:{"md-label":"NOMOR LP","md-sort-by":"nolp"}},[t._v(t._s(s.nolp))]),o("md-table-cell",{attrs:{"md-label":"POLRES","md-sort-by":"polres"}},[t._v(t._s(s.polres))]),o("md-table-cell",{attrs:{"md-label":"TANGGAL LAKA","md-sort-by":"tanggal_laka"}},[t._v(t._s(s.tanggal_laka))]),o("md-table-cell",{attrs:{"md-label":"STATUS","md-sort-by":"status"}},[t._v(t._s(s.status))]),o("md-table-cell",{attrs:{"md-sort-by":"id"}},[o("md-menu",{attrs:{"md-direction":"bottom-start"}},[o("md-button",{attrs:{"md-menu-trigger":""}},[o("md-icon",[t._v("more_vert")])],1),o("md-menu-content",[o("md-menu-item",{on:{click:t.openDialog}},[t._v("View")])],1)],1)],1)],1)}}],null,!1,1508500475),model:{value:t.data,callback:function(a){t.data=a},expression:"data"}})],1)],1),o("CRow",{staticStyle:{"margin-top":"1rem","margin-bottom":"3rem"}},[o("CCol",{attrs:{sm:"12",align:"right"}},[o("CButton",[o("md-icon",[t._v("chevron_left")])],1),t._v(" Halaman "),o("b",[t._v("1")]),t._v(" dari 2 "),o("CButton",[o("md-icon",[t._v("chevron_right")])],1)],1)],1)],1)],1):t._e(),t.viewDetails?o("div",[o("CButton",{on:{click:t.backToList}},[o("md-icon",[t._v("arrow_back")])],1),t._v(" Kembali ke Daftar Produktifitas "),o("CCardBody",[o("CRow",[o("c-col",{attrs:{sm:"6",align:"left"}},[t._v("Nomor LP "),o("b",[t._v("#1123SDGOIL")])]),o("c-col",{attrs:{sm:"6",align:"right"}},[t._v("Status LP "),o("b",[t._v("A")])])],1),o("CRow",[o("c-col",{attrs:{sm:"12",align:"left"}},[t._v("Tanggal Tindak Lanjut "),o("b",[t._v("15 Mei 2021")])])],1),o("CRow",[o("c-col",{attrs:{sm:"12",align:"left"}},[t._v("TAHAPAN TINDAK LANJUT LP")])],1),o("CRow",[o("c-col",{staticClass:"card-produktifitas",attrs:{sm:"6"}},[o("CCard",{staticStyle:{"background-color":"#242783"},attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text",staticStyle:{color:"white"},attrs:{"text-color":"white"}},[t._v("1. SURAT PERINTAH TUGAS")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse=!t.collapse}}},[o("md-icon",{staticStyle:{color:"white"}},[t._v("expand_more")])],1)],1)],1)],1),o("CCollapse",{attrs:{show:t.collapse}},[o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT PERINTAH TUGAS")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT PERINTAH PENYELIDIKAN")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT PERINTAH PENYIDIKAN")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT DIMULAINYANYA PENYIDIKAN / SPDB")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("BERITA ACARA PEMERIKSAAN DI TKP")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("2 .PANGGILAN SAKSI")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse2=!t.collapse2}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCollapse",{attrs:{show:t.collapse2}},[o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT PERINTAH TUGAS")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT PERINTAH PENYELIDIKAN")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT PERINTAH PENYIDIKAN")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("SURAT DIMULAINYANYA PENYIDIKAN / SPDB")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("b",{staticClass:"card-text"},[t._v("BERITA ACARA PEMERIKSAAN DI TKP")])]),o("CCol",{attrs:{sm:"4"}},[o("CButton",[o("md-icon",[t._v("edit")])],1),o("CButton",[o("md-icon",[t._v("file_download")])],1),o("CButton",[o("md-icon",[t._v("remove_circle_outline")])],1)],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("3. PERINTAH PENAGKAPAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse3=!t.collapse3}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("4. PERINTAH PENAHANAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse3=!t.collapse3}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("5. PERINTAH IJIN PENGGELEDAHAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse3=!t.collapse3}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("6. PERINTAH IJIN PENYITAAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse3=!t.collapse3}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1)],1),o("c-col",{staticClass:"card-produktifitas",attrs:{sm:"6"}},[o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("7. PERMINTAAN PERSETUJUAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("8 .PERMINTAAN BANTUAN PEMERIKSAAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse8=!t.collapse8}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("9. PERMINTAAN BLOKIR")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("10. PERINTAH PENAHANAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse3=!t.collapse3}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1),o("CCard",{attrs:{"body-wrapper":""}},[o("CRow",[o("CCol",{attrs:{sm:"10"}},[o("b",{staticClass:"card-text"},[t._v("11. PEMBERITAHUAN")])]),o("CCol",{attrs:{sm:"2",align:"right"}},[o("CButton",{on:{click:function(a){t.collapse3=!t.collapse3}}},[o("md-icon",[t._v("expand_more")])],1)],1)],1)],1)],1)],1)],1)],1):t._e()])],1)},l=[],e=o("bc3a"),c=o.n(e),r={name:"AdvancedTables",data:function(){return{searched:"",showDialog:!1,selected:[],data:[],searchIcon:null,totalData:"0",collapse:!0,collapse2:!1,bgColor:null,textColor:null,viewDetails:!1,viewTable:!0}},mounted:function(){var t=this;c.a.get("../data.json").then((function(a){t.data=a.data.data_produktivitas.data,t.searchIcon="search",t.totalData=a.data.data_produktivitas.total_data}))},methods:{onSelect:function(t){this.selected=t},getAlternateLabel:function(t){var a="";return t>1&&(a="s"),"".concat(t," user").concat(a," selected")},searchData:function(){for(var t=this,a=this.searched,o=[],s=0;s<this.data.length;s++)this.data[s].id!=a&&this.data[s].nolp!=a&&this.data[s].polres!=a&&this.data[s].tanggal_laka!=a||o.push(this.data[s]);this.data=o,"clear"==this.searchIcon?(this.searchIcon="search",this.searched=null,c.a.get("../data.json").then((function(a){t.data=a.data.data_produktivitas.data}))):this.searchIcon="clear"},openDialog:function(){this.viewTable=!1,this.viewDetails=!0},backToList:function(){this.viewTable=!0,this.viewDetails=!1},batalDialog:function(){this.showDialog=!1,this.$store.commit("toggleSidebarDesktop")}}},n=r,i=o("2877"),d=Object(i["a"])(n,s,l,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20fec9.2318df78.js.map