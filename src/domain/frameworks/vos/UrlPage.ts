import { ValueObject } from "./ValueObject";

interface PopularityProps {
  value: string;
}

export class UrlPage extends ValueObject<PopularityProps> {

  private constructor(props: PopularityProps) {
    super(props);
  }

  public static create(url: string): UrlPage {
    if (url.length === 0) {
      throw new Error("url is required");
    } else if (!this.isValidUrl(url)) {
      throw new Error("url is not a valid URL");
    } else {
      return new UrlPage({ value: this.format(url) });
    }
  }

  private static format(url: string): string {
    return url.trim();
  }

  private static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  public get value(): string {
    return this.props.value
  };
}