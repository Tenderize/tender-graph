import { Resolvers, User } from "../.graphclient";

export const resolvers: Resolvers = {
  Query: {
    getUserMultichain: async (
      root: any,
      args: { user: string; subgraphs: Array<string> },
      context: any,
      info: any
    ) => {
      return Promise.all(
        args.subgraphs.map((subgraph) =>
          context.Tenderize.Query.user({
            root,
            args: {
              id: args.user,
            },
            context: {
              ...context,
              subgraph,
            },
            info,
          })
        )
      ).then((users: User[]) =>
        // flatten the users into a single object
        {
          return users.reduce((prev: User, user: User) => ({
            id: prev.id,
            stakes: prev.stakes
              ? prev.stakes.concat(user?.stakes || [])
              : user?.stakes,
            unlocks: prev.unlocks
              ? prev.unlocks?.concat(user?.unlocks || [])
              : user?.unlocks,
          }));
        }
      );
    },
  },
};
