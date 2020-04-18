export interface EmploymentHistory {
    EmploymentID: number;
    DriverNumber: number;
    FromDate: Date;
    ToDate: Date;
    StillEmployed: boolean;
    CompanyName: string;
    CompanyStreet: string;
    CompanyCity: string;
    CompanyPostalCode: string;
    CompanyProvince: string;
    CompanyCountry: string;
    CompanyPhone: string;
    Position: string;
    Salary: string;
    SupervisorName: string;
    ReasonForLeaving: string;
}