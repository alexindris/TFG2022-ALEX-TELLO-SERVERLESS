export class Business {
  public static readonly BANKING = "banking";
  public static readonly INSURANCE = "insurance";
  public static readonly ENERGY = "energy";
  public static readonly CONSTRUCTION = "construction";
  public static readonly AGRICULTURE = "agriculture";
  public static readonly INDUSTRY = "industry";
  public static readonly PUBLIC_SERVICE = "public_service";
  public static readonly OTHER = "other";

  public static readonly types = [
    this.BANKING,
    this.INSURANCE,
    this.ENERGY,
    this.CONSTRUCTION,
    this.AGRICULTURE,
    this.INDUSTRY,
    this.PUBLIC_SERVICE,
    this.OTHER,
  ];

  private displayName: string;

  constructor(displayName: string) {
    this.displayName = displayName;
  }
  getDisplayName(): string {
    return this.displayName;
  }
}
