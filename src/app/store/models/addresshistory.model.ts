export interface AddressHistory {
    AddressID: number;
    DriverNumber: number;
    FromDate: Date;
    ToDate: Date;
    CurrentAddress: boolean;
    Unit: string;
    StreetName: string;
    Province: string;
    PostalCode: string;
    City: string;
    Country: string;
}