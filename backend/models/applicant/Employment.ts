export class Employment {
  public static readonly EMPLOYEE = "employee";
  public static readonly OFFICIAL = "official";
  public static readonly PENSIONER = "pensioner";
  public static readonly STUDENT = "student";
  public static readonly TRAINEE = "trainee";
  public static readonly FREELANCER = "freelancer";
  public static readonly UNEMPLOYED = "unemployed";
  public static readonly OTHER = "other";

  public static readonly types = [
    this.EMPLOYEE,
    this.OFFICIAL,
    this.PENSIONER,
    this.STUDENT,
    this.TRAINEE,
    this.FREELANCER,
    this.UNEMPLOYED,
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
