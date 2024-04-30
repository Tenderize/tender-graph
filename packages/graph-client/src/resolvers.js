"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        getUserMultichain: (root, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            return Promise.all(args.subgraphs.map((subgraph) => context.Tenderize.Query.user({
                root,
                args: {
                    id: args.user,
                },
                context: Object.assign(Object.assign({}, context), { subgraph }),
                info,
            }))).then((users) => {
                return users.reduce((prev, user) => {
                    var _a;
                    return ({
                        id: prev.id,
                        stakes: prev.stakes
                            ? prev.stakes.concat((user === null || user === void 0 ? void 0 : user.stakes) || [])
                            : user === null || user === void 0 ? void 0 : user.stakes,
                        unlocks: prev.unlocks
                            ? (_a = prev.unlocks) === null || _a === void 0 ? void 0 : _a.concat((user === null || user === void 0 ? void 0 : user.unlocks) || [])
                            : user === null || user === void 0 ? void 0 : user.unlocks,
                    });
                });
            });
        }),
    },
};
