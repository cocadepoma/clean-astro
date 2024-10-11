import { ValueObject } from "./ValueObject";

interface PopularityProps {
  value: number;
}

export class Popularity extends ValueObject<PopularityProps> {

  private constructor(props: PopularityProps) {
    super(props);
  }

  public static create(popularity: number): Popularity {
    if (popularity < 0) {
      throw new Error("popularity must be a positive number");
    } else {
      return new Popularity({ value: popularity });
    }
  }

  public get value(): number {
    return this.props.value
  };
}