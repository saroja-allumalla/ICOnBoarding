export interface Vehicle {
  VehicleType: string;
  LicenseNumber: string;
  LicenseIssueDate: Date;
  LicenseExpiryDate: Date;
  VehicleMake: string;
  VehicleModel: string;
  VehicleYear: string;
  VehicleInsurance: string;
  InsurancePolicyNo: string;
  InsurancePolicyExpiryDate: Date;
  LicensePlateNo: string;
  LicensePlateExpiryDate: Date;
  VehicleVinNo: string;
  WorkerCompensationClass: string;
  VehicleLeased: boolean;
}