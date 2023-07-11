"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.GetUserDocument = exports.GetTenderizerDocument = exports.GetTenderizersDocument = exports.GetAssetDocument = exports.getBuiltGraphSDK = exports.subscribe = exports.execute = exports.getBuiltGraphClient = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const utils_3 = require("@graphql-mesh/utils");
const cache_localforage_1 = __importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = __importDefault(require("@graphql-mesh/graphql"));
const merger_bare_1 = __importDefault(require("@graphql-mesh/merger-bare"));
const utils_4 = require("@graphql-mesh/utils");
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const importedModule$0 = __importStar(require("./sources/tenderize/tenderize-localhost/introspectionSchema"));
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/tenderize/tenderize-localhost/introspectionSchema":
            return Promise.resolve(importedModule$0);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.graphclient', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
function getMeshOptions() {
    return __awaiter(this, void 0, void 0, function* () {
        const pubsub = new utils_2.PubSub();
        const sourcesStore = rootStore.child('sources');
        const logger = new utils_3.DefaultLogger("GraphClient");
        const cache = new cache_localforage_1.default(Object.assign(Object.assign({}, {}), { importFn, store: rootStore.child('cache'), pubsub,
            logger }));
        const sources = [];
        const transforms = [];
        const additionalEnvelopPlugins = [];
        const tenderizeTenderizeLocalhostTransforms = [];
        const additionalTypeDefs = [];
        const tenderizeTenderizeLocalhostHandler = new graphql_1.default({
            name: "tenderize/tenderize-localhost",
            config: { "endpoint": "http://127.0.0.1:8000/subgraphs/name/tenderize/tenderize-localhost" },
            baseDir,
            cache,
            pubsub,
            store: sourcesStore.child("tenderize/tenderize-localhost"),
            logger: logger.child("tenderize/tenderize-localhost"),
            importFn,
        });
        sources[0] = {
            name: 'tenderize/tenderize-localhost',
            handler: tenderizeTenderizeLocalhostHandler,
            transforms: tenderizeTenderizeLocalhostTransforms
        };
        const additionalResolvers = [];
        const merger = new merger_bare_1.default({
            cache,
            pubsub,
            logger: logger.child('bareMerger'),
            store: rootStore.child('bareMerger')
        });
        return {
            sources,
            transforms,
            additionalTypeDefs,
            additionalResolvers,
            cache,
            pubsub,
            merger,
            logger,
            additionalEnvelopPlugins,
            get documents() {
                return [
                    {
                        document: exports.GetAssetDocument,
                        get rawSDL() {
                            return (0, utils_4.printWithCache)(exports.GetAssetDocument);
                        },
                        location: 'GetAssetDocument.graphql'
                    }, {
                        document: exports.GetTenderizersDocument,
                        get rawSDL() {
                            return (0, utils_4.printWithCache)(exports.GetTenderizersDocument);
                        },
                        location: 'GetTenderizersDocument.graphql'
                    }, {
                        document: exports.GetTenderizerDocument,
                        get rawSDL() {
                            return (0, utils_4.printWithCache)(exports.GetTenderizerDocument);
                        },
                        location: 'GetTenderizerDocument.graphql'
                    }, {
                        document: exports.GetUserDocument,
                        get rawSDL() {
                            return (0, utils_4.printWithCache)(exports.GetUserDocument);
                        },
                        location: 'GetUserDocument.graphql'
                    }
                ];
            },
            fetchFn: fetch_1.fetch,
        };
    });
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltGraphClient = getBuiltGraphClient;
const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
exports.getBuiltGraphSDK = getBuiltGraphSDK;
exports.GetAssetDocument = (0, utils_1.gql) `
    query GetAsset($id: ID!) {
  asset(id: $id) {
    id
    tvl
    assetDays {
      id
      date
      tvl
      rewards
    }
  }
}
    `;
exports.GetTenderizersDocument = (0, utils_1.gql) `
    query GetTenderizers($asset: String, $first: Int = 1000, $skip: Int = 0) {
  tenderizers(first: $first, skip: $skip, where: {asset: $asset}) {
    id
    symbol
    name
    validator
    asset {
      id
    }
    tvl
    shares
    tenderizerDays {
      id
      date
      tvl
      rewards
      shares
    }
  }
}
    `;
exports.GetTenderizerDocument = (0, utils_1.gql) `
    query GetTenderizer($id: ID!) {
  tenderizer(id: $id) {
    id
    symbol
    name
    validator
    asset {
      id
    }
    tvl
    shares
    tenderizerDays {
      id
      date
      tvl
      rewards
      shares
    }
  }
}
    `;
exports.GetUserDocument = (0, utils_1.gql) `
    query GetUser($id: ID!) {
  user(id: $id) {
    id
    stakes {
      id
      tenderizer {
        id
        asset {
          id
        }
        validator
        symbol
        name
      }
      shares
    }
    unlocks {
      id
      tenderizer {
        id
        asset {
          id
        }
        validator
        symbol
        name
      }
      amount
      maturity
      redeemed
    }
  }
}
    `;
function getSdk(requester) {
    return {
        GetAsset(variables, options) {
            return requester(exports.GetAssetDocument, variables, options);
        },
        GetTenderizers(variables, options) {
            return requester(exports.GetTenderizersDocument, variables, options);
        },
        GetTenderizer(variables, options) {
            return requester(exports.GetTenderizerDocument, variables, options);
        },
        GetUser(variables, options) {
            return requester(exports.GetUserDocument, variables, options);
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=index.js.map