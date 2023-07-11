declare const TenderGraph: {
    GetAsset(variables: import("./.graphclient/").Exact<{
        id: string;
    }>, options?: any): Promise<import("./.graphclient/").GetAssetQuery>;
    GetTenderizers(variables?: import("./.graphclient/").Exact<{
        asset?: string;
        first?: number;
        skip?: number;
    }>, options?: any): Promise<import("./.graphclient/").GetTenderizersQuery>;
    GetTenderizer(variables: import("./.graphclient/").Exact<{
        id: string;
    }>, options?: any): Promise<import("./.graphclient/").GetTenderizerQuery>;
    GetUser(variables: import("./.graphclient/").Exact<{
        id: string;
    }>, options?: any): Promise<import("./.graphclient/").GetUserQuery>;
};
export default TenderGraph;
//# sourceMappingURL=index.d.ts.map