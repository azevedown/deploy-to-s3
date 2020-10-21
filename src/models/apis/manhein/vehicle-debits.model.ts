export interface VehicleDebit {
  amount: number;
  description: string;
  due_date: string;
  expiration_date?: any;
  title: string;
  type: string;
  year: number;
  id: string;
  depends_on: string[];
  auto_infraction: string;
  issuing_agency: string;
}