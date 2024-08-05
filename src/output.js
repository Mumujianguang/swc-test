function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function registerHook(key) {
    return (...args)=>console.log(args);
}
export default function design(base) {
    var _class;
    return _class = class Design extends base {
        copy() {
            console.log("copy");
        }
        render() {
            super.render();
            console.log("design render");
        }
    }, _ts_decorate([
        registerHook('beforeRender'),
        registerHook('afterRender')
    ], Design.prototype, "render", null), _class;
}
