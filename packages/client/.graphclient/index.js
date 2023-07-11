var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { gql } from '@graphql-mesh/utils';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import * as importedModule$0 from "./sources/tenderize/tenderize-localhost/introspectionSchema";
import { fileURLToPath } from '@graphql-mesh/utils';
var baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');
var importFn = function (moduleId) {
    var relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/tenderize/tenderize-localhost/introspectionSchema":
            return Promise.resolve(importedModule$0);
        default:
            return Promise.reject(new Error("Cannot find module '".concat(relativeModuleId, "'.")));
    }
};
var rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn: importFn,
    fileType: "ts",
}), {
    readonly: true,
    validate: false
});
export var rawServeConfig = undefined;
export function getMeshOptions() {
    return __awaiter(this, void 0, void 0, function () {
        var pubsub, sourcesStore, logger, cache, sources, transforms, additionalEnvelopPlugins, tenderizeTenderizeLocalhostTransforms, additionalTypeDefs, tenderizeTenderizeLocalhostHandler, additionalResolvers, merger;
        return __generator(this, function (_a) {
            pubsub = new PubSub();
            sourcesStore = rootStore.child('sources');
            logger = new DefaultLogger("GraphClient");
            cache = new MeshCache(__assign(__assign({}, {}), { importFn: importFn, store: rootStore.child('cache'), pubsub: pubsub, logger: logger }));
            sources = [];
            transforms = [];
            additionalEnvelopPlugins = [];
            tenderizeTenderizeLocalhostTransforms = [];
            additionalTypeDefs = [];
            tenderizeTenderizeLocalhostHandler = new GraphqlHandler({
                name: "tenderize/tenderize-localhost",
                config: { "endpoint": "http://127.0.0.1:8000/subgraphs/name/tenderize/tenderize-localhost" },
                baseDir: baseDir,
                cache: cache,
                pubsub: pubsub,
                store: sourcesStore.child("tenderize/tenderize-localhost"),
                logger: logger.child("tenderize/tenderize-localhost"),
                importFn: importFn,
            });
            sources[0] = {
                name: 'tenderize/tenderize-localhost',
                handler: tenderizeTenderizeLocalhostHandler,
                transforms: tenderizeTenderizeLocalhostTransforms
            };
            additionalResolvers = [];
            merger = new BareMerger({
                cache: cache,
                pubsub: pubsub,
                logger: logger.child('bareMerger'),
                store: rootStore.child('bareMerger')
            });
            return [2 /*return*/, {
                    sources: sources,
                    transforms: transforms,
                    additionalTypeDefs: additionalTypeDefs,
                    additionalResolvers: additionalResolvers,
                    cache: cache,
                    pubsub: pubsub,
                    merger: merger,
                    logger: logger,
                    additionalEnvelopPlugins: additionalEnvelopPlugins,
                    get documents() {
                        return [
                            {
                                document: GetAssetDocument,
                                get rawSDL() {
                                    return printWithCache(GetAssetDocument);
                                },
                                location: 'GetAssetDocument.graphql'
                            }, {
                                document: GetTenderizersDocument,
                                get rawSDL() {
                                    return printWithCache(GetTenderizersDocument);
                                },
                                location: 'GetTenderizersDocument.graphql'
                            }, {
                                document: GetTenderizerDocument,
                                get rawSDL() {
                                    return printWithCache(GetTenderizerDocument);
                                },
                                location: 'GetTenderizerDocument.graphql'
                            }, {
                                document: GetUserDocument,
                                get rawSDL() {
                                    return printWithCache(GetUserDocument);
                                },
                                location: 'GetUserDocument.graphql'
                            }
                        ];
                    },
                    fetchFn: fetchFn,
                }];
        });
    });
}
export function createBuiltMeshHTTPHandler() {
    return createMeshHTTPHandler({
        baseDir: baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
var meshInstance$;
export function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(function (meshOptions) { return getMesh(meshOptions); }).then(function (mesh) {
            var id = mesh.pubsub.subscribe('destroy', function () {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
export var execute = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return getBuiltGraphClient().then(function (_a) {
        var execute = _a.execute;
        return execute.apply(void 0, __spreadArray([], __read(args), false));
    });
};
export var subscribe = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return getBuiltGraphClient().then(function (_a) {
        var subscribe = _a.subscribe;
        return subscribe.apply(void 0, __spreadArray([], __read(args), false));
    });
};
export function getBuiltGraphSDK(globalContext) {
    var sdkRequester$ = getBuiltGraphClient().then(function (_a) {
        var sdkRequesterFactory = _a.sdkRequesterFactory;
        return sdkRequesterFactory(globalContext);
    });
    return getSdk(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return sdkRequester$.then(function (sdkRequester) { return sdkRequester.apply(void 0, __spreadArray([], __read(args), false)); });
    });
}
export var GetAssetDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetAsset($id: ID!) {\n  asset(id: $id) {\n    id\n    tvl\n    assetDays {\n      id\n      date\n      tvl\n      rewards\n    }\n  }\n}\n    "], ["\n    query GetAsset($id: ID!) {\n  asset(id: $id) {\n    id\n    tvl\n    assetDays {\n      id\n      date\n      tvl\n      rewards\n    }\n  }\n}\n    "])));
export var GetTenderizersDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query GetTenderizers($asset: String, $first: Int = 1000, $skip: Int = 0) {\n  tenderizers(first: $first, skip: $skip, where: {asset: $asset}) {\n    id\n    symbol\n    name\n    validator\n    asset {\n      id\n    }\n    tvl\n    shares\n    tenderizerDays {\n      id\n      date\n      tvl\n      rewards\n      shares\n    }\n  }\n}\n    "], ["\n    query GetTenderizers($asset: String, $first: Int = 1000, $skip: Int = 0) {\n  tenderizers(first: $first, skip: $skip, where: {asset: $asset}) {\n    id\n    symbol\n    name\n    validator\n    asset {\n      id\n    }\n    tvl\n    shares\n    tenderizerDays {\n      id\n      date\n      tvl\n      rewards\n      shares\n    }\n  }\n}\n    "])));
export var GetTenderizerDocument = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query GetTenderizer($id: ID!) {\n  tenderizer(id: $id) {\n    id\n    symbol\n    name\n    validator\n    asset {\n      id\n    }\n    tvl\n    shares\n    tenderizerDays {\n      id\n      date\n      tvl\n      rewards\n      shares\n    }\n  }\n}\n    "], ["\n    query GetTenderizer($id: ID!) {\n  tenderizer(id: $id) {\n    id\n    symbol\n    name\n    validator\n    asset {\n      id\n    }\n    tvl\n    shares\n    tenderizerDays {\n      id\n      date\n      tvl\n      rewards\n      shares\n    }\n  }\n}\n    "])));
export var GetUserDocument = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    stakes {\n      id\n      tenderizer {\n        id\n        asset {\n          id\n        }\n        validator\n        symbol\n        name\n      }\n      shares\n    }\n    unlocks {\n      id\n      tenderizer {\n        id\n        asset {\n          id\n        }\n        validator\n        symbol\n        name\n      }\n      amount\n      maturity\n      redeemed\n    }\n  }\n}\n    "], ["\n    query GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    stakes {\n      id\n      tenderizer {\n        id\n        asset {\n          id\n        }\n        validator\n        symbol\n        name\n      }\n      shares\n    }\n    unlocks {\n      id\n      tenderizer {\n        id\n        asset {\n          id\n        }\n        validator\n        symbol\n        name\n      }\n      amount\n      maturity\n      redeemed\n    }\n  }\n}\n    "])));
export function getSdk(requester) {
    return {
        GetAsset: function (variables, options) {
            return requester(GetAssetDocument, variables, options);
        },
        GetTenderizers: function (variables, options) {
            return requester(GetTenderizersDocument, variables, options);
        },
        GetTenderizer: function (variables, options) {
            return requester(GetTenderizerDocument, variables, options);
        },
        GetUser: function (variables, options) {
            return requester(GetUserDocument, variables, options);
        }
    };
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map