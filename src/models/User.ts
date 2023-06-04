export interface User {
    ConsumedQuantity: string;
    Cost: string;
    Date: string;
    InstanceId: string;
    MeterCategory: string;
    ResourceGroup: string;
    ResourceLocation: string;
    Tags: Tags;
    UnitOfMeasure: string;
    Location: string;
    ServiceName: string;
  }
  export interface Tags {
    environment: string;
  }
  