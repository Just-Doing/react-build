var fs = require('fs');
var UglifyJS = require('uglify-js');

fs.writeFileSync("kendo.grid.all.min.js", UglifyJS.minify({

    "kendo.core.min.js": fs.readFileSync("../js/kendo.core.min.js", "utf8"),
    "kendo.data.min.js": fs.readFileSync("../js/kendo.data.min.js", "utf8"),
    "kendo.data.odata.min.js": fs.readFileSync("../js/kendo.data.odata.min.js", "utf8"),
    "kendo.data.xml.min.js": fs.readFileSync("../js/kendo.data.xml.min.js", "utf8"),
    "kendo.pager.min.js": fs.readFileSync("../js/kendo.pager.min.js", "utf8"),
    "kendo.editable.min.js": fs.readFileSync("../js/kendo.editable.min.js", "utf8"),
    "kendo.binder.min.js": fs.readFileSync("../js/kendo.binder.min.js", "utf8"),
    "kendo.validator.min.js": fs.readFileSync("../js/kendo.validator.min.js", "utf8"),
    "kendo.grid.min.js": fs.readFileSync("../js/kendo.grid.min.js", "utf8"),
	"kendo.resizable.min.js": fs.readFileSync("../js/kendo.resizable.min.js", "utf8"),
	"kendo.userevents.min.js": fs.readFileSync("../js/kendo.userevents.min.js", "utf8"),
	"kendo.virtuallist.min.js": fs.readFileSync("../js/kendo.virtuallist.min.js", "utf8"),
	"kendo.fx.min.js": fs.readFileSync("../js/kendo.fx.min.js", "utf8"),
	"kendo.draganddrop.min.js": fs.readFileSync("../js/kendo.draganddrop.min.js", "utf8"),
	"kendo.mobile.scroller.min.js": fs.readFileSync("../js/kendo.mobile.scroller.min.js", "utf8"),
	"kendo.list.min.js": fs.readFileSync("../js/kendo.list.min.js", "utf8"),
	"kendo.popup.min.js": fs.readFileSync("../js/kendo.popup.min.js", "utf8"),
	"kendo.dropdownlist.min.js": fs.readFileSync("../js/kendo.dropdownlist.min.js", "utf8")
}, {
	mangle: {
        toplevel: true,
    }
}).code, "utf8");

console.log('minify is Ok')