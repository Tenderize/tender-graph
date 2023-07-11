declare const TenderGraph: {
    GetAsset(variables: import("./.graphclient/").Exact<{
        id: string;
    }>, options?: any): Promise<import("./.graphclient/").GetAssetQuery>;
    GetTenderizers(variables?: import("./.graphclient/").Exact<{
        asset?: import("./.graphclient/").InputMaybe<string> | undefined;
        first?: import("./.graphclient/").InputMaybe<number> | undefined;
        skip?: import("./.graphclient/").InputMaybe<number> | undefined;
    }> | undefined, options?: any): Promise<import("./.graphclient/").GetTenderizersQuery>;
    GetTenderizer(variables: import("./.graphclient/").Exact<{
        id: string;
    }>, options?: any): Promise<import("./.graphclient/").GetTenderizerQuery>;
    GetUser(variables: import("./.graphclient/").Exact<{
        id: string;
    }>, options?: any): Promise<import("./.graphclient/").GetUserQuery>;
};
export default TenderGraph;
//# sourceMappingURL=index.d.ts.map