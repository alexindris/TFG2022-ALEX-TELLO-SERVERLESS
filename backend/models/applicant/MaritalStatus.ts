export class MaritalStatus {
  public static readonly SINGLE = "single";
  public static readonly MARRIED = "married";
  public static readonly WIDOWED = "widowed";
  public static readonly DIVORCED = "divorced";

  public static readonly types = [
    this.SINGLE,
    this.MARRIED,
    this.WIDOWED,
    this.DIVORCED,
  ];

  private displayName: string;

  constructor(displayName: string) {
    this.displayName = displayName;
  }
  getDisplayName(): string {
    return this.displayName;
  }
}
